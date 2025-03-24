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

const FakeCard = ({ index }: { index: number }) => {
    return (
        <div className='bg-blue-200 w-[200px] h-[333px] border-1 border-[#000] flex ml-[20px]'>
            <div
                className='flex flex-col items-center justify-center h-full bg-pink-200 flex-1'
            >
                <div>{index}</div>
                <div>main</div>
                <div>content</div>
            </div>

        </div>
    )
}

export const Default: Story = {
    args: {
        childWidth: 200,
        spaceBetween: 20,
        endSpace: 40,
        freeMode: true,
        slidesPerView: 'auto',
        // autoPlay: true,
        // loop: true,
        children: Array.from({ length: 14 }).map((_, index) => (
            <FakeCard
                key={index}
                index={index}
            />
        ))
    },
}

export const NotFreeMode: Story = {
    args: {
        childWidth: 200,
        spaceBetween: 20,
        slidesPerView: 6,
        // autoPlay: true,
        // loop: true,
        children: Array.from({ length: 14 }).map((_, index) => (
            <FakeCard
                key={index}
                index={index}
            />
        ))
    },
}

// slidesPerView: 4,
// childWidth: 223,
// spaceBetween: 20,
// loop: true,
// autoPlay: true,
// width: 1440,
