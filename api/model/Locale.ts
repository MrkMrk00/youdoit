import { SchemaDefinition as d } from '@contember/schema-definition'
import { RecipeLocale } from './Recipe'
import { StepLocale } from './Step'
import { StepsGroupLocale } from './StepsGroup'

export class Locale {
	code = d.stringColumn().notNull().unique()
	label = d.stringColumn()

	recipes = d.oneHasMany(RecipeLocale, 'locale')
	stepsGroups = d.oneHasMany(StepsGroupLocale, 'locale')
	steps = d.oneHasMany(StepLocale, 'locale')
}
