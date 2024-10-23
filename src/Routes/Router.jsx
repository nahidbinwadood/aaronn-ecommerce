import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Homepage from '../Pages/Homepage/Homepage';
import WelcomePage from '@/Pages/Welcome Page/WelcomePage';
import Category from '@/Pages/Category/Category';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/welcome-deals',
        element: <WelcomePage />,
      },
      {
        path: '/category',
        element: <Category />,
      },
    ],
  },
]);
export default router;
