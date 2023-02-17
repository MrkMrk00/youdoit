import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { CategoryLocale } from './Category'
import { HomePageLocale } from './HomePage'

@acl.allow(publicRole, { read: true })
export class Linkable {
	url = d.stringColumn().notNull().unique()

	homePage = d.oneHasOne(HomePageLocale, 'link').cascadeOnDelete()
	category = d.oneHasOne(CategoryLocale, 'link').cascadeOnDelete()
}
