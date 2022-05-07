import { render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AppBarWithCategories from "../AppBarWithCategories";
import React from 'react';
import "@testing-library/jest-dom"

test("app bar should render blinklist logo",()=>{

    render(
       <BrowserRouter> <AppBarWithCategories handleChange={undefined} /> </BrowserRouter>
    );
    const image= screen.getByAltText(/Blinklist/i);
    expect(image).toBeInTheDocument();
});

test("app bar should have explore",()=>{

    render(
        <BrowserRouter> <AppBarWithCategories handleChange={undefined} /> </BrowserRouter>
    );
    const explore=screen.getByText("Explore");
    expect(explore).toBeInTheDocument();
});

test("app bar should have My library",()=>{

    render(
        <BrowserRouter> <AppBarWithCategories handleChange={undefined} /> </BrowserRouter>
    );

    const mylibrary=screen.getByText(/My Library/i);
    expect(mylibrary).toBeInTheDocument();
});

test("app bar should have Avatar A",()=>{

    render(
        <BrowserRouter> <AppBarWithCategories handleChange={undefined} /> </BrowserRouter>
    );

    const avatar=screen.getByText("A");
    expect(avatar).toBeInTheDocument();
});

test("app bar should have Explore by Category",()=>{

    render(
        <BrowserRouter> <AppBarWithCategories handleChange={undefined} /> </BrowserRouter>
    );

    const explore=screen.getByText("Explore by Category");
    expect(explore).toBeInTheDocument();
});