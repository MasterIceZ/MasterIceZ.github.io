import { Flex, FlexProps } from "@chakra-ui/react";

export const Container = (props: FlexProps) => {
	return (
		<>
			<Flex
				overflowX="hidden"
				maxW="100%"
				direction="column"
				alignItems="center"
				justifyContent="flex-start"
				bgcolor="gray.50"
				color="black"
				{...props}
			/>
		</>
	);
};
