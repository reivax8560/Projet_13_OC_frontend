import { Outlet, createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import Home from '../pages/Home'
import SignIn from '../pages/SignIn';
import Profile from '../pages/Profile';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
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
                path: "user-profile",
                element: <Profile />,
            },
        ]
    },
]);

function Root() {
    return <>
        <Outlet />
        <ScrollRestoration />
    </>
}
