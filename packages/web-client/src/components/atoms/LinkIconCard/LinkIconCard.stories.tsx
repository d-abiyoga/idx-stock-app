import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LinkIconCard } from './LinkIconCard';

export default {
  title: 'Atom/LinkIconCard',
  component: LinkIconCard,
  argTypes: {
    label: { control: 'text' },
    stock: { control: 'boolean' },
    children: { control: 'text' },
  },
} as ComponentMeta<typeof LinkIconCard>;

const Template: ComponentStory<typeof LinkIconCard> = (args) => <LinkIconCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <p>ICON</p>
      <p>Card Wrap</p>
    </>
  ),
};
