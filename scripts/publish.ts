import { readdir } from 'fs/promises'
import { join } from 'node:path'
import { config } from '../src/config.ts'

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
    console.log(pkgname)
  }
}
