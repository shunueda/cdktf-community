import { get } from '@cdktf/cli-core'
import { Language, TerraformProviderConstraint } from '@cdktf/commons'
import { join } from 'node:path'
import { config } from '../src/config.ts'
import { fetchProviders } from '../src/fetch-providers.ts'

const providers = await Array.fromAsync(fetchProviders())

for (const provider of new Set(providers)) {
  try {
    await get({
      constraints: [new TerraformProviderConstraint(provider)],
      constructsOptions: {
        targetLanguage: Language.TYPESCRIPT,
        codeMakerOutput: join(config.genDir, provider)
      }
    })
  } catch (e) {
    console.warn(`Failed to generate provider ${provider}: ${e}`)
  }
}
