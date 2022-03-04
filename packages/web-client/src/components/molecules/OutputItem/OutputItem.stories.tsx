import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutputItem } from './OutputItem';

export default {
    title: 'Molecules/OutputItem',
    component: OutputItem,
    argTypes: {
        label: { control: 'text' },
        output: { control: 'text' },
        id: { control: 'text' },
    },
} as ComponentMeta<typeof OutputItem>;

const Template: ComponentStory<typeof OutputItem> = (args) => <OutputItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    id: 'example-id',
    label: 'Example Output',
    output: '10,000',
};
