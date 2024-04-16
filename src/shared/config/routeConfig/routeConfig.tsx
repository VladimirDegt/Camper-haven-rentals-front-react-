import { MainPage } from "@/pages/MainPage";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { RouteProps } from "react-router-dom";
import {CatalogPage} from "@/pages/CatalogPage";
import {FavoritePage} from "@/pages/FavoritePage";

export enum AppRouters{
    MAIN = 'main',
    CATALOG = 'catalog',
    FAVORITES = 'favorites',
    NOT_FOUND = 'not_found'
};

export const RoutePath: Record<AppRouters, string> = {
    [AppRouters.MAIN]: '/',
    [AppRouters.CATALOG]: '/catalog',
    [AppRouters.FAVORITES]: '/favorites',
    [AppRouters.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRouters, RouteProps> = {
    [AppRouters.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRouters.CATALOG]: {
        path: RoutePath.catalog,
        element: <CatalogPage/>
    },
    [AppRouters.FAVORITES]: {
        path: RoutePath.favorites,
        element: <FavoritePage/>
    },
    [AppRouters.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage/>
    },
}