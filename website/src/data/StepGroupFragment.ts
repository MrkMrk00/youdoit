import type { GraphQLTypes, InputType } from '../../generated/contember'
import { OrderDirection, Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { StepGroupItemFragment } from './StepGroupItemFragment'

export const StepGroupFragment = (locale: string) =>
	Selector('StepGroup')({
		id: true,
		items: [{ orderBy: [{ order: OrderDirection.asc }] }, StepGroupItemFragment(locale)],
		localesByLocale: [
			{ by: { locale: { code: locale } } },
			{
				title: true,
				description: true,
				buttonTitle: true,
			},
		],
	})

export type StepGroupResult = InputType<
	GraphQLTypes['StepGroup'],
	ReturnType<typeof StepGroupFragment>,
	typeof scalarResolver
>
