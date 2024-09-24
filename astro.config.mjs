import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

// https://astro.build/config
export default defineConfig({
  site: "https://mastericez.github.io",
  integrations: [tailwind(), react(), mdx(), sitemap()],
  markdown: {
    remarkPlugins: [rehypeHeadingIds, remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
