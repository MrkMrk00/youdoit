import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Recipe } from './Recipe'

@acl.allow(publicRole, { read: true })
export class RecipeList {
	items = d.oneHasMany(RecipeListItem, 'list')
}

@acl.allow(publicRole, { read: true })
export class RecipeListItem {
	list = d.manyHasOne(RecipeList, 'items')
	order = d.intColumn().notNull()

	recipe = d.manyHasOne(Recipe)
}
