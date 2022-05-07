
import { ComponentMeta, ComponentStory } from "@storybook/react";
import DownArrow from "./DownArrow";
import React from 'react';

export default{
    title:'Atoms/DownArrow',
    component:DownArrow
} as ComponentMeta<typeof DownArrow>;

const Template: ComponentStory<typeof DownArrow> = (args) => <DownArrow {...args} />;

export const BasicDownArrow = Template.bind({});
