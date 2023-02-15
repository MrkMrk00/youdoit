import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'

@acl.allow(publicRole, { read: true })
export class Image {
	url = d.stringColumn().notNull()
	width = d.intColumn()
	height = d.intColumn()
	size = d.intColumn()
	type = d.stringColumn()

	alt = d.stringColumn()
}
