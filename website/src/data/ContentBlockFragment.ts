import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ContentBlockReferencesBaseFragment } from './ContentBlockReferencesBaseFragment'

export const ContentBlockFragment = () => {
	return Selector('ContentBlock')({
		id: true,
		json: true,
		references: [{}, ContentBlockReferencesBaseFragment()],
	})
}

export type ContentBlockResult = InputType<
	GraphQLTypes['ContentBlock'],
	ReturnType<typeof ContentBlockFragment>,
	typeof scalarResolver
>
