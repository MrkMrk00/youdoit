import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ImageFragment } from './ImageFragment'
import { SeoFragment } from './SeoFragment'

export function GeneralFragment() {
	return Selector('General')({
		dummy: true,
		image: [{}, ImageFragment()],
		seo: [{}, SeoFragment()],
	})
}

export type GeneralResult = InputType<
	GraphQLTypes['General'],
	ReturnType<typeof GeneralFragment>,
	typeof scalarResolver
>
