import { render,screen,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Header from '../Header';
import appStore from "../../utils/appStore";

it("Should load Header Component with a login button",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const loginBtn = screen.getByRole("button");
    expect(loginBtn).toBeInTheDocument();
});

it("Should load Header Component with zero Cart Items",() => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );
    
    const cart = screen.getByText("Cart (0)");

    expect(cart).toBeInTheDocument();
});

it("Should change login button to logout button when clicked", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button",{name : "Login"});

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button",{name : "Logout"});
});