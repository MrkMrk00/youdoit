import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ContentFragment } from './ContentFragment'
import { SeoFragment } from './SeoFragment'

export function GenericPageFragment() {
	return Selector('GenericPage')({
		title: true,
		content: [{}, ContentFragment()],
		seo: [{}, SeoFragment()],
	})
}

export type GenericPageResult = InputType<
	GraphQLTypes['GenericPage'],
	ReturnType<typeof GenericPageFragment>,
	typeof scalarResolver
>
