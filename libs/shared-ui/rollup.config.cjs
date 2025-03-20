const { withNx } = require('@nx/rollup/with-nx');
const url = require('@rollup/plugin-url');
const svg = require('@svgr/rollup');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: '../../dist/libs/shared-ui',
    tsConfig: './tsconfig.lib.json',
    compiler: 'babel',
    external: [
      'react',
      'react-dom',
      'react/jsx-runtime',
      '@heroui/react',
      '@frankjia9052/shared-utils',
      '@internationalized/date',
      '@frankjia9052/shared-ui',
      'clsx',
      'styled-components',
      'react-icons',
      'swiper',
      'framer-motion'
    ],
    format: ['esm', 'cjs'],
    assets: [{ input: 'libs/shared-ui', output: '.', glob: 'README.md' }]
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    plugins: [
      svg({
        svgo: false,
        titleProp: true,
        ref: true,
      }),
      url({
        limit: 10000, // 10kB
      }),
    ],
  }
);
