import { defineConfig } from 'astro/config';

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import libAnalytics from "@astrolib/analytics";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), libAnalytics()]
});