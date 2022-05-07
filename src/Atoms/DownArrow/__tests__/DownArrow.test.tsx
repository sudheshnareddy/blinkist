import React from 'react';
import "@testing-library/jest-dom";
import DownArrow from '../DownArrow';
import { render,screen } from '@testing-library/react';

test("Icon should be rendered",()=>{

    render(
        <DownArrow />
    );
    const icon=screen.getByTestId('KeyboardArrowDownIcon');
    expect(icon).toBeInTheDocument();

})