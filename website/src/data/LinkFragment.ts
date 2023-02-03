import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'

export function LinkFragment() {
	return Selector('Link')({
		id: true,
		title: true,
		type: true,
		internalLink: [
			{},
			{
				url: true,
			},
		],
		externalLink: true,
	})
}

export type LinkResult = InputType<GraphQLTypes['Link'], ReturnType<typeof LinkFragment>, typeof scalarResolver>
