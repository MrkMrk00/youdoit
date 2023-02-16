import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Image } from './Image'
import { Locale } from './Locale'
import { PinnedRecipe } from './PinnedRecipe'
import { StepGroup } from './StepGroup'
import { User } from './User'

@acl.allow(publicRole, { read: true })
export class Recipe {
	locales = d.oneHasMany(RecipeLocale, 'base')

	createdBy = d.manyHasOne(User, 'createdRecipes').cascadeOnDelete().notNull()
	pinnedRecipes = d.oneHasMany(PinnedRecipe, 'derivedBy')

	publishDate = d.dateColumn()
	price = d.stringColumn()
	mainImage = d.manyHasOne(Image)
	stepsGroups = d.oneHasMany(StepGroup, 'recipe')
}
@d.Unique('base', 'locale')
@acl.allow(publicRole, { read: true })
export class RecipeLocale {
	base = d.manyHasOne(Recipe, 'locales').notNull().cascadeOnDelete()
	locale = d.manyHasOne(Locale, 'recipes').cascadeOnDelete().notNull()

	title = d.stringColumn()
	description = d.stringColumn()
}
