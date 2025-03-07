import type { Meta, StoryObj } from '@storybook/react';
import FrankToggleButton from './FrankToggleButton';
import FrankSVGIcon from '../SVGIcon/FrankSVGIcon';
const meta = {
    component: FrankToggleButton,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
        toggleValue: (value) => console.log("toggle value changed to: ", value)
    },
} satisfies Meta<typeof FrankToggleButton>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        content: <div
            className='flex items-center justify-center gap-0.5 font-medium font-inter text-[13px] text-[#0C534F]'
        >
            <FrankSVGIcon
                width={20}
                height={20}
                viewBox="0 0 20 20"
            >
                <path
                    d="M4.42321 17.9167C4.00223 17.9167 3.64591 17.7708 3.35425 17.4792C3.06258 17.1875 2.91675 16.8312 2.91675 16.4102V5.25647C2.91675 4.8355 3.06258 4.47918 3.35425 4.18751C3.64591 3.89585 4.00223 3.75001 4.42321 3.75001H5.57696V2.62814C5.57696 2.4455 5.63814 2.293 5.7605 2.17064C5.88286 2.04842 6.03536 1.9873 6.218 1.9873C6.40078 1.9873 6.55328 2.04842 6.6755 2.17064C6.79786 2.293 6.85904 2.4455 6.85904 2.62814V3.75001H13.1732V2.6123C13.1732 2.43494 13.233 2.2864 13.3526 2.16668C13.4723 2.0471 13.6208 1.9873 13.7982 1.9873C13.9756 1.9873 14.124 2.0471 14.2436 2.16668C14.3633 2.2864 14.4232 2.43494 14.4232 2.6123V3.75001H15.577C15.9979 3.75001 16.3542 3.89585 16.6459 4.18751C16.9376 4.47918 17.0834 4.8355 17.0834 5.25647V16.4102C17.0834 16.8312 16.9376 17.1875 16.6459 17.4792C16.3542 17.7708 15.9979 17.9167 15.577 17.9167H4.42321ZM4.42321 16.6667H15.577C15.6411 16.6667 15.6999 16.6399 15.7532 16.5865C15.8067 16.5331 15.8334 16.4744 15.8334 16.4102V8.5898H4.16675V16.4102C4.16675 16.4744 4.19348 16.5331 4.24696 16.5865C4.30029 16.6399 4.35904 16.6667 4.42321 16.6667ZM4.16675 7.3398H15.8334V5.25647C15.8334 5.1923 15.8067 5.13355 15.7532 5.08022C15.6999 5.02675 15.6411 5.00001 15.577 5.00001H4.42321C4.35904 5.00001 4.30029 5.02675 4.24696 5.08022C4.19348 5.13355 4.16675 5.1923 4.16675 5.25647V7.3398ZM10.0001 11.7308C9.79605 11.7308 9.62217 11.659 9.47842 11.5152C9.3348 11.3716 9.263 11.1977 9.263 10.9936C9.263 10.7895 9.3348 10.6156 9.47842 10.4719C9.62217 10.3283 9.79605 10.2565 10.0001 10.2565C10.2041 10.2565 10.378 10.3283 10.5217 10.4719C10.6654 10.6156 10.7372 10.7895 10.7372 10.9936C10.7372 11.1977 10.6654 11.3716 10.5217 11.5152C10.378 11.659 10.2041 11.7308 10.0001 11.7308ZM6.66675 11.7308C6.46272 11.7308 6.28883 11.659 6.14508 11.5152C6.00147 11.3716 5.92967 11.1977 5.92967 10.9936C5.92967 10.7895 6.00147 10.6156 6.14508 10.4719C6.28883 10.3283 6.46272 10.2565 6.66675 10.2565C6.87078 10.2565 7.04467 10.3283 7.18842 10.4719C7.33203 10.6156 7.40383 10.7895 7.40383 10.9936C7.40383 11.1977 7.33203 11.3716 7.18842 11.5152C7.04467 11.659 6.87078 11.7308 6.66675 11.7308ZM13.3334 11.7308C13.1294 11.7308 12.9555 11.659 12.8117 11.5152C12.6681 11.3716 12.5963 11.1977 12.5963 10.9936C12.5963 10.7895 12.6681 10.6156 12.8117 10.4719C12.9555 10.3283 13.1294 10.2565 13.3334 10.2565C13.5374 10.2565 13.7113 10.3283 13.8551 10.4719C13.9987 10.6156 14.0705 10.7895 14.0705 10.9936C14.0705 11.1977 13.9987 11.3716 13.8551 11.5152C13.7113 11.659 13.5374 11.7308 13.3334 11.7308ZM10.0001 15C9.79605 15 9.62217 14.9281 9.47842 14.7844C9.3348 14.6408 9.263 14.467 9.263 14.2629C9.263 14.0588 9.3348 13.8849 9.47842 13.7413C9.62217 13.5975 9.79605 13.5256 10.0001 13.5256C10.2041 13.5256 10.378 13.5975 10.5217 13.7413C10.6654 13.8849 10.7372 14.0588 10.7372 14.2629C10.7372 14.467 10.6654 14.6408 10.5217 14.7844C10.378 14.9281 10.2041 15 10.0001 15ZM6.66675 15C6.46272 15 6.28883 14.9281 6.14508 14.7844C6.00147 14.6408 5.92967 14.467 5.92967 14.2629C5.92967 14.0588 6.00147 13.8849 6.14508 13.7413C6.28883 13.5975 6.46272 13.5256 6.66675 13.5256C6.87078 13.5256 7.04467 13.5975 7.18842 13.7413C7.33203 13.8849 7.40383 14.0588 7.40383 14.2629C7.40383 14.467 7.33203 14.6408 7.18842 14.7844C7.04467 14.9281 6.87078 15 6.66675 15ZM13.3334 15C13.1294 15 12.9555 14.9281 12.8117 14.7844C12.6681 14.6408 12.5963 14.467 12.5963 14.2629C12.5963 14.0588 12.6681 13.8849 12.8117 13.7413C12.9555 13.5975 13.1294 13.5256 13.3334 13.5256C13.5374 13.5256 13.7113 13.5975 13.8551 13.7413C13.9987 13.8849 14.0705 14.0588 14.0705 14.2629C14.0705 14.467 13.9987 14.6408 13.8551 14.7844C13.7113 14.9281 13.5374 15 13.3334 15Z"
                    fill="#0C534F"
                />
            </FrankSVGIcon>
            <span>Mon-Fri 9-5</span>
        </div>,
        width: 137,
        height: 32,
        active: true
    },
}

