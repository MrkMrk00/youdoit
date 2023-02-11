import { SchemaDefinition as d } from '@contember/schema-definition'
import { ImplemetationDate } from './ImplementationDate'
import { ModificationDate } from './ModificationDate'
import { Recipe } from './Recipe'
import { User } from './User'

export class PinnedRecipe {
	user = d.manyHasOne(User, 'pinnedRecipes').cascadeOnDelete().notNull()
	derivedBy = d.manyHasOne(Recipe, 'pinnedRecipes').cascadeOnDelete().notNull()
	implementationDate = d.oneHasMany(ImplemetationDate, 'pinnedRecipes')

	modificationDate = d.oneHasMany(ModificationDate, 'pinnedRecipes')
}
