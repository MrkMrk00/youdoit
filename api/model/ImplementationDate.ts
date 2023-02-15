import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { PinnedRecipe } from './PinnedRecipe'
import { Step } from './Step'

@acl.allow(publicRole, { read: true })
export class ImplemetationDate {
	pinnedRecipes = d.manyHasOne(PinnedRecipe, 'implementationDate').cascadeOnDelete().notNull()
	step = d.manyHasOne(Step, 'implementationDate').cascadeOnDelete().notNull()

	date = d.dateTimeColumn()
}
