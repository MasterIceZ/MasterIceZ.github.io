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
					Hello World
				</Text>
				<Text fontSize="xl" color="#FFFFFF">
					Test Test 1234
				</Text>
			</Flex>
		</Container>
	);
};

export default Index;
