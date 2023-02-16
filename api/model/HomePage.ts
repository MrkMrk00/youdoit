import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Linkable } from './Linkable'
import { Locale } from './Locale'
import { One } from './One'
import { Recipe } from './Recipe'
import { RecipeList } from './RecipeList'
import { Seo } from './Seo'

@acl.allow(publicRole, { read: true })
export class HomePage {
	unique = d.enumColumn(One).notNull().unique()
	locales = d.oneHasMany(HomePageLocale, 'base')
}

@d.Unique('base', 'locale')
@acl.allow(publicRole, { read: true })
export class HomePageLocale {
	base = d.manyHasOne(HomePage, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'homePage').cascadeOnDelete().notNull()

	mainRecipe = d.manyHasOne(Recipe)
	recipeCarousel = d.oneHasOne(RecipeList)

	title = d.stringColumn()
	link = d.oneHasOneInverse(Linkable, 'homePage').notNull()
	seo = d.oneHasOne(Seo)
}
