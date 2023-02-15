import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ImageFragment } from './ImageFragment'

export function SeoFragment() {
	return Selector('Seo')({
		title: true,
		ogTitle: true,
		description: true,
		ogDescription: true,
		ogImage: [{}, ImageFragment()],
		noFollow: true,
		noIndex: true,
	})
}

export type SeoResult = InputType<GraphQLTypes['Seo'], ReturnType<typeof SeoFragment>, typeof scalarResolver>
