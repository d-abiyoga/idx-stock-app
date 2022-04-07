import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Atom/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    children: { defaultValue: 'Button' },
    disabled: { control: 'boolean' },
    variant: { control: 'text' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Round = Template.bind({});
Round.args = {
  variant: 'floating-round',
  disabled: false,
};
