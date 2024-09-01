import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import RestaurantCard from '../RestaurantCard.js';
import MOCK_DATA from '../mocks/ResCardMockData.json';


it("should render Restaurant Card component with props", () => {
    render(<RestaurantCard restroData = {MOCK_DATA}/>);

    const restroName = screen.getByText("Burger King");

    expect(restroName).toBeInTheDocument();
});