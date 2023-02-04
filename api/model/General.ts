import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { One } from './One'

@acl.allow(publicRole, { read: true })
export class General {
	unique = d.enumColumn(One).notNull().unique()

	dummy = d.stringColumn()
	// image = d.manyHasOne(Image).setNullOnDelete()

	// seo = d.oneHasOne(Seo)
}
