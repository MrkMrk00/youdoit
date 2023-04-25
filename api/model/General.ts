import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { Seo } from './Seo'
import { publicRole } from './acl'

@acl.allow(publicRole, { read: true })
export class General {
	// Webmanifest
	name = d.stringColumn()
	shortName = d.stringColumn()

	seo = d.oneHasOne(Seo).setNullOnDelete()
}
