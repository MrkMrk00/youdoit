import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Content } from './Content'
import { Linkable } from './Linkable'
import { Seo } from './Seo'

@acl.allow(publicRole, { read: true })
export class GenericPage {
	link = d.oneHasOneInverse(Linkable, 'genericPage').notNull()
	title = d.stringColumn()
	content = d.oneHasOne(Content).setNullOnDelete()
	seo = d.oneHasOne(Seo).setNullOnDelete()
}
