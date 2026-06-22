import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { portfolio } from './portfolio'
import { team } from './team'
import { faqBlock } from './faqBlock'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faqBlock, service, portfolio, team],
}