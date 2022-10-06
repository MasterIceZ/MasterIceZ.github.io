import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "./theme";

export default class Document extends NextDocument {
	render() {
		return (
			<Html>
				<Head>
					<link
						rel="preconnect"
						href="https://fonts.googleapis.com/"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}