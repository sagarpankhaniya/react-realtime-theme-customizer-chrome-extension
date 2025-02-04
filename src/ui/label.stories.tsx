import type { Meta, StoryObj } from '@storybook/react';
import Label from './label'; 

const meta: Meta<typeof Label> = {
  component: Label,
  title: 'UI/Label',
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text', 
      description: 'The content of the label',
    },
    className: {
      control: 'text',
      description: 'Optional additional CSS class names',
    },
    htmlFor: {
      control: 'text',
      description: 'The `for` attribute of the label (connects to input)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default Label',
    htmlFor: 'inputId', 
  },
  name: 'Default',
};

export const WithCustomClass: Story = {
  args: {
    children: 'Custom Styled Label',
    className: 'text-blue-500 font-bold',
    htmlFor: 'inputId',
  },
  name: 'With Custom Class',
};

export const WithLongText: Story = {
  args: {
    children:
      'This is a label with a longer string of text to demonstrate how it will wrap and behave in different scenarios.  It\'s important to test with various lengths.',
    htmlFor: 'inputId',
  },
  name: 'With Long Text',
};

export const WithHTML: Story = {
  args: {
    children: (
      <>
        Label with <strong>HTML</strong> content
      </>
    ),
    htmlFor: 'inputId',
  },
  name: 'With HTML',
};

export const NoFor: Story = {
  args: {
    children: "Label without 'for' attribute (less common)",
  },
  name: 'Without "for" attribute',
};