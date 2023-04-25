import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { LocaleFragment } from './LocaleFragment'

export function HomePageFragment() {
	return Selector('HomePage')({
		locales: [
			{},
			{
				id: true,
				locale: [{}, LocaleFragment()],
				link: [{}, { url: true }],
			},
		],
	})
}

export type HomePageResult = InputType<
	GraphQLTypes['HomePage'],
	ReturnType<typeof HomePageFragment>,
	typeof scalarResolver
>
