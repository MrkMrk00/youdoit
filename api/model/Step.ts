import { SchemaDefinition as d } from '@contember/schema-definition'
import { ImplemetationDate } from './ImplementationDate'
import { Locale } from './Locale'
import { ModificationDate } from './ModificationDate'
import { StepGroup } from './StepGroup'

export class Step {
	group = d.manyHasOne(StepGroup, 'steps').cascadeOnDelete().notNull()
	locales = d.oneHasMany(StepLocale, 'base')
	order = d.intColumn().notNull()
	implementationDate = d.oneHasMany(ImplemetationDate, 'step')
	modificationDate = d.oneHasMany(ModificationDate, 'step')
}

@d.Unique('base', 'locale')
export class StepLocale {
	base = d.manyHasOne(Step, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'steps').cascadeOnDelete().notNull()

	title = d.stringColumn()
}
