import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'

export function LocaleFragment() {
	return Selector('Locale')({
		code: true,
		// order: true,
	})
}

export type LocaleResult = InputType<GraphQLTypes['Locale'], ReturnType<typeof LocaleFragment>, typeof scalarResolver>
