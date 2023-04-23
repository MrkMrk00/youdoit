import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import { LocaleFragment } from './LocaleFragment'
import { SeoFragment } from './SeoFragment'

export function HomePageLocaleFragment() {
	return Selector('HomePageLocale')({
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
			},
		],
		title: true,
		seo: [{}, SeoFragment()],
	})
}

export type HomePageLocaleResult = InputType<GraphQLTypes['HomePageLocale'], ReturnType<typeof HomePageLocaleFragment>>
