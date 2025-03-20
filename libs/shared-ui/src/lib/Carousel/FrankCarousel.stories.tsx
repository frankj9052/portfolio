import type { Meta, StoryObj } from '@storybook/react';
import { FrankCarousel } from './FrankCarousel';

const meta = {
    component: FrankCarousel,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
    decorators: [
        (Story, context) => {
            return (
                <div
                    className='w-[1440px] h-[500px] bg-gray-200 overflow-hidden'
                >
                    <Story
                        args={{
                            ...context.args,
                        }}
                    />
                </div>
            )
        }
    ]
} satisfies Meta<typeof FrankCarousel>

export default meta;
type Story = StoryObj<typeof meta>;

const FakeCard = ({index}:{index:number}) => {
    return(
        <div className='flex items-center justify-center bg-blue-200 w-[223px] h-[333px]'>
            {index}
        </div>
    )
}

export const Default: Story = {
    args: {
        slidesPerView: 6,
        spaceBetween: 20,
        loop: true,
        autoPlay: true,
        children: Array.from({length: 14}).map((_, index) => (
            <FakeCard
                key={index}
                index={index}
            />
        ))
    },
}
