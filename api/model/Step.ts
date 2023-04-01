import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { ImplemetationDate } from './ImplementationDate'
import { Locale } from './Locale'
import { StepModification } from './StepModification'

@acl.allow(publicRole, { read: true })
export class Step {
	locales = d.oneHasMany(StepLocale, 'base')
	implementationDate = d.oneHasMany(ImplemetationDate, 'step')
	hasTimer = d.boolColumn()
	timerCount = d.intColumn()
}

@d.Unique('base', 'locale')
@acl.allow(publicRole, { read: true })
export class StepLocale {
	base = d.manyHasOne(Step, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'steps').cascadeOnDelete().notNull()

	modificationDate = d.oneHasMany(StepModification, 'step')
	title = d.stringColumn()
}
