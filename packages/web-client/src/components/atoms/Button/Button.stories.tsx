import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
    title: 'Atom/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
        children: { defaultValue: 'Button' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
