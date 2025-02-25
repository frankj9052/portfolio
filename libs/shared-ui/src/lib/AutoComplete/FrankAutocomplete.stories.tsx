import type { Meta, StoryObj } from '@storybook/react';
import { FrankAutocomplete } from './FrankAutocomplete';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const meta = {
    component: FrankAutocomplete,
    tags: ['autodocs'],
    parameters: {
        layout: "centered"
    },
    args: {
    },
} satisfies Meta<typeof FrankAutocomplete>

export default meta;
type Story = StoryObj<typeof meta>;

type PredictionsType = {
    description: string,
    matched_substrings: any[],
    place_id: string,
    reference: string,
    structured_formatting: any,
    terms: any[],
    types: string[],
}

export const Default: Story = {
    args: {
        label: <div className='text-[#303030] text-[13px] font-inter font-[500]'>Enter Address</div>,
        labelPlacement: 'outside',
        placeholder: 'Enter Address',
        variant: 'bordered',
        radius: 'sm'
    },
    decorators: [
        (Story, context) => {
            const [input, setInput] = useState<string | undefined>(undefined);
            const [predictions, setPredictions] = useState<PredictionsType[]>([]);
            useEffect(() => {
                if (input && input.length > 0) {
                    const url = `http://localhost:3000/public/googleApi/autoComplete?input=${input}`;
                    axios.get(url).then((response) => {
                        setPredictions(response.data);
                    }).catch((error) => {
                        console.log("error ===> ", error)
                    })
                } else {
                    setPredictions([]);
                }
            }, [input])
            return (
                <div className='w-[288px]'>
                    <Story
                        args={{
                            ...context.args,
                            inputValue: input,
                            onInputChange: (value) => {
                                setInput(value);
                            },
                            defaultItems: predictions.map((prediction) => ({
                                label: prediction.structured_formatting.main_text,
                                key: prediction.place_id,                                
                            }))
                        }}
                    />
                </div>
            )
        }
    ]
}
