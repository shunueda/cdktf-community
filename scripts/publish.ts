import { Arborist } from '@npmcli/arborist'
import { publish } from 'libnpmpublish'
import { createWriteStream, type PathLike } from 'node:fs'
import { glob, readdir, readFile, writeFile } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { env } from 'node:process'
import { pipeline } from 'node:stream'
import pacote from 'pacote'
import { createProgram, ModuleKind } from 'typescript'
import { config } from '../src/config.ts'
import { createPackageJson } from '../src/package-json.ts'
import { semverStringSchema } from '../src/schema.ts'

async function parseVersion(file: PathLike): Promise<string> {
  const content = await readFile(file, 'utf-8')
  const versions = JSON.parse(content)
  const version = Object.values(versions)[0]
  return semverStringSchema.parse(version)
}

async function isVersionPublished(
  pkgname: string,
  version: string
): Promise<boolean> {
  try {
    await pacote.manifest(`${pkgname}@${version}`)
    return true
  } catch {
    return false
  }
}

function compile(filenames: string[], outdir: string) {
  const program = createProgram(filenames, {
    module: ModuleKind.ES2022,
    declaration: true,
    sourceMap: true,
    declarationMap: true,
    outDir: join(outdir, 'dist'),
    noCheck: true
  })
  return program.emit()
}

for (const namespaceDir of await readdir(config.genDir)) {
  for (const nameDir of await readdir(join(config.genDir, namespaceDir))) {
    const namespace = namespaceDir.toLowerCase()
    const name = nameDir.toLowerCase()
    // add `name-` prefix to follow the official cdktf convension.
    // if namespace is same as name, do not duplicate the name.
    const pkgname = `@cdktf-community/${[
      'provider',
      ...(namespace === name ? [name] : [namespace, name])
    ].join('-')}`

    const dir = join(config.genDir, namespaceDir, nameDir)

    const version = await parseVersion(join(dir, 'versions.json'))

    const result = compile(
      await Array.fromAsync(glob(join(dir, '**/*.ts'))),
      dir
    )
    if (result.emitSkipped) {
      console.warn(`NOMERGE Failed to compile ${pkgname}@${version}`)
      continue
    }

    await writeFile(
      join(dir, 'package.json'),
      JSON.stringify(createPackageJson(pkgname, version, dir))
    )

    if (await isVersionPublished(pkgname, version)) {
      continue
    }
    const manifest = await pacote.manifest(dir)
    const tmpTarPath = join(tmpdir(), `${pkgname.replace('/', '-')}.tgz`)
    await pacote.tarball.stream(
      dir,
      async tarStream => {
        pipeline(tarStream, createWriteStream(tmpTarPath))
      },
      { Arborist }
    )
    const tarData = await readFile(tmpTarPath)
    await publish(manifest as any, tarData, {
      forceAuth: { token: env.NPM_TOKEN }
    })
    // FIXME - type is wrong in libnpmpublish
    try {
      await publish(manifest as any, tarData, {
        provenance: true,
        forceAuth: {
          token: env.NPM_TOKEN
        }
      })
    } catch {
      console.warn(`NOMERGE Failed to publish ${pkgname}@${version}`)
    }
  }
}
