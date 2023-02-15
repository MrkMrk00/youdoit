import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { HomePageLocale } from './HomePage'
import { RecipeLocale } from './Recipe'
import { StepLocale } from './Step'
import { StepGroupLocale } from './StepGroup'

@acl.allow(publicRole, { read: true })
export class Locale {
	code = d.stringColumn().notNull().unique()
	label = d.stringColumn()

	homePage = d.oneHasMany(HomePageLocale, 'locale')

	recipes = d.oneHasMany(RecipeLocale, 'locale')
	stepsGroups = d.oneHasMany(StepGroupLocale, 'locale')
	steps = d.oneHasMany(StepLocale, 'locale')
}
