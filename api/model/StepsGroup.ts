import { SchemaDefinition as d } from '@contember/schema-definition'
import { Locale } from './Locale'
import { Recipe } from './Recipe'
import { Step } from './Step'

export class StepsGroup {
	recipe = d.manyHasOne(Recipe, 'stepsGroups').cascadeOnDelete().notNull()
	locales = d.oneHasMany(StepsGroupLocale, 'base')
	order = d.intColumn().notNull()

	// gallery = @TODO
	steps = d.oneHasMany(Step, 'group')
}

export class StepsGroupLocale {
	base = d.manyHasOne(StepsGroup, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'stepsGroups').cascadeOnDelete().notNull()

	title = d.stringColumn()
	buttonTitle = d.stringColumn()
}
