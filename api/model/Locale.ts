import { SchemaDefinition as d } from '@contember/schema-definition'
import { RecipeLocale } from './Recipe'

export class Locale {
	code = d.stringColumn().notNull().unique()
	label = d.stringColumn()

	recipes = d.oneHasMany(RecipeLocale, 'locale')
}
