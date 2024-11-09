import { IoMenuSharp } from 'react-icons/io5';
import { CartSvg, PersonSvg, SearchSvg } from './Svg Container/SvgContainer';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
const NavbarRes = () => {
  const navLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Best sellers',
      path: '/best-sellers',
    },
    {
      title: 'Top Brands',
      path: '/top-brands',
    },
    {
      title: "Today's Deals",
      path: '/todays-deals',
    },
    {
      title: 'Gift Cards',
      path: '/gift-cards',
    },
    {
      title: 'Buy Again',
      path: '/buy-again',
    },
    {
      title: 'Watchlist',
      path: '/dashboard/wishlist',
    },
    {
      title: 'Order',
      path: '/dashboard/orders',
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
      <div className="bg-blackColor px-5 py-5 text-white">
        <div className="flex items-center justify-between">
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
        <div className="mt-4">
          <form action="" className="w-full">
            <label className="relative">
              <input
                className="w-full px-4 py-1 rounded-full text-blackColor focus:outline-none shadow-lg"
                type="text"
                name=""
                id=""
              />
              <div className="absolute right-4 top-0 mt-[2px]">
                <SearchSvg />
              </div>
            </label>
          </form>
        </div>
      </div>

      {/* sidebar */}
      {showSidebar && (
        <div
          className={`fixed inset-0 bg-black/60 bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-500 ${
            showSidebar ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setShowSidebar(false)}
        ></div>
      )}
      <div
        ref={sidebarRef}
        className={`bg-secondaryColor z-40 fixed top-0 h-[100vh] px-8 py-6 min-w-[220px] sm:min-w-[250px] md:min-w-[280px] transition-transform duration-500 ${
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
              key={link?.title}
              to={link?.path}
              className={({ isActive }) =>
                `flex items-center gap-1 font-medium text-sm md:text-base ${
                  isActive ? 'text-black' : 'text-[#785700]'
                }`
              }
            >
              {link?.title}
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
          <Link
            to="/login"
            className="flex items-center justify-center rounded-lg gap-1 text-sm md:text-base text-blackColor font-medium bg-white py-2 text-center w-full"
          >
            Sign Out
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarRes;
