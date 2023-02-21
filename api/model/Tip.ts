import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Locale } from './Locale'

@acl.allow(publicRole, { read: true })
export class Tip {
	locales = d.oneHasMany(TipLocale, 'base')
}

@d.Unique('base', 'locale')
@acl.allow(publicRole, { read: true })
export class TipLocale {
	base = d.manyHasOne(Tip, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'tips').cascadeOnDelete().notNull()

	title = d.stringColumn()
}
