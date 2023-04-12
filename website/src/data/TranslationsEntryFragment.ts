import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { TranslationsEntryValueFragment } from './TranslationsEntryValueFragment'

export function TranslationsEntryFragment(locale: string) {
	return Selector('TranslationsEntry')({
		id: true,
		key: true,
		valuesByLocale: [{ by: { locale: { code: locale } } }, TranslationsEntryValueFragment()],
	})
}

export type TranslationsEntryResult = InputType<
	GraphQLTypes['TranslationsEntry'],
	ReturnType<typeof TranslationsEntryFragment>,
	typeof scalarResolver
>
