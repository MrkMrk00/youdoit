import type { WebAppManifest } from 'web-app-manifest'
import { One } from '../../generated/contember'
import { contember } from '../utilities/contember'
import { scalarResolver } from '../utilities/createScalarResolver'
import { handleGetServerSideProps } from '../utilities/handlers'

function Webmanifest() {
	// getServerSideProps will do the heavy lifting
}

export const getServerSideProps = handleGetServerSideProps(async ({ res, locale }) => {
	const { getGeneral: general } = await contember('query', { scalars: scalarResolver })({
		getGeneral: [
			{
				by: {
					unique: One.One,
				},
			},
			{
				name: true,
				shortName: true,
				seo: [
					{},
					{
						description: true,
					},
				],
			},
		],
	})
	const data: WebAppManifest = {
		name: general?.name,
		short_name: general?.shortName,
		description: general?.seo?.description,
		start_url: '/',
		display: 'minimal-ui',
		lang: locale,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore Id is not in the official WebAppManifest type, but it is in the specification.
		id: locale,
		icons: [
			{
				src: '/favicon.png',
				sizes: '1024x1024',
				type: 'image/png',
				purpose: 'any',
			},
		],
		background_color: '#000000',
		theme_color: '#0072FF',
		orientation: 'portrait',
	}
	res.setHeader('Content-Type', 'application/manifest+json')
	res.write(JSON.stringify(data))
	res.end()

	return {
		props: {},
	}
})

export default Webmanifest
