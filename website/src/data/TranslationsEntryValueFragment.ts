import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'

export function TranslationsEntryValueFragment() {
	return Selector('TranslationsEntryValue')({
		id: true,
		locale: [{}, { code: true }],
		value: true,
	})
}

export type TranslationsEntryValueResult = InputType<
	GraphQLTypes['TranslationsEntry'],
	ReturnType<typeof TranslationsEntryValueFragment>,
	typeof scalarResolver
>
