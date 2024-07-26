import { Field } from "payload/types";

export type Type = 'orange' | 'red' | 'none' | 'blue';

const backgroundColor : Field = {
    name: 'backgroundColor',
    label: 'Backround Color',
    type: 'radio',
    defaultValue: 'none',
    admin: { layout: 'horizontal' },
    options: [
        {
            label: 'Orange',
            value: 'orange',
        },
        {
            label: 'Red',
            value: 'red',
        },
        {
            label: 'Blue',
            value: 'blue',
        },
        {
            label: 'None',
            value: 'none',
        }
    ]
}

export default backgroundColor