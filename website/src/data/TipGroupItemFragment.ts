import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { TipFragment } from './TipFragment'

export const TipGroupItemFragment = (locale: string) =>
	Selector('TipGroupItem')({
		id: true,
		tip: [{}, TipFragment(locale)],
	})

export type TipGroupItemResult = InputType<
	GraphQLTypes['TipGroupItem'],
	ReturnType<typeof TipGroupItemFragment>,
	typeof scalarResolver
>
