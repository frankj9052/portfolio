import type { Meta, StoryObj } from '@storybook/react';
import FrankCheckboxGroup from './FrankCheckboxGroup';
import { useState } from 'react';

const meta = {
  component: FrankCheckboxGroup,
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  },
  args: {
    setSelectedValue: (selected) => { console.log("selected ===> ", selected.toString()) }
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState<string[]>([])
      return (
        <Story
          args={{
            ...context.args,
            selectedValue: value,
            setSelectedValue: (selected) => {
              setValue(selected)
            }
          }}
        />)
    }
  ]
} satisfies Meta<typeof FrankCheckboxGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: [
      {
        children: "Robert Fox",
        value: "provider-user-id-1",
        color: "#C530C5"
      },
      {
        children: "Nolan Torff",
        value: "provider-user-id-2",
        color: "#0071E9"
      },
      {
        children: "Albert Flores",
        value: "provider-user-id-3",
        color: "#E5A500"
      },
      {
        children: "Theresa Webb",
        value: "provider-user-id-4",
      },
    ],
  }
};