import { SchemaDefinition as d } from '@contember/schema-definition'
import { PinnedRecipe } from './PinnedRecipe'
import { Step } from './Step'

export class ModificationDate {
	pinnedRecipes = d.manyHasOne(PinnedRecipe, 'modificationDate').cascadeOnDelete().notNull()
	step = d.manyHasOne(Step, 'modificationDate').cascadeOnDelete().notNull()

	date = d.dateTimeColumn()
}
