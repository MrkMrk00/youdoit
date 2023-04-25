import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { Category } from './Category'
import { Image } from './Image'
import { Linkable } from './Linkable'
import { Locale } from './Locale'
import { PinnedRecipe } from './PinnedRecipe'
import { Seo } from './Seo'
import { StepGroup } from './StepGroup'
import { TipGroup } from './TipGroup'
import { User } from './User'
import { publicRole } from './acl'

@acl.allow(publicRole, { read: true })
export class Recipe {
	locales = d.oneHasMany(RecipeLocale, 'base')

	createdBy = d.manyHasOne(User, 'createdRecipes').cascadeOnDelete().notNull()
	pinnedRecipes = d.oneHasMany(PinnedRecipe, 'derivedBy')

	categories = d.manyHasMany(Category, 'recipes')

	publishDate = d.dateColumn()
	price = d.stringColumn()
	mainImage = d.manyHasOne(Image)
	tileImage = d.manyHasOne(Image)
	stepsGroups = d.oneHasMany(StepGroup, 'recipe')
	tipGroups = d.oneHasMany(TipGroup, 'recipe')
}
@d.Unique('base', 'locale')
@acl.allow(publicRole, { read: true })
export class RecipeLocale {
	base = d.manyHasOne(Recipe, 'locales').notNull().cascadeOnDelete()
	locale = d.manyHasOne(Locale, 'recipes').cascadeOnDelete().notNull()

	link = d.oneHasOneInverse(Linkable, 'recipe').notNull()
	title = d.stringColumn()
	tileDescription = d.stringColumn()
	description = d.stringColumn()

	seo = d.oneHasOne(Seo).setNullOnDelete()
}
