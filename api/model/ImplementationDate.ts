import { SchemaDefinition as d } from '@contember/schema-definition'
import { PinnedRecipe } from './PinnedRecipe'
import { Step } from './Step'

export class ImplemetationDate {
	pinnedRecipes = d.manyHasOne(PinnedRecipe, 'implementationDate').cascadeOnDelete().notNull()
	step = d.manyHasOne(Step, 'implementationDate').cascadeOnDelete().notNull()

	date = d.dateTimeColumn()
}
