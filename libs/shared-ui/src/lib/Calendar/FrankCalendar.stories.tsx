import type { Meta, StoryObj } from '@storybook/react';
import { FrankCalendar } from './FrankCalendar';
// import { CalendarDate, parseDate } from '@internationalized/date';

const meta = {
    component: FrankCalendar,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
    argTypes: {
        variant: {
            options: ['Default', 'Small', 'WithShortcut'],
            control: { type: 'radio' },
            description: 'The variant of the calendar, defining its size and layout.',
            table: {
                type: { summary: "'Default' | 'Small' | 'WithShortcut'" },
                defaultValue: { summary: "'Default'" }
            }
        },
        isStartDateSelection: {
            control: { type: 'boolean' },
            description: 'Indicates whether the calendar is used for selecting a start date in a range.',
            table: {
                type: { summary: 'boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        value: {
            control: { type: 'object' },
            description: 'The currently selected date value.',
            table: {
                type: { summary: 'DateValue | null' },
                defaultValue: { summary: 'null' }
            }
        },
        onValueChange: {
            action: 'onValueChange',
            description: 'Callback function triggered when the selected date changes.',
            table: {
                type: { summary: '(value: DateValue | null | undefined) => void' }
            }
        },
        focusedValue: {
            control: { type: 'object' },
            description: 'The currently focused date in the calendar.',
            table: {
                type: { summary: 'CalendarDate | undefined' }
            }
        },
        onFocusedValueChange: {
            action: 'onFocusedValueChange',
            description: 'Callback function triggered when the focused date changes.',
            table: {
                type: { summary: '(date: CalendarDate | null | undefined) => void' }
            }
        },
        minValue: {
            control: { type: 'object' },
            description: 'The minimum selectable date in the calendar.',
            table: {
                type: { summary: 'DateValue | null' }
            }
        },
        maxValue: {
            control: { type: 'object' },
            description: 'The maximum selectable date in the calendar.',
            table: {
                type: { summary: 'DateValue | null' }
            }
        },
        rangeStart: {
            control: { type: 'object' },
            description: 'The start date of the selected date range.',
            table: {
                type: { summary: 'DateValue | null' }
            }
        },
        rangeEnd: {
            control: { type: 'object' },
            description: 'The end date of the selected date range.',
            table: {
                type: { summary: 'DateValue | null' }
            }
        }
    }

} satisfies Meta<typeof FrankCalendar>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        variant: 'WithShortcut',
        // minValue: parseDate('2025-03-07')
        // maxValue: parseDate('2025-03-28')
        // rangeStart: parseDate('2025-03-07'),
        // rangeEnd: parseDate('2025-03-12')
    },
    decorators: [
        (Story) => {
            return (
                <div
                    className='w-[500px] h-[500px] bg-gray-300 flex items-center justify-center'
                >
                    <Story />
                </div>
            )
        }
    ]
}
