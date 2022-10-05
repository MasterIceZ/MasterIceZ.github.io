import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const fonts = {
	mono: "monospace",
};

const breakpoints = createBreakpoints({
	xl: "80em",
});

const theme = extendTheme({
	colors: {
		black: "#16161D",
	},
	fonts,
});

export default theme;
