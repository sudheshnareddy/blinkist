import { render,screen } from "@testing-library/react";
import { Footer } from "../Footer"
import React from 'react';
import "@testing-library/jest-dom"

test("Big ideas should be rendered",()=>{
    render(
        <Footer />
    );
    const big=screen.getByText(/Big ideas in small packages. Start learning now/i);
    expect(big).toBeInTheDocument();
});
test("Editorial should be rendered",()=>{
    render(
        <Footer />
    );
    const editorial=screen.getByText(/Editorial/i);
    expect(editorial).toBeInTheDocument();
});
test("Useful Links should be rendered",()=>{
    render(
        <Footer />
    );
    const links=screen.getByText(/UsefulLinks/i);
    expect(links).toBeInTheDocument();
});
test("Company should be rendered",()=>{
    render(
        <Footer />
    );
    const company=screen.getByText(/Company/i);
    expect(company).toBeInTheDocument();
});
test("Sitemap should be rendered",()=>{

    render(
        <Footer />
    );
    const sitemap=screen.getByText(/Sitemap/i);
    expect(sitemap).toBeInTheDocument();
});