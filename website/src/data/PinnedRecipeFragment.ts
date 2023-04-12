import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { RecipeLocaleFragment } from './RecipeLocaleFragment'

export const PinnedRecipeFragment = (locale: string) =>
	Selector('PinnedRecipe')({
		id: true,
		derivedBy: [{}, { localesByLocale: [{ by: { locale: { code: locale } } }, RecipeLocaleFragment(locale)] }],
	})

export type PinnedRecipeResult = InputType<
	GraphQLTypes['PinnedRecipe'],
	ReturnType<typeof PinnedRecipeFragment>,
	typeof scalarResolver
>
