import { One, OrderDirection } from '../../generated/contember'
import { Layout } from '../components/Layout'
import type { LocaleSwitcherProps } from '../components/LocaleSwitcher'
import { CategoryPage } from '../components/pages/CategoryPage'
import { HomePage } from '../components/pages/HomePage'
import { PinnedRecipesPage } from '../components/pages/PinnedRecipesPage'
import { RecipeDetailPage } from '../components/pages/RecipeDetailPage'
import { UserPage } from '../components/pages/UserPage'
import { Seo } from '../components/Seo'
import { TranslationsProvider } from '../contexts/TranslationsContext'
import { CategoryLocaleFragment } from '../data/CategoryLocaleFragment'
import { HomePageFragment } from '../data/HomePageFragment'
import { HomePageLocaleFragment } from '../data/HomePageLocaleFragment'
import { PinnedRecipesPageLocaleFragment } from '../data/PinnedRecipesLocaleFragment'
import { RecipeLocaleFragment } from '../data/RecipeLocaleFragment'
import { TranslationsEntryFragment } from '../data/TranslationsEntryFragment'
import { UserFragment } from '../data/UserFragment'
import { contember } from '../utilities/contember'
import { scalarResolver } from '../utilities/createScalarResolver'
import { getLinkableUrlFromContext } from '../utilities/getLinkableUrlFromContext'
import type { InferDataLoaderProps } from '../utilities/handlers'
import { handleGetStaticPaths, handleGetStaticProps } from '../utilities/handlers'
import { hardcodedUserEmail } from '../utilities/hardcodedUserEmail'

export type PageProps = InferDataLoaderProps<typeof getStaticProps>

export default function ({
	pages,
	locale,
	locales,
	seo,
	homePageUrl,
	pinnedRecipesPageUrl,
	userPageUrl,
	currentUrlPage,
	recipes,
	categories,
	translations,
}: PageProps) {
	const localeSwitcher: LocaleSwitcherProps = {
		activeLocale: locale,
		pageLocales: locales,
	}

	return (
		<TranslationsProvider
			translationsEntries={Object.fromEntries(
				translations.map((translationEntry) => {
					return [translationEntry.key, translationEntry.valuesByLocale?.value ?? translationEntry.key]
				}),
			)}
		>
			<Layout
				homePageUrl={homePageUrl}
				pinnedRecipesPageUrl={pinnedRecipesPageUrl}
				userPageUrl={userPageUrl}
				currentPageUrl={currentUrlPage}
			>
				<Seo {...seo} />
				{pages.homePage ? (
					<HomePage homePage={pages.homePage} recipes={recipes} categories={categories} />
				) : pages.pinnedRecipesPage ? (
					<PinnedRecipesPage pinnedrecipesPage={pages.pinnedRecipesPage} locale={locale} />
				) : pages.category ? (
					<CategoryPage categoryPage={pages.category} allRecipesLink={homePageUrl} />
				) : pages.recipe ? (
					<RecipeDetailPage recipeDetailPage={pages.recipe} allRecipesLink={pinnedRecipesPageUrl} />
				) : pages.user ? (
					<UserPage user={pages.user} pinnedRecipesPageUrl={pinnedRecipesPageUrl} localeSwitcher={localeSwitcher} />
				) : null}
			</Layout>
		</TranslationsProvider>
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
		listCategoryLocale: [{ orderBy: [{ base: { order: OrderDirection.asc } }] }, CategoryLocaleFragment(locale)],
		listRecipeLocale: [{ orderBy: [{ base: { publishDate: OrderDirection.desc } }] }, RecipeLocaleFragment(locale)],
		getLinkable: [
			{
				by: { url },
			},
			{
				url: true,
				homePage: [{}, HomePageLocaleFragment()],
				pinnedRecipesPage: [{}, PinnedRecipesPageLocaleFragment()],
				category: [{}, CategoryLocaleFragment(locale)],
				recipe: [{}, RecipeLocaleFragment(locale)],
				user: [{}, UserFragment()],
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
		getHomePage: [{ by: { unique: One.One } }, HomePageFragment()],
		getHomePageLocale: [{ by: { locale: { code: locale }, base: { unique: One.One } } }, { link: [{}, { url: true }] }],
		getPinnedRecipesPageLocale: [
			{ by: { locale: { code: locale }, base: { unique: One.One } } },
			{ link: [{}, { url: true }] },
		],
		getUser: [{ by: { email: hardcodedUserEmail } }, UserFragment()],
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

	const pages = {
		homePage: data.getLinkable?.homePage,
		pinnedRecipesPage: data.getLinkable?.pinnedRecipesPage,
		category: data.getLinkable?.category,
		recipe: data.getLinkable?.recipe,
		user: data.getLinkable?.user,
	}

	const page = Object.values(pages).find((page) => Boolean(page))

	if (!page) {
		return {
			notFound: true,
		}
	}

	const translations = await contember('query', { scalars: scalarResolver })({
		listTranslationsEntry: [{}, TranslationsEntryFragment(locale)],
	})

	const locales = (data.getHomePage?.locales ?? []).map((locale) => {
		return {
			code: locale.locale?.code ?? 'unknown',
			link: locale.link?.url ?? '/',
		}
	})

	return {
		props: {
			pages,
			locale,
			locales,
			homePageUrl: data.getHomePageLocale?.link?.url ?? null,
			pinnedRecipesPageUrl: data.getPinnedRecipesPageLocale?.link?.url ?? null,
			userPageUrl: data.getUser?.link?.url ?? null,
			currentUrlPage: data.getLinkable?.url ?? '/',
			categories: data.listCategoryLocale,
			recipes: data.listRecipeLocale,
			translations: translations.listTranslationsEntry,
			user: data.getUser,
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
