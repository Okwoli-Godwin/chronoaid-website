import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import { HomeLayout } from "../components";
import WhoWeAre from "../pages/WhoWeAre/WhoWeAre";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import StartForFree from "../pages/StartForFree/StartForFree";
import BookADemo from "../pages/BookADemo/BookADemo";
import Confirmation from "../pages/Confirmation/confirmation";

export const Element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/whoweare",
                element: <WhoWeAre />
            },
            {
                path: "/aboutus",
                element: <AboutUs />
            },
            {
                path: "contactus",
                element: <ContactUs />
            },
            {
                path: "startforfree",
                element: <StartForFree />
            },
            {
                path: "bookademo",
                element: <BookADemo />
            },
            {
                path: "confirmation",
                element: <Confirmation />
            }
        ]
    }
])