import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { publicRole } from './acl'
import { CategoryLocale } from './Category'
import { HomePageLocale } from './HomePage'
import { PinnedRecipesPageLocale } from './PinnedRecipesPage'
import { RecipeLocale } from './Recipe'

@acl.allow(publicRole, { read: true })
export class Linkable {
	url = d.stringColumn().notNull().unique()

	homePage = d.oneHasOne(HomePageLocale, 'link').cascadeOnDelete()
	pinnedRecipesPage = d.oneHasOne(PinnedRecipesPageLocale, 'link').cascadeOnDelete()
	category = d.oneHasOne(CategoryLocale, 'link').cascadeOnDelete()
	recipe = d.oneHasOne(RecipeLocale, 'link').cascadeOnDelete()
}
