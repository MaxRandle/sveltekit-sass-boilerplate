import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

const filePath = dirname(fileURLToPath(import.meta.url));
const scssPath = `${filePath}/src/styles/`;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: preprocess({
    tailwindcss: true,
    autoprefixer: true,
    'postcss-preset-env': true,
    scss: {
      prependData: "@use './src/styles/variables.scss';"
      //   prependData: `@use './src/styles/variables.scss';`
      //   prependData: `@use './src/styles/theme.scss';`
      //   prependData: `@use '${scssPath}theme.scss';`
    }
  }),

  kit: {
    adapter: adapter(),
    alias: {
      '@styles': 'src/styles/*',
      '@components': 'src/components/*'
    }
  }
};

export default config;
