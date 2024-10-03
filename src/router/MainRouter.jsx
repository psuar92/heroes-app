import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HeroesRoutes } from '../heroes/router/HeroesRoutes';
import { ChildHeroesRoutes } from '../heroes/router/ChildHeroesRoutes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

const router = createBrowserRouter([

    {
        path: "/login",
        element: (
            <PublicRoute> 
                <LoginPage /> 
            </PublicRoute>
        ),
    },
    {
        path: "/",
        element: (
            <PrivateRoute> 
                <HeroesRoutes /> 
            </PrivateRoute>
        ),
        children: ChildHeroesRoutes,
    }

]);

export const MainRouter = () => {
    return <RouterProvider router={router} />
};