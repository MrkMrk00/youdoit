import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Linkable } from './Linkable'
import { Locale } from './Locale'
import { One } from './One'
import { Seo } from './Seo'

@acl.allow(publicRole, { read: true })
export class PinnedRecipesPage {
	unique = d.enumColumn(One).notNull().unique()
	locales = d.oneHasMany(PinnedRecipesPageLocale, 'base')
}

@d.Unique('base', 'locale')
@acl.allow(publicRole, { read: true })
export class PinnedRecipesPageLocale {
	base = d.manyHasOne(PinnedRecipesPage, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'pinnedRecipesPage').cascadeOnDelete().notNull()

	title = d.stringColumn()
	link = d.oneHasOneInverse(Linkable, 'pinnedRecipesPage').notNull()
	seo = d.oneHasOne(Seo)
}
