import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Redirect } from './Redirect'

@acl.allow(publicRole, { read: true })
export class Linkable {
	url = d.stringColumn().notNull().unique()

	redirect = d.oneHasOne(Redirect, 'link').cascadeOnDelete()
}
