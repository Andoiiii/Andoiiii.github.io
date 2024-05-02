// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Page Imports
import LayoutWrapper from "./layout/layout-wrapper";
import Homepage from "./home/home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LayoutWrapper />,
        errorElement: <><p>404 lmao</p></>,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/about",
                element: <><h1>Your local nerd, Andoiii.</h1></>
            }
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
