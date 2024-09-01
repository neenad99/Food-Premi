import { fireEvent, render,screen } from "@testing-library/react";
import {act} from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Body from '../Body.js';
import MOCK_DATA from '../mocks/MockRestroListData.json';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("Should render Body Component with search bar",async () => {
    await act(async () => render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ));
    
    const searchBtn = screen.getByRole("button",{name : "Search"});

    expect(searchBtn).toBeInTheDocument();
});

it("Should render 2 restaurant cards if we search with burger text in searchbar",async () => {
    await act(async () => render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ));

    const searchBtn = screen.getByRole("button",{name : "Search"});

    const searchInput = screen.getByTestId("searchInput");  

    fireEvent.change(searchInput,{target : {value : 'burger'}});

    fireEvent.click(searchBtn);

    const restroCards = screen.getAllByTestId("resCard");

    expect(restroCards.length).toBe(2);
});

it("Should filter top rated restaurant",async () => {
    await act(async () => render(
    <BrowserRouter>
        <Body/>
    </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedFilterBtn = screen.getByRole("button",{name : "Top Rated Restaurants"});

    fireEvent.click(topRatedFilterBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(16);
});