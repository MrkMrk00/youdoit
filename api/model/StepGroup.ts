import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { Locale } from './Locale'
import { Recipe } from './Recipe'
import { Step } from './Step'

@acl.allow(publicRole, { read: true })
export class StepGroup {
	recipe = d.manyHasOne(Recipe, 'stepsGroups').cascadeOnDelete().notNull()
	locales = d.oneHasMany(StepGroupLocale, 'base')
	order = d.intColumn().notNull()

	// gallery = @TODO
	steps = d.oneHasMany(Step, 'group').orderBy('order')
}

@d.Unique('base', 'locale')
@acl.allow(publicRole, { read: true })
export class StepGroupLocale {
	base = d.manyHasOne(StepGroup, 'locales').cascadeOnDelete().notNull()
	locale = d.manyHasOne(Locale, 'stepsGroups').cascadeOnDelete().notNull()

	title = d.stringColumn()
	buttonTitle = d.stringColumn()
}
