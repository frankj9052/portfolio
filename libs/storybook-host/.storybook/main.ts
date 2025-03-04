import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))',
    '../../shared-ui/src/lib/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'
  ],

  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],

  framework: {
    name: '@storybook/react-vite',
    options: {
      builder: {
        viteConfigPath: 'vite.config.ts',
      },
    },
  },

  docs: {},

  typescript: {
    reactDocgen: 'react-docgen-typescript'
  },

  viteFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...(config.resolve?.alias || {}),
        '@api': path.resolve(__dirname, './mocks/mock-api.ts'),
        'next/navigation': path.resolve(__dirname, './mocks/mock-next-navigation.ts'),
        'next/link': path.resolve(__dirname, './mocks/mock-next-link.tsx'),
        'next/image': path.resolve(__dirname, './mocks/mock-next-image.tsx')
      };
    }
    return config;
  }
};

export default config;

// To customize your Vite configuration you can use the viteFinal field.
// Check https://storybook.js.org/docs/react/builders/vite#configuration
// and https://nx.dev/recipes/storybook/custom-builder-configs
