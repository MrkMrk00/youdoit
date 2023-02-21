import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'

export const TipFragment = (locale: string) =>
	Selector('Tip')({
		id: true,
		localesByLocale: [
			{ by: { locale: { code: locale } } },
			{
				title: true,
			},
		],
	})

export type TipResult = InputType<GraphQLTypes['Tip'], ReturnType<typeof TipFragment>, typeof scalarResolver>
