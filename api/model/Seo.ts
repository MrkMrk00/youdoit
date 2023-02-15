import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Image } from './Image'

@acl.allow(publicRole, { read: true })
export class Seo {
	title = d.stringColumn()
	description = d.stringColumn()
	ogTitle = d.stringColumn()
	ogDescription = d.stringColumn()
	ogImage = d.oneHasOne(Image).cascadeOnDelete()
	noIndex = d.boolColumn().default(false)
	noFollow = d.boolColumn().default(false)
}
