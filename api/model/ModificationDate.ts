import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { PinnedRecipe } from './PinnedRecipe'
import { Step } from './Step'

@acl.allow(publicRole, { read: true })
export class ModificationDate {
	pinnedRecipes = d.manyHasOne(PinnedRecipe, 'modificationDate').cascadeOnDelete().notNull()
	step = d.manyHasOne(Step, 'modificationDate').cascadeOnDelete().notNull()

	date = d.dateTimeColumn()
}
