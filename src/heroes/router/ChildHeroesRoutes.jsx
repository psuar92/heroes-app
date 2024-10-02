import { Navigate } from 'react-router-dom';
import { MarvelPage, DcPage, HeroPage, SearchPage } from '../../heroes';

export const ChildHeroesRoutes = [

    {
        index: true,
        element: <SearchPage />,
    },
    {
        path: "/marvel",
        element: <MarvelPage />,
    },
    {
        path: "/dc",
        element: <DcPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
    },
    {
        path: "/hero/:id",
        element: <HeroPage />,
    },
    {
        path: "/*",
        element: <Navigate to={"/marvel"} />,
    },

];