import { Arborist } from '@npmcli/arborist'
import { build } from 'esbuild'
import { publish } from 'libnpmpublish'
import { type PathLike } from 'node:fs'
import { glob, readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { env } from 'node:process'
import pacote from 'pacote'
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

for (const namespace of await readdir(config.genDir)) {
  for (const name of await readdir(join(config.genDir, namespace))) {
    // add `name-` prefix to follow the official cdktf convension.
    // if namespace is same as name, do not duplicate the name.
    const pkgname = `@cdktf-community/${[
      'provider',
      ...(namespace === name ? [name] : [namespace, name])
    ]
      .join('-')
      .toLowerCase()}`

    const dir = join(config.genDir, namespace, name)

    const version = await parseVersion(join(dir, 'versions.json'))

    try {
      await build({
        entryPoints: await Array.fromAsync(glob(join(dir, '**/*.ts'))),
        outdir: join(dir, 'dist'),
        bundle: false,
        minify: false,
        sourcemap: false,
        treeShaking: false,
        sourcesContent: false
      })
    } catch {
      console.warn(`Failed to compile ${pkgname}`)
    }

    await writeFile(
      join(dir, 'package.json'),
      JSON.stringify(createPackageJson(pkgname, version, dir))
    )

    if (await isVersionPublished(pkgname, version)) {
      continue
    }
    console.log('Publishing', pkgname, version)
    const manifest = await pacote.manifest(dir)
    const tarData = await pacote.tarball(dir, { Arborist })
    console.log(tarData)
    await publish(manifest as any, tarData, {
      provenance: true,
      token: env.NPM_TOKEN
    })
    break
  }
  break
}
