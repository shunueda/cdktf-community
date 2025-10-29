import { Arborist } from '@npmcli/arborist'
import { publish } from 'libnpmpublish'
import { createWriteStream, type PathLike } from 'node:fs'
import { glob, readdir, readFile, writeFile } from 'node:fs/promises'
import { createRequire } from 'node:module'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { env } from 'node:process'
import { pipeline } from 'node:stream/promises'
import pacote from 'pacote'
import { createProgram, ModuleKind } from 'typescript'
import { config } from '../src/config.ts'
import { createPackageJson } from '../src/package-json.ts'
import { semverStringSchema } from '../src/schema.ts'

const require = createRequire(import.meta.url)

function logMem(label: string) {
  const mem = process.memoryUsage()
  const fmt = (n: number) => (n / 1024 / 1024).toFixed(1)
  console.log(
    `[MEM] ${label} | rss=${fmt(mem.rss)}MB heapUsed=${fmt(mem.heapUsed)}MB ext=${fmt(mem.external)}MB`
  )
}

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
    rootDir: join(outdir, 'providers'),
    outDir: join(outdir, 'dist'),
    noCheck: true
  })
  const result = program.emit()
  for (const sf of program.getSourceFiles()) {
    ;(sf as any).text = ''
    ;(sf as any).statements = []
    ;(sf as any).locals = undefined
    ;(sf as any).symbol = undefined
    ;(sf as any).imports = undefined
    ;(sf as any).identifiers = undefined
    ;(sf as any).resolvedModules = undefined
  }
  try {
    const checker = program.getTypeChecker()
    ;(checker as any).symbolTable = undefined
    ;(checker as any).typeCache = undefined
    ;(checker as any).resolvedModules = undefined
  } catch {}
  logMem('before-delete-cache')
  delete require.cache[require.resolve('typescript')]
  global.gc?.()
  logMem('after-delete-cache')
  return result
}

console.log(`[INIT] Starting publish script`)
logMem('startup')

const startTime = Date.now()

for (const namespaceDir of await readdir(config.genDir)) {
  for (const nameDir of await readdir(join(config.genDir, namespaceDir))) {
    const pkgStart = Date.now()
    const namespace = namespaceDir.toLowerCase()
    const name = nameDir.toLowerCase()
    const pkgname = `@cdktf-community/${[
      'provider',
      ...(namespace === name ? [name] : [namespace, name])
    ].join('-')}`
    const dir = join(config.genDir, namespaceDir, nameDir)

    console.log(`\n[PKG] ${pkgname} start`)
    logMem('before-parseVersion')

    const version = await parseVersion(join(dir, 'versions.json'))
    console.log(`[PKG] ${pkgname}@${version}`)

    if (await isVersionPublished(pkgname, version)) {
      console.log(`[PKG] already published, skipping`)
      continue
    }
    logMem('after-isPublished')

    const tsFiles = await Array.fromAsync(glob(join(dir, '**/*.ts')))
    console.log(`[PKG] Found ${tsFiles.length} TypeScript files`)
    logMem('before-compile')

    const result = compile(tsFiles, dir)

    if (result.emitSkipped) {
      console.warn(`NOMERGE Failed to compile ${pkgname}@${version}`)
      continue
    }
    logMem('after-compile')

    await writeFile(
      join(dir, 'package.json'),
      JSON.stringify(createPackageJson(pkgname, version, dir))
    )
    logMem('after-package-json')

    const manifest = await pacote.manifest(dir)
    logMem('after-manifest')

    const tmpTarPath = join(tmpdir(), `${pkgname.replace('/', '-')}.tgz`)
    console.log(`[PKG] Creating tarball ${tmpTarPath}`)

    await pacote.tarball.stream(
      dir,
      async transform => {
        await pipeline(transform, createWriteStream(tmpTarPath))
      },
      { Arborist }
    )
    logMem('after-tarball')

    const tarball = await readFile(tmpTarPath)
    console.log(
      `[PKG] Tarball size ${(tarball.byteLength / 1024 / 1024).toFixed(1)} MB`
    )
    logMem('after-readFile')

    try {
      console.log(`[PKG] Publishing to npm...`)
      await publish(manifest as any, tarball, {
        provenance: true,
        forceAuth: {
          token: env.NPM_TOKEN
        }
      })
      console.log(`[PKG] ✅ Published successfully`)
    } catch (e) {
      console.warn(`[PKG] ⚠️ Failed to publish ${pkgname}@${version}: ${e}`)
    }

    const pkgElapsed = ((Date.now() - pkgStart) / 1000).toFixed(1)
    console.log(`[PKG] Done in ${pkgElapsed}s`)
    logMem('after-publish')
  }
}

console.log(`[DONE] Total time ${(Date.now() - startTime) / 1000}s`)
logMem('end')
