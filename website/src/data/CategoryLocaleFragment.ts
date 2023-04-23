import type { GraphQLTypes, InputType } from '../../generated/contember'
import { OrderDirection, Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ImageFragment } from './ImageFragment'
import { LocaleFragment } from './LocaleFragment'
import { RecipeLocaleFragment } from './RecipeLocaleFragment'
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
						id: true,
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
				recipes: [
					{ orderBy: [{ publishDate: OrderDirection.desc }] },
					{ localesByLocale: [{ by: { locale: { code: locale } } }, RecipeLocaleFragment(locale)] },
				],
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
