import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { ImplemetationDate } from './ImplementationDate'
import { ModificationDate } from './ModificationDate'
import { Recipe } from './Recipe'
import { User } from './User'

@acl.allow(publicRole, { read: true })
export class PinnedRecipe {
	user = d.manyHasOne(User, 'pinnedRecipes').cascadeOnDelete().notNull()
	derivedBy = d.manyHasOne(Recipe, 'pinnedRecipes').cascadeOnDelete().notNull()
	implementationDate = d.oneHasMany(ImplemetationDate, 'pinnedRecipes')

	modificationDate = d.oneHasMany(ModificationDate, 'pinnedRecipes')
}
