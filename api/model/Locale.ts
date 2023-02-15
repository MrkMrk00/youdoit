import { SchemaDefinition as d } from '@contember/schema-definition'
import { HomePageLocale } from './HomePage'
import { RecipeLocale } from './Recipe'
import { StepLocale } from './Step'
import { StepGroupLocale } from './StepGroup'

export class Locale {
	code = d.stringColumn().notNull().unique()
	label = d.stringColumn()

	homePage = d.oneHasMany(HomePageLocale, 'locale')

	recipes = d.oneHasMany(RecipeLocale, 'locale')
	stepsGroups = d.oneHasMany(StepGroupLocale, 'locale')
	steps = d.oneHasMany(StepLocale, 'locale')
}
