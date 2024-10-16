import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { ProgressIndicatorProvider } from '@/context/ProgressIndicatorContext';

import ProgressIndicator from './ProgressIndicator';

const meta = {
  title: 'ProgressIndicator',
  component: ProgressIndicator,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    layout: 'centered',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ProgressIndicator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    totalScreenCount: 10,
  },
  decorators: [
    (Story) => {
      return (
        <ProgressIndicatorProvider>
          <Story />
        </ProgressIndicatorProvider>
      );
    },
  ],
};
