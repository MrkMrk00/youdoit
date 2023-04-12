import type { GraphQLTypes, InputType } from '../../generated/contember'
import { Selector } from '../../generated/contember'
import type { scalarResolver } from '../utilities/createScalarResolver'
import { ImageFragment } from './ImageFragment'

export const UserFragment = () =>
	Selector('User')({
		link: [{}, { url: true }],
		image: [{}, ImageFragment()],
		firstName: true,
		lastName: true,
		email: true,
	})

export type UserResult = InputType<GraphQLTypes['User'], ReturnType<typeof UserFragment>, typeof scalarResolver>
