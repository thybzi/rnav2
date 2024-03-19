import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./MainPage";
import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage/>,
    },
    {
        path: '/about',
        element: <AboutPage/>,
    },
    {
        path: '/contact',
        element: <ContactPage/>,
    },
]);

export function App() {
    const [authData, setAuthData] = useState({
        isLoggedIn: false,
        login: null,
        name: null,
    });

    return (
        <AppContext.Provider value={{
            authData,
            setAuthData,
        }}>
            <RouterProvider router={router} />
        </AppContext.Provider>
    );
}
