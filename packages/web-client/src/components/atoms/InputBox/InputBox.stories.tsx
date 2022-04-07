import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputBox } from './InputBox';

export default {
  title: 'Atom/InputBox',
  component: InputBox,
  argTypes: {
    bgColor: { control: 'color' },
    padding: { control: 'text' },
    borderRadius: { control: 'range' },
    width: { control: 'text' },
  },
} as ComponentMeta<typeof InputBox>;

const Template: ComponentStory<typeof InputBox> = (args) => <InputBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'DefaultInputBox',
};

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Primary Input Box',
  padding: '0.5rem',
};

export const Secondary = Template.bind({});
Secondary.args = {
  placeholder: 'Secondary Input Box',
  textColor: 'lightblue',
};
