import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OutputBox } from './OutputBox';

export default {
  title: 'Atom/OutputBox',
  component: OutputBox,
  argTypes: {
    bgColor: { control: 'color' },
    padding: { control: 'text' },
    borderRadius: { control: 'text' },
    negative: { control: 'boolean' },
    theme: { control: 'text' },
  },
} as ComponentMeta<typeof OutputBox>;

const Template: ComponentStory<typeof OutputBox> = (args) => <OutputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'DefaultOutputBox',
  theme: { mode: 'light' },
};

export const NegativeValue = Template.bind({});
NegativeValue.args = {
  children: '-00.00 (Negative)',
  negative: true,
  theme: { mode: 'light' },
};

export const DarkPositiveValue = Template.bind({});
DarkPositiveValue.args = {
  children: '00.00 (Positive)',
  negative: false,
  theme: { mode: 'dark' },
};

export const DarkNegativeValue = Template.bind({});
DarkNegativeValue.args = {
  children: '-00.00 (Negative)',
  negative: true,
  theme: { mode: 'dark' },
};
