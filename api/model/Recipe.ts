import { SchemaDefinition as d } from '@contember/schema-definition'
import { Image } from './Image'
import { Locale } from './Locale'

export class Recipe {
	order = d.intColumn().notNull()
	locales = d.oneHasMany(RecipeLocale, 'base')

	publishDate = d.dateColumn()
	price = d.stringColumn()
	// steps = d.oneHasMany() @TODO
	// author = d.manyHasOne() @TODO
	mainImage = d.manyHasOne(Image)
}

export class RecipeLocale {
	base = d.manyHasOne(Recipe, 'locales').notNull().cascadeOnDelete()
	locale = d.manyHasOne(Locale, 'recipes').cascadeOnDelete().notNull()

	title = d.stringColumn()
	description = d.stringColumn()
}
