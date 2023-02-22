import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { PinnedRecipe } from './PinnedRecipe'
import { StepLocale } from './Step'

@acl.allow(publicRole, { read: true })
export class StepModification {
	pinnedRecipe = d.manyHasOne(PinnedRecipe, 'modification').cascadeOnDelete().notNull()
	step = d.manyHasOne(StepLocale, 'modificationDate').cascadeOnDelete().notNull()

	date = d.dateTimeColumn()
}
