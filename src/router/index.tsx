import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';
import { createHashRouter } from 'react-router-dom';

const router = createHashRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [{ index: true, element: <Home /> }],
    },
]);

export default router;
