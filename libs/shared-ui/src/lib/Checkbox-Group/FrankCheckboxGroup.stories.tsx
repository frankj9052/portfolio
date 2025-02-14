import type { Meta, StoryObj } from '@storybook/react';
import FrankCheckboxGroup from './FrankCheckboxGroup';
import { useState } from 'react';
import FrankCheckbox from '../Checkbox/FrankCheckbox';

const meta = {
  component: FrankCheckboxGroup,
  tags: ['autodocs'],
  parameters: {
    layout: "centered"
  },
  args: {
    onValueChange: (selected) => { console.log("selected ===> ", selected.toString()) }
  },
  decorators: [
    (Story, context) => {
      const [value, setValue] = useState<string[]>([])
      return (
        <Story
          args={{
            ...context.args,
            value: value,
            onValueChange: (selected) => {
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
    children: [
      {
        insideContent: "Robert Fox",
        value: "provider-user-id-1",
        color: "#C530C5"
      },
      {
        insideContent: "Nolan Torff",
        value: "provider-user-id-2",
        color: "#0071E9"
      },
      {
        insideContent: "Albert Flores",
        value: "provider-user-id-3",
        color: "#E5A500"
      },
      {
        insideContent: "Theresa Webb",
        value: "provider-user-id-4",
      },
      {
        outsideContent: <p>123</p>,
        value: "Component Check 01"
      }
    ].map(item => (<FrankCheckbox
      insideContent={item.insideContent}
      value={item.value}
      color={item.color}
      outsideContent={item.outsideContent}
    />)),
  }
};