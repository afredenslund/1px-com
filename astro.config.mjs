import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://1px.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/roadmap') && !page.includes('/spacer-playground'),
    }),
  ],
  output: 'static',
  trailingSlash: 'always',
  build: {
    inlineStylesheets: 'auto',
  },
});
