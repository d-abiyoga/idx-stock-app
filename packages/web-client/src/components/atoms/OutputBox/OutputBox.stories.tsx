import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutputBox } from './OutputBox';

export default {
    title: 'Atom/OutputBox',
    component: OutputBox,
    argTypes: {
        bgColor: { control: 'color' },
        padding: { control: 'text' },
        borderRadius: { control: 'text' },
        // width: { control: 'text' },
    },
} as ComponentMeta<typeof OutputBox>;

const Template: ComponentStory<typeof OutputBox> = (args) => <OutputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'DefaultOutputBox',
};
