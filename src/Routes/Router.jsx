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
import BestSellers from '@/Pages/Best Sellers/BestSellers';
import TopBrands from '@/Pages/Top Brands/TopBrands';
import HairExtension from '@/Pages/Hair Extension/HairExtension';
import HomeAndGarden from '@/Pages/Home and Garden/HomeAndGarden';
import Registration from '@/Pages/Auth/Registration';
import Login from '@/Pages/Auth/Login';
import EmailLogin from '@/Pages/Auth/EmailLogin';

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
        path: '/best-sellers',
        element: <BestSellers />,
      },
      {
        path: '/top-brands',
        element: <TopBrands />,
      },
      {
        path: '/hair-extension',
        element: <HairExtension />,
      },
      {
        path: '/home-and-garden',
        element: <HomeAndGarden />,
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
  { path: '/register', element: <Registration /> },
  { path: '/login', element: <Login /> },
  { path: '/email-login', element: <EmailLogin /> },
]);
export default router;
