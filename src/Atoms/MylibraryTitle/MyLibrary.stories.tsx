import { ComponentMeta, ComponentStory } from "@storybook/react";
import MyLibraryTitle from "./MyLibraryTitle";
import React from 'react';

export default{
    title:'Atoms/MyLibrary',
    component:MyLibraryTitle
} as ComponentMeta<typeof MyLibraryTitle>;

const Template:ComponentStory<typeof MyLibraryTitle>= (args) => <MyLibraryTitle {...args} />;

export const MyLibrary = Template.bind({});