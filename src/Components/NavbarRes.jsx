import { IoMenuSharp } from 'react-icons/io5';
import { CartSvg, PersonSvg } from './Svg Container/SvgContainer';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const NavbarRes = () => {
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Best Sellers',
      path: '/best-sellers',
    },
    {
      name: 'Top Brands',
      path: '/top-brands',
    },
    {
      name: 'Categories',
      path: '/category',
    },
  ];
  const dashboardLinks = [
    {
      name: 'My Orders',
      path: '/dashboard/orders',
    },
    {
      name: 'Message Center',
      path: '/dashboard/message-center',
    },
    {
      name: 'Wishlist',
      path: '/dashboard/wishlist',
    },
    {
      name: 'Settings',
      path: '/dashboard/setting',
    },
    {
      name: 'Help Center',
      path: '/dashboard/help-center',
    },
  ];
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setShowSidebar(false);
      }
    };
    if (showSidebar) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSidebar]);

  return (
    <>
      <div className="bg-blackColor px-5 py-5 text-white flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoMenuSharp
            onClick={() => setShowSidebar(true)}
            className="text-white size-6"
          />
          <Link to="/" className="text-xl">
            Logo Here
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/dashboard/overview">
            <PersonSvg small={true} />
          </Link>
          <Link to="/cart">
            <CartSvg small={true} />
          </Link>
        </div>
      </div>

      <div
        ref={sidebarRef}
        className={`bg-secondaryColor fixed top-0 h-[100vh] px-8 py-6 min-w-[220px] sm:min-w-[250px] md:min-w-[280px] transition-transform duration-500 ${
          showSidebar ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mt-5">
          <Link
            onClick={() => setShowSidebar(false)}
            to="/"
            className="text-xl font-semibold"
          >
            Logo Here
          </Link>
        </div>

        <div className="flex flex-col gap-4 mt-6">
          {navLinks.map((link) => (
            <NavLink
              onClick={() => setShowSidebar(false)}
              key={link?.name}
              to={link?.path}
              className={({ isActive }) =>
                `flex items-center gap-1 font-medium text-sm md:text-base ${
                  isActive ? 'text-black' : 'text-[#785700]'
                }`
              }
            >
              {link?.name}
            </NavLink>
          ))}
        </div>
        <div className="border-t border-blackColor/60 w-full my-5"></div>
        <div className="flex flex-col gap-4 mt-6">
          {dashboardLinks.map((link) => (
            <NavLink
              onClick={() => setShowSidebar(false)}
              key={link?.name}
              to={link?.path}
              className={({ isActive }) =>
                `flex items-center gap-1 font-medium text-sm md:text-base ${
                  isActive ? 'text-black' : 'text-[#785700]'
                }`
              }
            >
              {link?.name}
            </NavLink>
          ))}
        </div>
        <div className="border-t border-blackColor/60 w-full my-5"></div>
        <div>
          <Link to='/login' className="flex items-center justify-center rounded-lg gap-1 text-sm md:text-base text-blackColor font-medium bg-white py-2 text-center w-full">
            Sign Out
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarRes;
