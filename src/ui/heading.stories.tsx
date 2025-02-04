import type { Meta, StoryObj } from '@storybook/react';
import Heading from './heading';
import clsx from 'clsx';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'UI/Heading',
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'The content of the heading.',
      control: { type: 'text' },
    },
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
    children: 'This is a default heading',
  },
  name: 'Default Heading',
};

export const WithCustomClass: Story = {
  args: {
    children: 'Heading with custom class',
  },
  name: 'With Custom Class',
};

export const WithLongText: Story = {
    args: {
      children: "This is a heading with a longer string of text to demonstrate how it will wrap and behave in different scenarios.  It's important to test with various lengths.",
    },
    name: "With Long Text"
};

export const WithHTML: Story = {
  args: {
    children: (
      <>
        This heading contains <strong>HTML</strong> elements.
      </>
    ),
  },
  name: 'With HTML Content',
};


export const H2Heading: Story = {
  render: (args) => <h2 className={clsx(
    "text-xl font-medium leading-tight tracking-tight text-gray-900",
    args.className
  )}>{args.children}</h2>,
  args: {
    children: 'This is an H2 heading',
  },
  name: 'H2 Heading',
};