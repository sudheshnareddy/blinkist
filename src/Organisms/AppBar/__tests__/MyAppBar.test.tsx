import { fireEvent, render,screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyAppBar from "../MyAppBar";
import React from 'react';
import "@testing-library/jest-dom"

test("app bar should render blinklist logo",()=>{

    render(
       <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );
    const image= screen.getByAltText(/Blinklist/i);
    expect(image).toBeInTheDocument();

});

test("app bar should have explore",()=>{

    render(
        <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );

    const explore=screen.getByText(/Explore/i);
    expect(explore).toBeInTheDocument();
});

test("app bar should have My library",()=>{

    render(
        <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );

    const mylibrary=screen.getByText(/My Library/i);
    expect(mylibrary).toBeInTheDocument();
});

test("app bar should have Avatar A",()=>{

    render(
        <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );
    const avatar=screen.getByText("A");
    expect(avatar).toBeInTheDocument();
});

test("when clicked on search, explore should disappear",()=>{

    render(
        <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );

    const search=screen.getAllByRole("button");
    fireEvent.click(search[0]);
    const explore=screen.queryByText("Explore");
    expect(explore).toBeNull();
});
test("Search bar is displayed when clicked on search icon button",()=>{

    render(
        <BrowserRouter> <MyAppBar handleChange={undefined} /> </BrowserRouter>
    );

    const search=screen.getAllByRole("button");
    fireEvent.click(search[0]);
    const input=screen.getByRole("textbox");
    expect(input).toBeInTheDocument();

});
