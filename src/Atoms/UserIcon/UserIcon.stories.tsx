import { ComponentMeta, ComponentStory } from "@storybook/react"
import UserIcon from "./UserIcon"
import React from 'react';

export default{
  title:'Atoms/UserIcon',
  component:UserIcon
} as ComponentMeta<typeof UserIcon>;

const Template:ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args} />;

export const BasicUserIcon = Template.bind({});