import { createBrowserRouter } from 'react-router-dom';

import { HomePage, PageNotFound } from './pages';
import {
    HOMEPAGE_ROUTE,
} from './utils/constants';

export const router = createBrowserRouter([
    {
        element: <HomePage />,
        path: `/${HOMEPAGE_ROUTE}`,
    },
    {
        element: <PageNotFound />,
        path: `*`,
    },
]);
