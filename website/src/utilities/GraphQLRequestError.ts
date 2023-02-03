export class GraphQLRequestError extends Error {
	name = 'GraphQLRequestError'

	constructor(
		public info: {
			url: string
			query: string
			variables: undefined | Record<string, unknown>
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			jsonResponse?: any
			textResponse?: string
		},
	) {
		super(info.jsonResponse ? JSON.stringify(info.jsonResponse, null, 2) : info.textResponse)
	}
}
