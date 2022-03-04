import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputItem } from './InputItem';

export default {
    title: 'Molecules/InputItem',
    component: InputItem,
    argTypes: {
        label: { control: 'text' },
    },
} as ComponentMeta<typeof InputItem>;

const Template: ComponentStory<typeof InputItem> = (args) => <InputItem {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Input Label',
};
