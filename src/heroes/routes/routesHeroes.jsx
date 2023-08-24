import { Navigate } from "react-router-dom";
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";


export const routesHeroes = [
    {
        path: "marvel",
        element: <MarvelPage />,
    },
    {
        path: "dc",
        element: <DcPage />,
    },
    {
        path: "search",
        element: <SearchPage />,
    },
    {
        path: "hero/:id",
        element: <HeroPage />,
    },
    {
        path: "/*",
        element: <Navigate to="/marvel" />
    }
    ,
    {
        index: true,
        element: <Navigate to="/marvel" />
    }
];