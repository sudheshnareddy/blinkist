import { render,screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import ExploreCategories from "../ExploreCategories"
import React from 'react';
import "@testing-library/jest-dom"

test("Explore by categories should be rendered",()=>{
     
    render(
        <BrowserRouter>
        <ExploreCategories />
        </BrowserRouter>
    );

    const explore=screen.getByText(/Explore by Category/i);
    expect(explore).toBeInTheDocument();

});
test("Recently added titles should be rendered",()=>{
     
    render(
        <BrowserRouter>
        <ExploreCategories />
        </BrowserRouter>
    );

    const titles=screen.getByText(/Recently added titles/i);
    expect(titles).toBeInTheDocument();

});
test("Popular titles should be rendered",()=>{
     
    render(
        <BrowserRouter>
        <ExploreCategories />
        </BrowserRouter>
    );

    const popular=screen.getByText(/Popular titles/i);
    expect(popular).toBeInTheDocument();

});

