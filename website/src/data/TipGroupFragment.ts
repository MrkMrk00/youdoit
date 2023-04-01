import type { GraphQLTypes, InputType } from '../../generated/contember'
import { OrderDirection, Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { TipGroupItemFragment } from './TipGroupItemFragment'

export const TipGroupFragment = (locale: string) =>
	Selector('TipGroup')({
		id: true,
		items: [{ orderBy: [{ order: OrderDirection.asc }] }, TipGroupItemFragment(locale)],
		localesByLocale: [
			{ by: { locale: { code: locale } } },
			{
				title: true,
				description: true,
			},
		],
	})

export type TipGroupResult = InputType<
	GraphQLTypes['TipGroup'],
	ReturnType<typeof TipGroupFragment>,
	typeof scalarResolver
>
