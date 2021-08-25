import React from 'react';

import { Button } from '../../src/components/Button'

import { Story, Meta } from '@storybook/react';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story = (args) => <Button {...args} onClick={()=> {}}/>;

export const Primary = Template.bind({});

Primary.args = {
};