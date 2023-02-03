import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'

export function ContentReferenceLinkableItemFragment() {
	return Selector('ContentReferenceLinkableItem')({
		id: true,
		item: [
			{},
			{
				url: true,
			},
		],
	})
}

export type ContentReferenceLinkableItemResult = InputType<
	GraphQLTypes['ContentReferenceLinkableItem'],
	ReturnType<typeof ContentReferenceLinkableItemFragment>,
	typeof scalarResolver
>
