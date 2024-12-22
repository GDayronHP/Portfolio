// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site:("https://gdayronhp.github.io/Portfolio"),
  base: '/Portfolio', // Asegúrate de usar un slash inicial y final
  integrations: [tailwind()],
});
