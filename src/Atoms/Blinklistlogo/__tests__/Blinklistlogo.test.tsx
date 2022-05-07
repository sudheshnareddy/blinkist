import React from 'react';
import "@testing-library/jest-dom";
import BlinkListLogo from '../Blinklistlogo';
import { render,screen } from '@testing-library/react';

test("Blinkist logo must be displayed",()=>{

    render(
        <BlinkListLogo />
    );
    const image=screen.getByAltText("BlinkList");
    expect(image).toBeInTheDocument();

});