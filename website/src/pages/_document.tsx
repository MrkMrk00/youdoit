import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class AppDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="color-scheme" content="only light" />
					<meta name="theme-color" content="#0072FF" />
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
