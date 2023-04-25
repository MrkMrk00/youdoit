import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="color-scheme" content="light dark" />
					<meta name="theme-color" media="(prefers-color-scheme: light)" content="#FFFFFF" />
					<meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000" />
					<link rel="manifest" href="/app.webmanifest" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
