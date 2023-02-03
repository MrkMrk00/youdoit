import { Thunder } from '../../generated/contember'
import { GraphQLRequestError } from './GraphQLRequestError'

const apiToken = process.env.NEXT_PUBLIC_TOKEN
const apiUrl = process.env.NEXT_PUBLIC_API_URL

export const contember = Thunder(async (query, variables) => {
	if (typeof apiUrl !== 'string') {
		throw new Error('Missing api url.')
	}
	const response = await fetch(apiUrl, {
		body: JSON.stringify({ query, variables }),
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${apiToken}`,
		},
	})

	if (!response.ok) {
		return new Promise((_, reject) => {
			response
				.text()
				.then((text) => {
					try {
						reject(new GraphQLRequestError({ url: apiUrl, query, variables, jsonResponse: JSON.parse(text) }))
					} catch (err) {
						reject(new GraphQLRequestError({ url: apiUrl, query, variables, textResponse: text }))
					}
				})
				.catch(reject)
		})
	}

	const json = await response.json()

	return json.data
})
