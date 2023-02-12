import { SchemaDefinition as d } from '@contember/schema-definition'
import { Locale } from './Locale'
import { Recipe } from './Recipe'
import { Step } from './Step'

export class StepGroup {
	recipe = d.manyHasOne(Recipe, 'stepsGroups').cascadeOnDelete().notNull()
	locales = d.oneHasMany(StepGroupLocale, 'base')
	order = d.intColumn().notNull()

	// gallery = @TODO
	steps = d.oneHasMany(Step, 'group').orderBy('order')
}

@d.Unique('base', 'locale')
export class StepGroupLocale {
	base = d.manyHasOne(StepGroup, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'stepsGroups').cascadeOnDelete().notNull()

	title = d.stringColumn()
	buttonTitle = d.stringColumn()
}
