import { fireEvent, render,screen } from "@testing-library/react";
import {act} from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Body from "../Body";
import MOCK_DATA from '../mocks/MockRestroListData.json';

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should load more restaurant cards once scrolled to atmost the document element offset height",async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body/>
            </BrowserRouter>
        );
    });

    const cardsBeforeScroll = screen.getAllByTestId("resCard");
    expect(cardsBeforeScroll.length).toBe(20);

    fireEvent.scroll(window, { target: { scrollY: document.documentElement.offsetHeight - window.innerHeight - 100 } });

    await act(async () => {
        await new Promise((resolve) => setTimeout(resolve, 500));
    });

    const cardsAfterScroll = screen.getAllByTestId("resCard");
    expect(cardsAfterScroll.length).toBeGreaterThan(20);
});