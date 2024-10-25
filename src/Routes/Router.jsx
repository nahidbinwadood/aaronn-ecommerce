import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Homepage from '../Pages/Homepage/Homepage';
import WelcomePage from '@/Pages/Welcome Page/WelcomePage';
import Category from '@/Pages/Category/Category';
import ProductDetails from '@/Pages/Product Details/ProductDetails';
import Checkout from '@/Pages/Checkout Page/Checkout';
import DashboardLayout from '@/Layout/DashboardLayout';
import DashboardOverview from '@/Pages/Dashboard/Overview/DashboardOverview';
import DashboardOrders from '@/Pages/Dashboard/Orders/DashboardOrders';
import DashboardPayment from '@/Pages/Dashboard/Payment/DashboardPayment';
import DashboardFeedback from '@/Pages/Dashboard/Feedback/DashboardFeedback';
import DashboardMessageCenter from '@/Pages/Dashboard/Message Center/DashboardMessageCenter';
import DashboardSetting from '@/Pages/Dashboard/Setting/DashboardSetting';
import DashboardHelpCenter from '@/Pages/Dashboard/Help Center/DashboardHelpCenter';

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
      {
        path: '/product-details',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard/overview',
        element: <DashboardOverview />,
      },
      {
        path: '/dashboard/orders',
        element: <DashboardOrders />,
      },
      {
        path: '/dashboard/payment',
        element: <DashboardPayment />,
      },
      {
        path: '/dashboard/feedback',
        element: <DashboardFeedback />,
      },
      {
        path: '/dashboard/message-center',
        element: <DashboardMessageCenter />,
      },
      {
        path: '/dashboard/setting',
        element: <DashboardSetting />,
      },
      {
        path: '/dashboard/help-center',
        element: <DashboardHelpCenter />,
      },
    ],
  },
]);
export default router;
