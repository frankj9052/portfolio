const portfolioConfig = require("../../apps/portfolio/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...portfolioConfig,
  content: [
    ...portfolioConfig.content,
    '../shared-ui/src/lib/**/*!(*.stories|*.spec).{ts,tsx,html}',
  ]
};
