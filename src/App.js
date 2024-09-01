import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";    
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import { Provider } from "react-redux";
import { createBrowserRouter,Outlet,RouterProvider } from "react-router-dom";
import appStore from "./utils/appStore.js";
import Shimmer from "./components/Shimmer.js";


const About = lazy(() => import("./components/About.js"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.js"));
const Cart = lazy(() => import("./components/Cart.js"));

const AppLayout = () => {
    return (
    <Provider store={appStore}>
        <div className="dark:bg-[#1a1a1a] dark:text-[#f1f1f1]">
            <Header/>
            <Outlet/>
        </div>
    </Provider>
    );
}


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<Suspense fallback={<Shimmer/>}><About/></Suspense>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:restroId",
                element:<Suspense fallback = {<Shimmer/>}><RestaurantMenu/></Suspense>
            },
            {
                path:"/cart",
                element:<Suspense fallback = {<Shimmer/>}><Cart/></Suspense>
            }
        ],
        errorElement:<Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);