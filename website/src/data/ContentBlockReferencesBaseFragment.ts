import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ContentReferenceLinkableItemFragment } from './ContentReferenceLinkableItemFragment'
import { ImageFragment } from './ImageFragment'

export const ContentBlockReferencesBaseFragment = () => {
	return Selector('ContentReference')({
		id: true,
		type: true,

		primaryText: true,
		image: [{}, ImageFragment()],
		linkables: [{}, ContentReferenceLinkableItemFragment()],
	})
}

export type ContentBlockReferencesBaseResult = InputType<
	GraphQLTypes['ContentReference'],
	ReturnType<typeof ContentBlockReferencesBaseFragment>,
	typeof scalarResolver
>
