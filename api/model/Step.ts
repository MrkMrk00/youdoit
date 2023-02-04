import { SchemaDefinition as d } from '@contember/schema-definition'
import { Locale } from './Locale'
import { StepsGroup } from './StepsGroup'

export class Step {
	group = d.manyHasOne(StepsGroup, 'steps').cascadeOnDelete().notNull()
	locales = d.oneHasMany(StepLocale, 'base')
	order = d.intColumn().notNull()
}

export class StepLocale {
	base = d.manyHasOne(Step, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'steps').cascadeOnDelete().notNull()

	title = d.stringColumn()
}
