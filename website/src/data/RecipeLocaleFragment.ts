import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ImageFragment } from './ImageFragment'
import { LocaleFragment } from './LocaleFragment'
import { StepGroupFragment } from './StepGroupFragment'
import { TipGroupFragment } from './TipGroupFragment'

export const RecipeLocaleFragment = (locale: string) =>
	Selector('RecipeLocale')({
		id: true,
		base: [
			{},
			{
				id: true,
				locales: [{}, { id: true, locale: [{}, LocaleFragment()], link: [{}, { url: true }] }],
				createdBy: [{}, { firstName: true, lastName: true, image: [{}, ImageFragment()] }],
				// pinnedRecipes: [{}, {}]
				categories: [{}, { localesByLocale: [{ by: { locale: { code: locale } } }, { title: true }] }],
				publishDate: true,
				price: true,
				mainImage: [{}, ImageFragment()],
				tileImage: [{}, ImageFragment()],
				stepsGroups: [{}, StepGroupFragment(locale)],
				tipGroups: [{}, TipGroupFragment(locale)],
			},
		],
		link: [{}, { url: true }],
		title: true,
		description: true,
		tileDescription: true,
	})

export type RecipeLocaleResult = InputType<
	GraphQLTypes['RecipeLocale'],
	ReturnType<typeof RecipeLocaleFragment>,
	typeof scalarResolver
>
