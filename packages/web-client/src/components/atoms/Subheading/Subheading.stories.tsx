import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Subheading } from './Subheading';

export default {
  title: 'Atom/Subheading',
  component: Subheading,
  argTypes: {
    childern: { control: 'text' },
  },
} as ComponentMeta<typeof Subheading>;

const Template: ComponentStory<typeof Subheading> = (args) => <Subheading {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Subheading',
};
