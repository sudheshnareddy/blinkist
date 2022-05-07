import { render,screen } from "@testing-library/react"
import ExploreBooks from "../ExploreBooks"
import React from 'react';
import "@testing-library/jest-dom"
import girl from '../../../Atoms/images/girl.png';

test("THe girl image should be rendered",()=>{

    render(

        <ExploreBooks />
   );

   const image=screen.getByRole("img");
   expect(image).toHaveAttribute("src","test-file-stub");
    
})