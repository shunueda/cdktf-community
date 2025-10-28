import { get } from '@cdktf/cli-core'
import { Language, TerraformProviderConstraint } from '@cdktf/commons'
import { join } from 'node:path'
import { fetchProviders } from './fetch-providers.ts'

const providers = await Array.fromAsync(fetchProviders())

for (const provider of new Set(providers)) {
  try {
    await get({
      constraints: [new TerraformProviderConstraint(provider)],
      constructsOptions: {
        targetLanguage: Language.TYPESCRIPT,
        codeMakerOutput: join('gen', provider)
      }
    })
  } catch (e) {
    console.warn(`Failed to generate provider ${provider}: ${e}`)
  }
}
