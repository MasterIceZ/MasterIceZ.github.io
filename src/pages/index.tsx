import { Container } from "../components/Container";
import Head from "next/head";
import { Text, Flex } from "@chakra-ui/react";

const Index = () => {
	return (
		<Container>
			<Head>
				<title> Borworntat D. </title>
			</Head>
			<Flex
				h="80vh"
				w="100%"
				justify="flex-start"
				flexDir="column"
				align="center"
			>
				<Text
					fontSize="xl"
					color="#fd746c"
					fontWeight="bold"
					fontFamily="mono"
				>
					This website is under construction.
				</Text>
				<Text fontSize="xl" fontWeight="bold" color="#FFFFFF">
					but the dev is too lazy :(
				</Text>
			</Flex>
		</Container>
	);
};

export default Index;
