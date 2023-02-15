import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { ImplemetationDate } from './ImplementationDate'
import { Locale } from './Locale'
import { ModificationDate } from './ModificationDate'
import { StepGroup } from './StepGroup'

@acl.allow(publicRole, { read: true })
export class Step {
	group = d.manyHasOne(StepGroup, 'steps').cascadeOnDelete().notNull()
	locales = d.oneHasMany(StepLocale, 'base')
	order = d.intColumn().notNull()
	implementationDate = d.oneHasMany(ImplemetationDate, 'step')
	modificationDate = d.oneHasMany(ModificationDate, 'step')
}

@d.Unique('base', 'locale')
@acl.allow(publicRole, { read: true })
export class StepLocale {
	base = d.manyHasOne(Step, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'steps').cascadeOnDelete().notNull()

	title = d.stringColumn()
}
