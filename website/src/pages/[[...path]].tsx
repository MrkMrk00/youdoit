import Image from 'next/image'
import { One } from '../../generated/contember'
import { Container } from '../components/Container'
import { ContentRenderer } from '../components/ContentRenderer'
import { Dump } from '../components/Dump'
import { Icon } from '../components/Icon'
import { Seo } from '../components/Seo'
import { GeneralFragment } from '../data/GeneralFragment'
import { GenericPageFragment } from '../data/GenericPageFragment'
import { LinkFragment } from '../data/LinkFragment'
import { contember } from '../utilities/contember'
import { contemberLinkToHref } from '../utilities/contemberLinkToHref'
import { scalarResolver } from '../utilities/createScalarResolver'
import { getLinkableUrlFromContext } from '../utilities/getLinkableUrlFromContext'
import type { InferDataLoaderProps } from '../utilities/handlers'
import { handleGetStaticPaths, handleGetStaticProps } from '../utilities/handlers'

export type PageProps = InferDataLoaderProps<typeof getStaticProps>

export default function ({ general, page, seo }: PageProps) {
	return (
		<>
			<Seo {...seo} />
			<Container size="wide">
				<h1>
					Page <Icon name="twitter" /> <Icon name="instagram" /> <Icon name="linkedin" />
				</h1>
			</Container>
			{page && (
				<>
					<Container>
						<h2>{page.title}</h2>
					</Container>
					{page.content && <ContentRenderer content={page.content} />}
				</>
			)}
			<Container size="wide">
				<Dump data={general} />
				<p>{general?.dummy}</p>
				{general?.image && (
					<Image
						src={general.image.url}
						alt={general.image.alt ?? ''}
						width={general.image.width}
						height={general.image.height}
					/>
				)}
			</Container>
		</>
	)
}

export const getStaticPaths = handleGetStaticPaths(async (context) => {
	const { listLinkable } = await contember('query', { scalars: scalarResolver })({
		listLinkable: [
			{
				filter: {
					redirect: { id: { isNull: true } },
				},
			},
			{
				id: true,
				url: true,
			},
		],
	})

	return {
		paths: listLinkable.map((link) => {
			const path = link.url.split('/').filter((part) => part !== '')

			let locale: string | undefined

			if (context.locales?.includes(path[0])) {
				locale = path.shift()
			}

			return {
				locale,
				params: {
					path,
				},
			}
		}),
		fallback: 'blocking',
	}
})

export const getStaticProps = handleGetStaticProps(async (context) => {
	const url = getLinkableUrlFromContext(context)

	const data = await contember('query', { scalars: scalarResolver })({
		getGeneral: [
			{
				by: {
					unique: One.One,
				},
			},
			GeneralFragment(),
		],
		getLinkable: [
			{
				by: { url },
			},
			{
				url: true,
				genericPage: [{}, GenericPageFragment()],
				redirect: [
					{},
					{
						id: true,
						target: [{}, LinkFragment()],
					},
				],
			},
		],
	})

	const redirectUrl = (() => {
		const target = data.getLinkable?.redirect?.target
		return target ? contemberLinkToHref(target) : null
	})()

	if (redirectUrl) {
		return {
			redirect: {
				permanent: false,
				destination: redirectUrl,
			},
		}
	}

	const canonicalUrl = (() => {
		const url = data.getLinkable?.url
		if (!url) {
			return null
		}
		return (process.env.NEXT_PUBLIC_WEB_URL ?? '') + url
	})()

	const page = data.getLinkable?.genericPage

	if (!page) {
		return {
			notFound: true,
		}
	}

	return {
		props: {
			general: data.getGeneral,
			page,
			seo: {
				canonicalUrl,
				seo: {
					...(data.getGeneral?.seo ?? {}),
					...Object.fromEntries(Object.entries(page.seo ?? {}).filter(([_, value]) => Boolean(value))),
				},
			},
		},
		revalidate: 60,
	}
})
