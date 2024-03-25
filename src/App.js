import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { MainPage } from "./MainPage";
import { AboutPage } from "./AboutPage";
import { ContactPage } from "./ContactPage";
import { Provider } from "react-redux";
import { store } from "./store/store";

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
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    );
}
