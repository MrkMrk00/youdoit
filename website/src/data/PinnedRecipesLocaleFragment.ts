import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import { LocaleFragment } from './LocaleFragment'
import { SeoFragment } from './SeoFragment'

export function PinnedRecipesPageLocaleFragment() {
	return Selector('PinnedRecipesPageLocale')({
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
			},
		],
		title: true,
		seo: [{}, SeoFragment()],
	})
}

export type PinnedRecipesPageLocaleResult = InputType<
	GraphQLTypes['PinnedRecipesPageLocale'],
	ReturnType<typeof PinnedRecipesPageLocaleFragment>
>
