import { Inter } from '@next/font/google'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { useMemo } from 'react'
import { SharedLoadingIndicatorContextProvider, SharedProgressLoadingIndicator } from 'shared-loading-indicator'
import { PageNavigationLoadingTracker } from '../components/PageNavigationLoadingTracker'
import '../styles/globals.sass'

const inter = Inter()

function MyApp({ Component, pageProps }: AppProps) {
	const queryClient = useMemo(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						refetchOnWindowFocus: false,
					},
				},
			}),
		[],
	)
	return (
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
	)
}

export default MyApp
