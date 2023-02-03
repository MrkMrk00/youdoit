import type { ScalarCoders, ScalarResolver } from '../../generated/contember'

export function createScalarResolver<SR extends Required<ScalarCoders> & Record<string, ScalarResolver | undefined>>(
	scalarResolver: SR,
) {
	return scalarResolver
}

export const scalarResolver = createScalarResolver({
	UUID: {
		encode(value: unknown) {
			return JSON.stringify(value)
		},
		decode(value: unknown) {
			// Because GraphQL-Zeus is stupid
			return value as string
		},
	},
	Date: {
		encode(value: unknown) {
			return JSON.stringify(value)
		},
		decode(value: unknown) {
			// Because GraphQL-Zeus is stupid
			return value as string
		},
	},
	DateTime: {
		encode(value: unknown) {
			return JSON.stringify(value)
		},
		decode(value: unknown) {
			// Because GraphQL-Zeus is stupid
			return value as string
		},
	},
	Json: {
		encode(value: unknown) {
			return JSON.stringify(value)
		},
		decode(value: unknown) {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			return value as any
		},
	},
})
