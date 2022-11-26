import { Suspense, lazy } from "react";
import React from 'react'
import { Navigate, useRoutes } from 'react-router-dom';

import DashboardLayout from '../layouts/daschboard'
import LoadingScreen from "../components/LoadingScreen";
import { DEFAULT_PATH } from "../config";

const Loadalbe = (Component) => (props) => {
    return (
        <Suspense fallback={<LoadingScreen/>}>
            <Component {...props} />
        </Suspense>
    )
}

function Router() {
    return useRoutes([
        {
            path: '/',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
                { path: '/app', element: <GeneralApp /> },
                { path: '404', element: <Page404 /> },
                { path: "*", element: <Navigate to="/404" replace /> },
            ]
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ])
}

const GeneralApp = Loadalbe(
    lazy(() => import('../pages/dashboard/GeneralApp'))
)

const Page404 = Loadalbe(lazy(() => import('../pages/Page404')));

export default Router;