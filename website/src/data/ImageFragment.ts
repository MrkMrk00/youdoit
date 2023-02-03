import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'

export function ImageFragment() {
	return Selector('Image')({
		id: true,
		url: true,
		width: true,
		height: true,
		alt: true,
	})
}

export type ImageResult = InputType<GraphQLTypes['Image'], ReturnType<typeof ImageFragment>, typeof scalarResolver>
