import { get } from '@cdktf/cli-core'
import { Language, TerraformProviderConstraint } from '@cdktf/commons'
import { join } from 'node:path'
import { limitFunction } from 'p-limit'
import { fetchProviders } from './fetch-providers.ts'

const providers = await Array.fromAsync(fetchProviders())

await Promise.all(
  new Set(providers).values().map(
    limitFunction(
      async name => {
        try {
          await get({
            constraints: [new TerraformProviderConstraint(name)],
            constructsOptions: {
              targetLanguage: Language.TYPESCRIPT,
              codeMakerOutput: join('gen', name)
            }
          })
        } catch (e) {
          console.warn(`Failed to generate provider ${name}: ${e}`)
        }
      },
      // pulled out of thin air; could be adjusted, but it seems to work fine
      // limit too high causes out of disk space errors on GitHub Actions
      { concurrency: 5 }
    )
  )
)
