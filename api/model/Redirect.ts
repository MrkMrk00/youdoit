import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Link } from './Link'
import { Linkable } from './Linkable'

@acl.allow(publicRole, { read: true })
export class Redirect {
	link = d.oneHasOneInverse(Linkable, 'redirect').notNull()
	target = d.oneHasOne(Link).notNull().cascadeOnDelete()
}
