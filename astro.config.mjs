// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://justincase.photo',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl', 'es', 'it'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-GB',
          pl: 'pl-PL',
          es: 'es-ES',
          it: 'it-IT',
        },
      },
    }),
  ],
});
