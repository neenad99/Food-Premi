import { fireEvent, render,screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import {act} from "react-dom/test-utils";
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from '../mocks/RestroMenuMockData.json';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import Cart from '../Cart';
import { BrowserRouter } from 'react-router-dom';

window.scrollTo = jest.fn();

const scrollIntoViewMock = jest.fn();
Element.prototype.scrollIntoView = scrollIntoViewMock;

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => Promise.resolve(MOCK_DATA)
    });

});

it("Should load Restaurant Menu component", async () => {
    await act(async () => {
        render(
            <Provider store={appStore}>
                <RestaurantMenu/>
            </Provider>
        );
    });

    const accordionHeader = screen.getByText(/snacks/i);
    fireEvent.click(accordionHeader);
    
    expect(screen.getAllByTestId("restroFoodItems").length).toBe(4);

}); 

it("Should add the restaurant food item in the cart once add button is clicked", async () => {
    await act(async () => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
                <RestaurantMenu/>
            </Provider>
        );
    });

    const accordionHeader = screen.getByText(/snacks/i);
    fireEvent.click(accordionHeader);
    
    expect(screen.getAllByTestId("restroFoodItems").length).toBe(4);

    const addBtns = screen.getAllByRole("button",{name : "ADD"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
});

it("Should clear the cart page once clear cart button is clicked", async () => {
    await act(async () => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <Header/>
                </BrowserRouter>
                <RestaurantMenu/>
                <Cart/>
            </Provider>
        );
    });

    const accordionHeader = screen.getByText(/snacks/i);
    fireEvent.click(accordionHeader);
    
    expect(screen.getAllByTestId("restroFoodItems").length).toBe(5);

    const addBtns = screen.getAllByRole("button",{name : "ADD"});
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("restroFoodItems").length).toBe(6);

    fireEvent.click(screen.getByRole("button",{name : "Clear Cart"}));

    expect(screen.getAllByTestId("restroFoodItems").length).toBe(4);
    
    expect(screen.getByText("Your Cart is Empty")).toBeInTheDocument();
});