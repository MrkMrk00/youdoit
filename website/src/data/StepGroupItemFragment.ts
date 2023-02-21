import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { StepFragment } from './StepFragment'
import { TipFragment } from './TipFragment'

export const StepGroupItemFragment = (locale: string) =>
	Selector('StepGroupItem')({
		id: true,
		type: true,
		step: [{}, StepFragment(locale)],
		tip: [{}, TipFragment(locale)],
	})

export type StepGroupItemResult = InputType<
	GraphQLTypes['StepGroupItem'],
	ReturnType<typeof StepGroupItemFragment>,
	typeof scalarResolver
>
