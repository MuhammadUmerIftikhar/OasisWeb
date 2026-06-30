import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { portfolio } from './portfolio'
import { team } from './team'
import { faqBlock } from './faqBlock'
import { caseStudy } from './caseStudy'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [faqBlock, service, portfolio, team, caseStudy],
}