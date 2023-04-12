import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Locale } from './Locale'

@acl.allow(publicRole, { read: true })
export class TranslationsEntry {
	order = d.intColumn().notNull()
	key = d.stringColumn().notNull().unique()
	values = d.oneHasMany(TranslationsEntryValue, 'entry')
}

@acl.allow(publicRole, { read: true })
@d.Unique('entry', 'locale')
export class TranslationsEntryValue {
	order = d.intColumn().notNull()
	entry = d.manyHasOne(TranslationsEntry, 'values').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale)
	value = d.stringColumn().notNull()
}
