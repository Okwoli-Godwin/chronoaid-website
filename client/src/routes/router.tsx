import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { HomeLayout } from "../components";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
])