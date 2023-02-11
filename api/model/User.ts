import { SchemaDefinition as d } from '@contember/schema-definition'
import { Image } from './Image'
import { PinnedRecipe } from './PinnedRecipe'
import { Recipe } from './Recipe'

export class User {
	pinnedRecipes = d.oneHasMany(PinnedRecipe, 'user')
	createdRecipes = d.oneHasMany(Recipe, 'createdBy')

	image = d.manyHasOne(Image)
	firstName = d.stringColumn().notNull()
	lastName = d.stringColumn().notNull()
	email = d.stringColumn().notNull()
}
