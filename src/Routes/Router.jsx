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
import NumberLogin from '@/Pages/Auth/NumberLogin';
import VerifyEmail from '@/Pages/Auth/VerifyEmail';
import ResetPassword from '@/Pages/Auth/ResetPassword';
import ResetPassEmail from '@/Pages/Auth/ResetPassEmail';
import ResetPassNumber from '@/Pages/Auth/ResetPassNumber';
import ChangePassword from '@/Pages/Auth/ChangePassword';
import DashboardWishlist from '@/Pages/Dashboard/Wishlist/DashboardWishlist';
import BuyInBulk from '@/Pages/Buy In Bulk/BuyInBulk';
import Cart from '@/Pages/Cart/Cart';
import SearchResult from '@/Pages/SearchResult/SearchResult';

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
        path: '/buy-bulk',
        element: <BuyInBulk />,
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
        path: '/search-result',
        element: <SearchResult />,
      },
      {
        path: '/product-details',
        element: <ProductDetails />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/cart',
        element: <Cart />,
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
        path: '/dashboard/wishlist',
        element: <DashboardWishlist />,
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
  { path: '/number-login', element: <NumberLogin /> },
  { path: '/verify-email', element: <VerifyEmail /> },
  { path: '/reset-password', element: <ResetPassword /> },
  { path: '/reset-password/email', element: <ResetPassEmail /> },
  { path: '/reset-password/number', element: <ResetPassNumber /> },
  { path: '/change-password', element: <ChangePassword /> },
]);
export default router;
