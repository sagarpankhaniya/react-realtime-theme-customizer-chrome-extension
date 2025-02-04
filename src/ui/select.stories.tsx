import type { Meta, StoryObj } from '@storybook/react';
import Select from './select'; 

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'UI/Select',
  tags: ['autodocs'],
  argTypes: {

    options: {
      control: { type: 'object' }, 
      description: 'Array of select options',
      table: {
        type: { summary: 'Options[]' }, 
      },
    },
    className: {
      control: 'text',
      description: 'Optional additional CSS class names',
    },
    multiple: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultOptions = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
];

export const Default: Story = {
  args: {
    options: defaultOptions,
  },
  name: 'Default Select',
};

export const WithCustomClass: Story = {
  args: {
    options: defaultOptions,
    className: 'border-red-500 focus:ring-red-500',
  },
  name: 'With Custom Class',
};

export const WithPreselected: Story = {
    args: {
        options: defaultOptions,
        value: '2' 
    },
    name: "With preselected value"
}

export const LongOptions: Story = {
  args: {
    options: [
      { value: '1', label: 'A very long option label that might wrap' },
      { value: '2', label: 'Another long option label to test wrapping' },
      { value: '3', label: 'Short option' },
    ],
  },
  name: 'Long Options',
};

export const EmptyOptions: Story = {
  args: {
    options: [], 
  },
  name: 'Empty Options',
};