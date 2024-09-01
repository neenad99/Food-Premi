import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import Contact from "../Contact"


describe("Contact Us Page Test Case", () => {
    test("Should load contact us page", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load two input boxes in the contact us page",() => {
        render(<Contact/>);
    
        const inputBoxes = screen.getAllByRole("textbox");
    
        expect(inputBoxes.length).toBe(2);
    });
});