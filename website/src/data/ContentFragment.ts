import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ContentBlockFragment } from './ContentBlockFragment'

export const ContentFragment = () => {
	return Selector('Content')({
		blocks: [{}, ContentBlockFragment()],
	})
}

export type ContentResult = InputType<
	GraphQLTypes['Content'],
	ReturnType<typeof ContentFragment>,
	typeof scalarResolver
>
