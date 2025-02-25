import "global.css";
import React from 'react';
import { HeroUIProvider } from '@heroui/react';
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <HeroUIProvider>
        <main className="purple-dark">
          <Story />
        </main>
      </HeroUIProvider>
    )
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;