import type { Meta, StoryObj } from '@storybook/react';
import Input from './input'; 

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'UI/Input',
  tags: ['autodocs'],
  argTypes: {
    type: { control: { type: 'select', options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'] } },
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    required: { control: 'boolean' },
    className: {
      description: 'Optional additional CSS class names.',
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text here...',
  },
  name: 'Default Input',
};

export const WithValue: Story = {
  args: {
    placeholder: 'Enter text here...',
    value: 'Initial value',
  },
  name: 'Input with Value',
};

export const Disabled: Story = {
  args: {
    placeholder: 'This input is disabled',
    disabled: true,
  },
  name: 'Disabled Input',
};

export const Error: Story = {
  args: {
    placeholder: 'Error input',
    className: 'border-red-500',
  },
  name: 'Error Input',
};

export const Search: Story = {
  args: {
    placeholder: 'Search...',
    type: 'search',
  },
  name: 'Search Input',
};

export const Password: Story = {
  args: {
    placeholder: 'Enter password',
    type: 'password',
  },
  name: 'Password Input',
};

export const CustomStyling: Story = {
    args: {
        placeholder: "Custom styled input",
        className: "bg-yellow-100 border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500"
    },
    name: "Custom Styling"
}