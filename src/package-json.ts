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
    type: 'module',
    exports: {
      '.': {
        import: './dist/index.js',
        types: './dist/index.d.ts',
        require: './dist/index.js'
      },
      './*': {
        import: './dist/*/index.js',
        types: './dist/*/index.d.ts',
        require: './dist/*/index.js'
      },
      './constraints.json': './constraints.json',
      './versions.json': './versions.json',
      './package.json': './package.json'
    },
    repository: {
      type: 'git',
      url: 'https://github.com/shunueda/cdktf-community.git',
      directory: directory.toString()
    },
    files: ['dist']
  } satisfies PackageJson
}
