import { OrderDirection } from '../../generated/contember'
import { Container } from '../components/Container'
import { HomePage } from '../components/pages/HomePage'
import { HomePageLocaleFragment } from '../data/HomePageLocaleFragment'
import { RecipeFragment } from '../data/RecipeFragment'
import { contember } from '../utilities/contember'
import { scalarResolver } from '../utilities/createScalarResolver'
import { getLinkableUrlFromContext } from '../utilities/getLinkableUrlFromContext'
import type { InferDataLoaderProps } from '../utilities/handlers'
import { handleGetStaticPaths, handleGetStaticProps } from '../utilities/handlers'

export type PageProps = InferDataLoaderProps<typeof getStaticProps>

export default function ({ seo, homePage, recipes }: PageProps) {
	console.log(seo)
	return (
		<>
			{/* <Seo {...seo} /> */}

			{homePage && recipes && <HomePage homePage={homePage} recipes={recipes} />}
			{/* {page && (
				<>
					<Container>
						<h2>{page.title}</h2>
						<h2>Title</h2>
					</Container>
					{page.content && <ContentRenderer content={page.content} />}
				</>
			)} */}
			<Container size="wide">
				{/* <Dump data={general} /> */}
				{/* <p>{general?.dummy}</p>
				{general?.image && (
					<Image
						src={general.image.url}
						alt={general.image.alt ?? ''}
						width={general.image.width}
						height={general.image.height}
					/>
				)} */}
			</Container>
		</>
	)
}

export const getStaticPaths = handleGetStaticPaths(async (context) => {
	const { listLinkable } = await contember('query', { scalars: scalarResolver })({
		listLinkable: [
			{
				// filter: {
				// 	redirect: { id: { isNull: true } },
				// },
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

	const { locale } = context

	if (!locale) {
		throw new Error('Locale not defined.')
	}

	const data = await contember('query', { scalars: scalarResolver })({
		// getGeneral: [
		// 	{
		// 		by: {
		// 			unique: One.One,
		// 		},
		// 	},
		// 	GeneralFragment(),
		// ],
		listRecipe: [{ orderBy: [{ publishDate: OrderDirection.desc }] }, RecipeFragment(locale)],
		getLinkable: [
			{
				by: { url },
			},
			{
				url: true,
				homePage: [{}, HomePageLocaleFragment()],
				// genericPage: [{}, GenericPageFragment()],
				// redirect: [
				// 	{},
				// 	{
				// 		id: true,
				// 		target: [{}, LinkFragment()],
				// 	},
				// ],
			},
		],
	})

	// const redirectUrl = (() => {
	// 	const target = data.getLinkable?.redirect?.target
	// 	return target ? contemberLinkToHref(target) : null
	// })()

	// if (redirectUrl) {
	// 	return {
	// 		redirect: {
	// 			permanent: false,
	// 			destination: redirectUrl,
	// 		},
	// 	}
	// }

	const canonicalUrl = (() => {
		const url = data.getLinkable?.url
		if (!url) {
			return null
		}
		return (process.env.NEXT_PUBLIC_WEB_URL ?? '') + url
	})()

	console.log(data.getLinkable?.homePage)
	if (!data.getLinkable) {
		throw new Error('Page not found')
	}
	const { homePage } = data.getLinkable

	// if (!page) {
	// 	return {
	// 		notFound: true,
	// 	}
	// }

	return {
		props: {
			// general: data.getGeneral,
			// page,
			homePage,
			recipes: data.listRecipe,
			seo: {
				canonicalUrl,
				// seo: {
				// 	...(data.getGeneral?.seo ?? {}),
				// 	...Object.fromEntries(Object.entries(page.seo ?? {}).filter(([_, value]) => Boolean(value))),
				// },
			},
		},
		revalidate: 60,
	}
})
