import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputItem } from './InputItem';

export default {
    title: 'Molecules/InputItem',
    component: InputItem,
    argTypes: {
        label: { control: 'text' },
        stock: { control: 'boolean' },
    },
} as ComponentMeta<typeof InputItem>;

const Template: ComponentStory<typeof InputItem> = (args) => <InputItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Default Input',
};

export const StockInput = Template.bind({});
StockInput.args = {
    label: 'Stock Input',
    stock: true,
};
