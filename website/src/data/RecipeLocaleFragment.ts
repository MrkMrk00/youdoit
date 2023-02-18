import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ImageFragment } from './ImageFragment'
import { StepGroupFragment } from './StepGroupFragment'

export const RecipeLocaleFragment = (locale: string) =>
	Selector('RecipeLocale')({
		id: true,
		base: [
			{},
			{
				createdBy: [{}, { firstName: true, lastName: true }],
				// pinnedRecipes: [{}, {}]
				categories: [{}, { localesByLocale: [{ by: { locale: { code: locale } } }, { title: true }] }],
				publishDate: true,
				price: true,
				mainImage: [{}, ImageFragment()],
				stepsGroups: [{}, StepGroupFragment(locale)],
			},
		],
		title: true,
		description: true,
		tileDescription: true,
	})

export type RecipeLocaleResult = InputType<
	GraphQLTypes['RecipeLocale'],
	ReturnType<typeof RecipeLocaleFragment>,
	typeof scalarResolver
>
