import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { Image } from './Image'
import { Linkable } from './Linkable'
import { PinnedRecipe } from './PinnedRecipe'
import { Recipe } from './Recipe'
import { Seo } from './Seo'
import { publicRole } from './acl'

@acl.allow(publicRole, { read: true })
export class User {
	pinnedRecipes = d.oneHasMany(PinnedRecipe, 'user')
	createdRecipes = d.oneHasMany(Recipe, 'createdBy')

	link = d.oneHasOneInverse(Linkable, 'user').notNull()

	image = d.manyHasOne(Image)
	firstName = d.stringColumn().notNull()
	lastName = d.stringColumn().notNull()
	email = d.stringColumn().notNull().unique()

	seo = d.oneHasOne(Seo).setNullOnDelete()
}
