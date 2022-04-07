import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from './Heading';

export default {
  title: 'Atom/Heading',
  component: Heading,
  argTypes: {
    level: { control: 'number' },
    childern: { control: 'text' },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

export const Default = Template.bind({});
Default.args = {
  level: 1,
  children: 'Heading Level One',
};

export const h2 = Template.bind({});
h2.args = {
  level: 2,
  children: 'Heading Level Two',
};

export const h3 = Template.bind({});
h3.args = {
  level: 3,
  children: 'Heading Level Three',
};

export const h4 = Template.bind({});
h4.args = {
  level: 4,
  children: 'Heading Level Four',
};
