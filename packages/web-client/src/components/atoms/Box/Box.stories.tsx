import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Box } from './Box';

export default {
  title: 'Atom/Box',
  component: Box,
  argTypes: {
    backgroundColor: { control: 'color' },
    padding: { control: 'text' },
    borderRadius: { control: 'range' },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => <Box {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Box',
  borderRadius: 8,
};

export const Secondary = Template.bind({});
Secondary.args = {
  primary: false,
  label: 'SecondaryBox',
};
