import { Outlet, createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import Home from '../pages/Home'
import SignIn from '../pages/SignIn';
import User from '../pages/User';
import Transactions from '../pages/Transactions';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        // errorElement: <Error />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "sign-in",
                element: <SignIn />,
            },
            {
                path: "user-page",
                element: <User />,
            },
            {
                path: "transactions",
                element: <Transactions />,
            },
        ]
    },
    // {
    //     path: "*",
    //     element: <Error />,
    // },
]);

function Root() {
    return <>
        <Outlet />
        <ScrollRestoration />
    </>

}
