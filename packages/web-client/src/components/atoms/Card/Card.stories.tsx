import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from './Card';

export default {
  title: 'Atom/Card',
  component: Card,
  argTypes: {
    bgColor: { control: 'color' },
    extendWidth: { control: 'boolean' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Card',
};

export const Extended = Template.bind({});
Extended.args = {
  children: 'Default Card',
  extendWidth: true,
};
