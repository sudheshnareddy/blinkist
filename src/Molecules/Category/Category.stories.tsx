import { ComponentMeta, ComponentStory } from "@storybook/react";
import Category from "./Category";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { BrowserRouter } from "react-router-dom";
import React from 'react';


export default{
    title:'Molecules/Category',
    component:Category
} as ComponentMeta<typeof Category>;


const Template: ComponentStory<typeof Category> = (args) => <BrowserRouter> <Category {...args} /> </BrowserRouter>;

export const categorybasic= Template.bind({});
categorybasic.args={
    categoryname:'Entrepreneurship',
    icon: <NotificationsNoneIcon /> 
}
