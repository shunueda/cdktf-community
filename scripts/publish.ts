import { build } from 'esbuild'
import { type PathLike } from 'node:fs'
import { glob, readdir, readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { config } from '../src/config.ts'
import { createPackageJson } from '../src/package-json.ts'
import { semverStringSchema } from '../src/schema.ts'
import { createTsconfigJson } from '../src/tsconfig-json.ts'

async function parseVersion(file: PathLike): Promise<string> {
  const content = await readFile(file, 'utf-8')
  const versions = JSON.parse(content)
  const version = Object.values(versions)[0]
  return semverStringSchema.parse(version)
}

for (const namespace of await readdir(config.genDir)) {
  for (const name of await readdir(join(config.genDir, namespace))) {
    // add `name-` prefix to follow the official cdktf convension.
    // if namespace is same as name, do not duplicate the name.
    const pkgname = [
      'provider',
      ...(namespace === name ? [name] : [namespace, name])
    ]
      .join('-')
      .toLowerCase()

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
      JSON.stringify(
        createPackageJson(`@cdktf-community/${pkgname}`, version, dir)
      )
    )
    await writeFile(
      join(dir, 'tsconfig.json'),
      JSON.stringify(createTsconfigJson(name))
    )
  }
}
