import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'

export const StepFragment = (locale: string) =>
	Selector('Step')({
		id: true,
		localesByLocale: [
			{ by: { locale: { code: locale } } },
			{
				title: true,
			},
		],
	})

export type StepResult = InputType<GraphQLTypes['Step'], ReturnType<typeof StepFragment>, typeof scalarResolver>
