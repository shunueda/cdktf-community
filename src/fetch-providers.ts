import { URL } from 'node:url'
import { providersResponseSchema } from './schema.ts'

const base = 'https://registry.terraform.io/v2/providers'
const pageSize = 100 // maximum allowed by the API

// Official providers get prebuilt npm packages by default
const tiers = ['partner,community']

// only fetch providers with more than 500k downloads. Pulled out of thin air.
const downloadThreadhold = 500_000

function createUrl(page: number): URL {
  const url = new URL(base)
  url.searchParams.set('filter[tier]', tiers.join())
  url.searchParams.set('page[size]', pageSize.toString())
  url.searchParams.set('page[number]', page.toString())
  return url
}

export async function* fetchProviders(page = 0): AsyncGenerator<string> {
  const url = createUrl(page)
  const response = await fetch(url)
  const json = await response.json()
  const { data } = providersResponseSchema.parse(json)
  if (!data.length) {
    return
  }
  for (const { attributes } of data) {
    if (attributes.downloads > downloadThreadhold) {
      yield attributes['full-name']
    }
  }
  yield* fetchProviders(page + 1)
}
