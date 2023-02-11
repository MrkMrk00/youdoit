import { SchemaDefinition as d } from '@contember/schema-definition'
import { Recipe } from './Recipe'
import { User } from './User'

export class PinnedRecipe {
	user = d.manyHasOne(User, 'pinnedRecipes').cascadeOnDelete().notNull()
	derivedBy = d.manyHasOne(Recipe, 'pinnedRecipes').cascadeOnDelete().notNull()
}
