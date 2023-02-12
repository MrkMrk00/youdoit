import type { GraphQLTypes, InputType } from '../../generated/contember'
import { OrderDirection, Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ImageFragment } from './ImageFragment'
import { RecipeFragment } from './RecipeFragment'

export const UserFragment = (locale: string) =>
	Selector('User')({
		createdRecipes: [{ orderBy: [{ order: OrderDirection.asc }] }, RecipeFragment(locale)],
		image: [{}, ImageFragment()],
		firstName: true,
		lastName: true,
		email: true,
	})

export type UserResult = InputType<GraphQLTypes['User'], ReturnType<typeof UserFragment>, typeof scalarResolver>
