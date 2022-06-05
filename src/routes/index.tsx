import React from "react";
//components
import Home from "../pages/Home/Home";
import SearchResult from "../pages/SearchResult/SearchResult";

export interface IRoutes {
    path: string;
    element: React.ComponentType;
}

export enum RoutesNames {
    HOME = '/',
    SEARCH_RESULT = '/search/',
    SEARCH_RESULT_PARAM = '/search/:query',
}

export const routes:IRoutes[] = [
    { path: RoutesNames.HOME,  element: Home },
    { path: RoutesNames.SEARCH_RESULT, element: SearchResult },
    { path: RoutesNames.SEARCH_RESULT_PARAM, element: SearchResult }
]