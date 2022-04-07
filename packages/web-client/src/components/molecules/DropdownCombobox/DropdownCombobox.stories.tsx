import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DropdownCombobox } from './DropdownCombobox';

export default {
  title: 'Molecules/DropdownCombobox',
  component: DropdownCombobox,
  argTypes: {
    items: { controls: 'text' },
    labelName: { controls: 'text' },
  },
} as ComponentMeta<typeof DropdownCombobox>;

const Template: ComponentStory<typeof DropdownCombobox> = (args) => <DropdownCombobox {...args} />;

export const Default = Template.bind({});
Default.args = {
  labelName: 'Ticker',
  items: ['AALI', 'ADRO', 'BBCA', 'BBNI', 'PTBA'],
};
