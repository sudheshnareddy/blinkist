import React from 'react';
import "@testing-library/jest-dom";
import { render,screen } from '@testing-library/react';
import MySearchIcon from '../MySearchicon';

test("Icon should be rendered",()=>{

    render(
        <MySearchIcon />
    );
    const icon=screen.getByTestId('SearchIcon');
    expect(icon).toBeInTheDocument();

})