import type { PathLike } from 'node:fs'
import type { PackageJson } from 'type-fest'

export function createPackageJson(
  name: string,
  version: string,
  directory: PathLike
): PackageJson {
  return {
    name,
    version,
    scripts: {
      build: 'tsc'
    },
    type: 'module',
    exports: {
      '.': {
        import: './dist/index.js',
        default: './dist/index.js',
        types: './dist/index.d.ts'
      },
      './*': {
        import: './dist/*/index.js',
        default: './dist/*/index.js',
        types: './dist/*/index.d.ts'
      }
    },
    repository: {
      type: 'git',
      url: 'https://github.com/shunueda/cdktf-community.git',
      directory: directory.toString()
    },
    files: ['dist']
  } satisfies PackageJson
}
