import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider resetCss theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default MyApp;
