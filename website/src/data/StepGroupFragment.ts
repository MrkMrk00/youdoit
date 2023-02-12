import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { StepFragment } from './StepFragment'

export const StepGroupFragment = (locale: string) =>
	Selector('StepGroup')({
		id: true,
		steps: [{}, StepFragment(locale)],
		localesByLocale: [
			{ by: { locale: { code: locale } } },
			{
				title: true,
				buttonTitle: true,
			},
		],
	})

export type StepGroupResult = InputType<
	GraphQLTypes['StepGroup'],
	ReturnType<typeof StepGroupFragment>,
	typeof scalarResolver
>
