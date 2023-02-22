import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { ImplemetationDate } from './ImplementationDate'
import { Recipe } from './Recipe'
import { StepModification } from './StepModification'
import { User } from './User'

@acl.allow(publicRole, { read: true })
export class PinnedRecipe {
	user = d.manyHasOne(User, 'pinnedRecipes').cascadeOnDelete().notNull()
	derivedBy = d.manyHasOne(Recipe, 'pinnedRecipes').cascadeOnDelete().notNull()
	implementationDate = d.oneHasMany(ImplemetationDate, 'pinnedRecipe')

	modification = d.oneHasMany(StepModification, 'pinnedRecipe')
}
