import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { PinnedRecipe } from './PinnedRecipe'
import { Step } from './Step'

@d.Unique('pinnedRecipe', 'step')
@acl.allow(publicRole, { read: true, create: true, delete: true })
export class ImplemetationDate {
	pinnedRecipe = d.manyHasOne(PinnedRecipe, 'implementationDates').cascadeOnDelete().notNull()
	step = d.manyHasOne(Step, 'implementationDate').cascadeOnDelete().notNull()

	date = d.dateTimeColumn().default('now').notNull()
}
