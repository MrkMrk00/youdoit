import { AclDefinition as acl, SchemaDefinition as d } from '@contember/schema-definition'
import { CategoryLocale } from './Category'
import { HomePageLocale } from './HomePage'
import { PinnedRecipesPageLocale } from './PinnedRecipesPage'
import { RecipeLocale } from './Recipe'
import { Redirect } from './Redirect'
import { User } from './User'
import { publicRole } from './acl'

@acl.allow(publicRole, { read: true })
export class Linkable {
	url = d.stringColumn().notNull().unique()

	redirect = d.oneHasOne(Redirect, 'link').cascadeOnDelete()

	homePage = d.oneHasOne(HomePageLocale, 'link').cascadeOnDelete()
	pinnedRecipesPage = d.oneHasOne(PinnedRecipesPageLocale, 'link').cascadeOnDelete()
	category = d.oneHasOne(CategoryLocale, 'link').cascadeOnDelete()
	recipe = d.oneHasOne(RecipeLocale, 'link').cascadeOnDelete()

	user = d.oneHasOne(User, 'link').cascadeOnDelete()
}
