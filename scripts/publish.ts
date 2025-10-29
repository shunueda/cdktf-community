import { Arborist } from '@npmcli/arborist'
import { publish } from 'libnpmpublish'
import { type PathLike } from 'node:fs'
import { readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { env } from 'node:process'
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

function compile(dir: string) {
  const program = createProgram([join(dir, '**/*.ts')], {
    module: ModuleKind.ES2022,
    declaration: true,
    sourceMap: true,
    rootDir: join(dir, 'providers'),
    outDir: join(dir, 'dist')
  })
  return program.emit()
}

for (const namespaceDir of await readdir(config.genDir)) {
  for (const nameDir of await readdir(join(config.genDir, namespaceDir))) {
    const namespace = namespaceDir.toLowerCase()
    const name = nameDir.toLowerCase()
    const pkgname = `@cdktf-community/${[
      'provider',
      ...(namespace === name ? [name] : [namespace, name])
    ].join('-')}`

    const dir = join(config.genDir, namespaceDir, nameDir)

    const version = await parseVersion(join(dir, 'versions.json'))

    if (await isVersionPublished(pkgname, version)) {
      continue
    }

    const result = compile(dir)

    if (result.emitSkipped) {
      console.warn(`⚠️ Failed to compile ${pkgname}@${version}`)
      continue
    }

    await writeFile(
      join(dir, 'package.json'),
      JSON.stringify(createPackageJson(pkgname, version, dir))
    )

    const manifest = await pacote.manifest(dir)
    const tarball = await pacote.tarball(dir, { Arborist })
    try {
      await publish(manifest as any, tarball, {
        provenance: true,
        forceAuth: {
          token: env.NPM_TOKEN
        }
      })
      process.exit(0)
    } catch (e) {
      console.warn(`⚠️ Failed to publish ${pkgname}@${version}: ${e}`)
    }
  }
}
