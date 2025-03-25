import type { Meta, StoryObj } from '@storybook/react';
import { CardParallax } from './CardParallax';
import { MotionValue } from 'framer-motion';

const meta = {
    component: CardParallax,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },

    args: {
    },
    decorators: [
        (Story) => (
            <div>
                <div
                    className='w-full h-screen bg-pink-200'
                />
                <div
                    className='w-full h-screen bg-yellow-200'
                />
                <div
                    className='w-full bg-blue-200 flex items-center flex-col justify-center'
                >
                    <div
                        className='w-[100px] h-[200px] bg-green-200'
                    />
                    <Story />
                </div>
            </div>
        )
    ]
} satisfies Meta<typeof CardParallax>

export default meta;
type Story = StoryObj<typeof meta>;

type CardProps = {
    text: string,
    color: string,
    imageScale?: MotionValue<number>
}
const Card = ({
    text,
    color,
    imageScale,
}: CardProps) => {
    return (
        <div
            className='w-[600px] h-[300px] flex items-center justify-center rounded-xl'
            style={{
                backgroundColor: color
            }}
        >
            {text}
            {imageScale && imageScale.get()}
        </div>
    )
}

const color = ["#BBACAF", "#977F6D", "#C2491D", "#B62429", "#88A28D"]

export const Default: Story = {
    args: {
        isScaled: true,
        gap: 60,
        startPoint: 25,
        children: color.map((color, index) => {
            return (
                <Card
                    text={`Card ${index}`}
                    color={color}
                />
            )
        })
    },
}
