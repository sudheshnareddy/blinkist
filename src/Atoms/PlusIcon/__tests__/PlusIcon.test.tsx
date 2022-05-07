import React from 'react';
import "@testing-library/jest-dom";
import { render,screen } from '@testing-library/react';
import PlusIcon from '../PlusIcon';

test("Icon should be rendered",()=>{

    render(
        <PlusIcon />
    );
    const icon=screen.getByTestId('AddIcon');
    expect(icon).toBeInTheDocument();

})