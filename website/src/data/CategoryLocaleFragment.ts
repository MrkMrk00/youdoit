import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ImageFragment } from './ImageFragment'
import { LocaleFragment } from './LocaleFragment'
import { RecipeFragment } from './RecipeFragment'
import { SeoFragment } from './SeoFragment'

export const CategoryLocaleFragment = (locale: string) =>
	Selector('CategoryLocale')({
		id: true,
		base: [
			{},
			{
				locales: [
					{},
					{
						locale: [{}, LocaleFragment()],
						link: [
							{},
							{
								url: true,
							},
						],
					},
				],
				image: [{}, ImageFragment()],
				recipes: [{}, RecipeFragment(locale)],
			},
		],
		title: true,
		link: [{}, { url: true }],
		description: true,
		seo: [{}, SeoFragment()],
	})

export type CategoryLocaleResult = InputType<
	GraphQLTypes['CategoryLocale'],
	ReturnType<typeof CategoryLocaleFragment>,
	typeof scalarResolver
>
