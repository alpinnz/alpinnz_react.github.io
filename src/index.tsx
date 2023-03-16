import React from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import Router from "./router";
import './index.css';

const root = document.getElementById('root') as HTMLElement;
createRoot(root).render(
    <React.StrictMode>
        <RouterProvider router={Router()}/>
    </React.StrictMode>
);
