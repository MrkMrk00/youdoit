import { SchemaDefinition as d } from '@contember/schema-definition'
import { Linkable } from './Linkable'
import { Locale } from './Locale'

export class HomePage {
	locales = d.oneHasMany(HomePageLocale, 'base')
}

@d.Unique('base', 'locale')
export class HomePageLocale {
	base = d.manyHasOne(HomePage, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'homePage').cascadeOnDelete().notNull()

	link = d.oneHasOneInverse(Linkable, 'homePage').notNull()
}
