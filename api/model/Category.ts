import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Linkable } from './Linkable'
import { Recipe } from './Recipe'
import { Seo } from './Seo'

@acl.allow(publicRole, { read: true })
export class Category {
	order = d.intColumn().notNull()
	locales = d.oneHasMany(CategoryLocale, 'base')

	recipes = d.manyHasManyInverse(Recipe, 'categories')
}

export class CategoryLocale {
	base = d.manyHasOne(Category, 'locales').cascadeOnDelete().notNull()

	link = d.oneHasOneInverse(Linkable, 'category').notNull()
	title = d.stringColumn()
	seo = d.oneHasOne(Seo)
}
