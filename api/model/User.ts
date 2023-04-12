import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Image } from './Image'
import { PinnedRecipe } from './PinnedRecipe'
import { Recipe } from './Recipe'

@acl.allow(publicRole, { read: true })
export class User {
	pinnedRecipes = d.oneHasMany(PinnedRecipe, 'user')
	createdRecipes = d.oneHasMany(Recipe, 'createdBy')

	link = d.stringColumn().unique().notNull()

	image = d.manyHasOne(Image)
	firstName = d.stringColumn().notNull()
	lastName = d.stringColumn().notNull()
	email = d.stringColumn().notNull().unique()
}
