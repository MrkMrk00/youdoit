import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { ImplemetationDate } from './ImplementationDate'
import { Locale } from './Locale'
import { ModificationDate } from './ModificationDate'

@acl.allow(publicRole, { read: true })
export class Step {
	locales = d.oneHasMany(StepLocale, 'base')
	implementationDate = d.oneHasMany(ImplemetationDate, 'step')
	modificationDate = d.oneHasMany(ModificationDate, 'step')
}

@d.Unique('base', 'locale')
@acl.allow(publicRole, { read: true })
export class StepLocale {
	base = d.manyHasOne(Step, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'steps').cascadeOnDelete().notNull()

	isChecked = d.boolColumn().notNull().default(false)
	title = d.stringColumn()
}
