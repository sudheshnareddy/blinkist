import { render ,screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyTabs from "../MyTabs";
import React from 'react';
import "@testing-library/jest-dom"

test("Testing if currentlyReading is the active tab",()=>{

    render(
      <BrowserRouter>  <MyTabs searchTerm="" /> </BrowserRouter>
    );
    const tabName=screen.getByText("Currently Reading").closest("button");
    expect(tabName).toHaveAttribute("aria-selected","true");
   
});
test("Testing if Finished is the inactive tab",()=>{

    render(
      <BrowserRouter>  <MyTabs searchTerm="" /> </BrowserRouter>
    );
    const tabName=screen.getAllByText("Finished")[0].closest("button");
    expect(tabName).toHaveAttribute("aria-selected","false");
   
});
test("Book should match with filter human",()=>{

    render(
        <BrowserRouter>  <MyTabs searchTerm="human" /> </BrowserRouter>
      );

      const bookName = screen.getByText(/Bring Your Human to Work/i);
      expect(bookName).toBeInTheDocument();

});

// test("Book should match with filter eat",()=>{

//     render(
//         <BrowserRouter>  <MyTabs searchTerm="eat" /> </BrowserRouter>
//       );
//       const bookName = screen.getByText(/Eat Better, Feel Better/i);
//       expect(bookName).toBeInTheDocument();

// });

// test("Currently reading books should be 9 initially",()=>{

//     render(

//         <BrowserRouter>  <MyTabs searchTerm="" /> </BrowserRouter>
//     );

//     const headings=screen.getAllByRole('heading');
//     expect(headings.length).toBe(9);

// });