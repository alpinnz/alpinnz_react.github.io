import {createBrowserRouter, RouteObject} from "react-router-dom";
import {Router as RemixRouter} from "@remix-run/router/dist/router";
import ErrorPage from "../pages/error";
import LandingPage from "../pages/landing_page";

export default function Router() :RemixRouter{
    const data :RouteObject[]=
        [
            {
                path: "/",
                element: <LandingPage/>,
                errorElement: <ErrorPage />,
            }
        ];


    return createBrowserRouter(data);
}