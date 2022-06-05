import React from 'react';
import {Routes,Route,Navigate } from "react-router-dom";
import {routes} from "./index";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const AppRouter = () => {
    return (
        <Routes>
            { routes.map(route => {
                return <Route key={route.path} path={route.path} element={<route.element/>} />
                })
            }
            <Route path={'*'} element={<ErrorPage />} />
        </Routes>
    );
};

export default AppRouter;