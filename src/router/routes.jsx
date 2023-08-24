import React from 'react'
import { LoginPage } from '../auth';
import { HeroesRoutes, routesHeroes } from '../heroes';
import { ErrorPage } from '../ui';
import { createHashRouter } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const router =  createHashRouter([
    {
        path: "login",
        errorElement: <ErrorPage />,
        element: (
            <PublicRoute>
                <LoginPage />
            </PublicRoute>
        ),
    },
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: (
            <PrivateRoute>
                <HeroesRoutes />
            </PrivateRoute>
        ),
        children: routesHeroes
    }
]);