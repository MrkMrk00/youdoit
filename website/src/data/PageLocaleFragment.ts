import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { LocaleFragment } from './LocaleFragment'

export function PageLocaleFragment() {
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

export type PageLocaleResult = InputType<
	GraphQLTypes['HomePage'],
	ReturnType<typeof PageLocaleFragment>,
	typeof scalarResolver
>
