import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { One } from './One'
import { Seo } from './Seo'
import { publicRole } from './acl'

@acl.allow(publicRole, { read: true })
export class General {
	unique = d.enumColumn(One).notNull().unique()

	// Webmanifest
	name = d.stringColumn()
	shortName = d.stringColumn()

	seo = d.oneHasOne(Seo).setNullOnDelete()
}
