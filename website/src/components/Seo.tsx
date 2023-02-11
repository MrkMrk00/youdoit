import Head from 'next/head'
import type { FunctionComponent } from 'react'

export type SeoProps = {
	canonicalUrl: string | null
	// seo: SeoResult
}

export const Seo: FunctionComponent<SeoProps> = () => {
	return (
		<Head>
			<title>Title</title>
			{/* <title>{title}</title>
			{description && <meta name="description" content={description} />}
			<meta property="og:locale" content="en_US" />
			{ogTitle && <meta property="og:title" content={ogTitle} />}
			{ogDescription && <meta property="og:description" content={ogDescription} />}
			{ogImage && (
				<>
					<meta property="og:image" content={ogImage.url} />
					{ogImage.alt && <meta property="og:image:alt" content={ogImage.alt} />}
					{ogImage.width && <meta property="og:image:width" content={`${ogImage.width}`} />}
					{ogImage.height && <meta property="og:image:height" content={`${ogImage.height}`} />}
				</>
			)}
			{noIndex && noFollow ? (
				<meta name="robots" content="noindex, nofollow" />
			) : noIndex ? (
				<meta name="robots" content="noindex" />
			) : noFollow ? (
				<meta name="robots" content="nofollow" />
			) : null}
			{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}{' '} */}
		</Head>
	)
}
