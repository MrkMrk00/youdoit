import { Inter } from '@next/font/google'
import type { AppProps } from 'next/app'
import { SharedLoadingIndicatorContextProvider, SharedProgressLoadingIndicator } from 'shared-loading-indicator'
import { PageNavigationLoadingTracker } from '../components/PageNavigationLoadingTracker'
import '../styles/globals.sass'

const inter = Inter()

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${inter.style.fontFamily};
				}
			`}</style>
			<SharedLoadingIndicatorContextProvider>
				<PageNavigationLoadingTracker />
				<SharedProgressLoadingIndicator />
				<Component {...pageProps} />
			</SharedLoadingIndicatorContextProvider>
		</>
	)
}

export default MyApp
