import Footer from '@/Shared/Footer';
import Navbar from '@/Shared/Navbar';
import { useEffect, useMemo, useState } from 'react';
import {
  NavLink,
  Outlet,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';

const DashboardLayout = () => {
  const [currentPage, setCurrentPage] = useState('');
  const dashboardNavLinks = useMemo(
    () => [
      {
        title: 'Overview',
        path: '/dashboard/overview',
      },
      {
        title: 'Orders',
        path: '/dashboard/orders',
      },
      {
        title: 'Payment',
        path: '/dashboard/payment',
      },
      {
        title: 'Feedback',
        path: '/dashboard/feedback',
      },
      {
        title: 'Message Center',
        path: '/dashboard/message-center',
      },
      {
        title: 'Setting',
        path: '/dashboard/setting',
      },
      {
        title: 'Help Center',
        path: '/dashboard/help-center',
      },
    ],
    []
  );
  const location = useLocation();
  const currentPath = location?.pathname;

  useEffect(() => {
    const currentNavItem = dashboardNavLinks.find(
      (item) => item.path === currentPath
    );
    if (currentNavItem) {
      setCurrentPage(currentNavItem.title);
    }
  }, [currentPath, dashboardNavLinks]);
  return (
    <>
      <ScrollRestoration />
      <nav>
        <Navbar />
      </nav>
      <main className="min-h-[calc(100vh-612px)]">
        <div className="my-24">
          <div className="container mx-auto">
            <div>
              <p>
                Dashboard <span> {'>'} </span> Account <span> {'>'} </span>{' '}
                <span className="text-lg font-semibold"> {currentPage}</span>
              </p>
            </div>
            <div className="mt-16 flex gap-5">
              <div className="w-[30%] px-8 py-9 rounded-[24px] border border-[#E5E5E5]">
                <div>
                  <h2 className="text-3xl font-semibold pb-6 border-b border-[#C5C5C5]">
                    Account
                  </h2>
                </div>
                <div className="mt-6">
                  <ul className="flex flex-col gap-5 w-full">
                    {dashboardNavLinks?.map((link, idx) => (
                      <li key={link?.title} className="w-full">
                        <NavLink
                          to={link?.path}
                          className={({ isActive }) =>
                            `text-lg font-semibold block  pb-4  ${
                              dashboardNavLinks.length - 1 === idx
                                ? 'border-none '
                                : 'border-b'
                            } border-[#C5C5C5] ${
                              isActive ? 'text-[#191919]' : 'text-[#989898]'
                            }`
                          }
                        >
                          {link?.title}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="w-full px-8 py-9 rounded-[24px] border border-[#E5E5E5]">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default DashboardLayout;
