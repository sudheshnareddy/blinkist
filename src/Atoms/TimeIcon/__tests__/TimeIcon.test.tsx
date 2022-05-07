import React from 'react';
import "@testing-library/jest-dom";
import { render,screen } from '@testing-library/react';
import TimeIcon from '../TimeIcon';

test("Icon should be rendered",()=>{

    render(
        <TimeIcon />
    );
    const icon=screen.getByTestId('AccessTimeIcon');
    expect(icon).toBeInTheDocument();

})