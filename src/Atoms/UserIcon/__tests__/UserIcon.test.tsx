import React from 'react';
import "@testing-library/jest-dom";
import { render,screen } from '@testing-library/react';
import UserIcon from '../UserIcon';

test("Icon should be rendered",()=>{

    render(
        <UserIcon />
    );
    const icon=screen.getByTestId('PersonOutlineIcon');
    expect(icon).toBeInTheDocument();

})