export const BookingTypeToggleButton: Story = {
    args: {
        content: <div
            className='flex items-center justify-center gap-0.5 font-medium font-inter text-[13px] text-[#0C534F]'
        >
            <FrankSVGIcon
                width={20}
                height={20}
                viewBox="0 0 20 20"
            >
                <path
                    d="M9.12508 13.1796L12.1892 10.1154C12.3131 9.99154 12.4624 9.92821 12.6372 9.92543C12.8117 9.92279 12.9637 9.98612 13.093 10.1154C13.2223 10.2447 13.287 10.3954 13.287 10.5673C13.287 10.7392 13.2223 10.8899 13.093 11.0192L9.65237 14.46C9.50168 14.6106 9.32592 14.6858 9.12508 14.6858C8.92425 14.6858 8.74849 14.6106 8.59779 14.46L6.90717 12.7692C6.78328 12.6453 6.71994 12.496 6.71717 12.3213C6.71453 12.1467 6.77786 11.9947 6.90717 11.8654C7.03647 11.7361 7.1871 11.6715 7.35904 11.6715C7.53098 11.6715 7.68161 11.7361 7.81092 11.8654L9.12508 13.1796ZM4.42321 17.9167C4.00223 17.9167 3.64591 17.7708 3.35425 17.4792C3.06258 17.1875 2.91675 16.8312 2.91675 16.4102V5.25647C2.91675 4.8355 3.06258 4.47918 3.35425 4.18751C3.64591 3.89585 4.00223 3.75001 4.42321 3.75001H5.57696V2.62814C5.57696 2.4455 5.63814 2.293 5.7605 2.17064C5.88286 2.04842 6.03536 1.9873 6.218 1.9873C6.40078 1.9873 6.55328 2.04842 6.6755 2.17064C6.79786 2.293 6.85904 2.4455 6.85904 2.62814V3.75001H13.1732V2.6123C13.1732 2.43494 13.233 2.2864 13.3526 2.16668C13.4723 2.0471 13.6208 1.9873 13.7982 1.9873C13.9756 1.9873 14.124 2.0471 14.2436 2.16668C14.3633 2.2864 14.4232 2.43494 14.4232 2.6123V3.75001H15.577C15.9979 3.75001 16.3542 3.89585 16.6459 4.18751C16.9376 4.47918 17.0834 4.8355 17.0834 5.25647V16.4102C17.0834 16.8312 16.9376 17.1875 16.6459 17.4792C16.3542 17.7708 15.9979 17.9167 15.577 17.9167H4.42321ZM4.42321 16.6667H15.577C15.6411 16.6667 15.6999 16.6399 15.7532 16.5865C15.8067 16.5331 15.8334 16.4744 15.8334 16.4102V8.5898H4.16675V16.4102C4.16675 16.4744 4.19348 16.5331 4.24696 16.5865C4.30029 16.6399 4.35904 16.6667 4.42321 16.6667ZM4.16675 7.3398H15.8334V5.25647C15.8334 5.1923 15.8067 5.13355 15.7532 5.08022C15.6999 5.02675 15.6411 5.00001 15.577 5.00001H4.42321C4.35904 5.00001 4.30029 5.02675 4.24696 5.08022C4.19348 5.13355 4.16675 5.1923 4.16675 5.25647V7.3398Z"
                    fill="#0C534F"
                />
            </FrankSVGIcon>
            <span>Online & Phone</span>
        </div>,
        width: 137,
        height: 32,
        active: false
    },
}
