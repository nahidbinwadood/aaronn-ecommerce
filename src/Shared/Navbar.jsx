import {
  CartSvg,
  DownArrowSvg,
  HamburgerSvg,
  MessageSvg,
  OrderSvg,
  PaymentSvg,
  PersonBlackSvg,
  PersonSvg,
  SearchSvg,
  WishlistSvg,
} from '@/Components/Svg Container/SvgContainer';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';

const navLinks = [
  {
    title: 'Dollar Express',
    path: '/dollar-express',
  },
  {
    title: 'Best sellers',
    path: '/best-sellers',
  },
  {
    title: 'Ships from us',
    path: '/ships-from-us',
  },
  {
    title: 'Home Improvement',
    path: '/home-improvement',
  },
  {
    title: 'Top Brands',
    path: '/top-brands',
  },
  {
    title: 'More',
    path: '/more',
  },
];
const categories = [
  {
    title: 'Bag',
    path: '/categories/bag',
  },
  {
    title: 'Furniture',
    path: '/categories/furniture',
  },
  {
    title: 'Beauty & Health',
    path: '/categories/beauty-&-health',
  },
  {
    title: 'Toys & Games',
    path: '/categories/toys-&-games',
  },
  {
    title: 'Electronics',
    path: '/categories/electronics',
  },
  {
    title: 'Luggage & Bags',
    path: '/categories/luggage-&-bags',
  },
  {
    title: 'Shoes',
    path: '/categories/shoes',
  },
  {
    title: 'Home & Garden',
    path: '/categories/home-&-garden',
  },
  {
    title: 'Men',
    path: '/categories/men',
  },
  {
    title: 'Women',
    path: '/categories/women',
  },
  {
    title: 'Sport',
    path: '/categories/sport',
  },
  {
    title: 'Phones',
    path: '/categories/phones',
  },
  {
    title: 'Laptop',
    path: '/categories/laptop',
  },
];
const profileNavLinks = [
  {
    title: 'My Orders',
    logo: <OrderSvg />,
    path: '/my-orders',
  },
  {
    title: 'Message center',
    logo: <MessageSvg />,
    path: '/message-center',
  },
  {
    title: 'Payment ',
    logo: <PaymentSvg />,
    path: '/payment',
  },
  {
    title: 'Wishlist ',
    logo: <WishlistSvg />,
    path: '/wishlist',
  },
];
const profileDashboardLinks = [
  {
    title: 'Settings',
    path: '/settings',
  },
  {
    title: 'Seller Log In',
    path: '/seller-login',
  },
  {
    title: 'Help Center',
    path: '/help-center',
  },
];
const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showPriceInfo, setShowPriceInfo] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(false);

  return (
    <div className="font-sans">
      {/* primary navbar */}
      <div className="bg-primaryColor text-white h-[70px] flex items-center">
        <div className="container mx-auto w-full flex items-center justify-between">
          <div>
            <Link to="/">
              <h3 className="text-2xl">Logo Here</h3>
            </Link>
          </div>
          <div>
            <form action="">
              <label htmlFor="search" className="relative block w-[750px]">
                <input
                  id="search"
                  className="w-full pl-6 pr-40 py-3 text-black border border-gray-300 rounded-full focus:outline-none placeholder:text-sm text-sm"
                  placeholder="Search for the product"
                />
                <button
                  type="submit"
                  className="absolute cursor-pointer z-10 inset-y-0 right-5 flex items-center"
                >
                  <SearchSvg />
                </button>
              </label>
            </form>
          </div>

          <div className="flex items-center gap-12">
            <div className="cursor-pointer">
              <div
                onMouseEnter={() => setShowPriceInfo(true)}
                onMouseLeave={() => setShowPriceInfo(false)}
                className="flex items-center gap-2 relative"
              >
                <div className="size-6 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://i.imgur.com/2lC7irs.png"
                    alt=""
                  />
                </div>
                <div className="flex gap-1 items-center">
                  <div>
                    <p className="text-xs">EN / </p>
                    <p className="text-sm">USD</p>
                  </div>
                  <div>
                    <DownArrowSvg />
                  </div>
                </div>

                {/* popup */}
                <div
                  onMouseEnter={() => setShowPriceInfo(true)}
                  onMouseLeave={() => setShowPriceInfo(false)}
                  className={`relative transition-all duration-300 ${
                    showPriceInfo
                      ? 'z-10 scale-100 opacity-100 transition-all duration-300'
                      : '-z-10 scale-90 opacity-0 transition-all duration-300'
                  }`}
                >
                  <div className="w-[300px] absolute top-8 -right-10 bg-white shadow-lg rounded-3xl p-8">
                    <div className="absolute top-[-13px] right-[48px] w-0 h-0 border-r-[13px] border-b-[13px] border-l-[13px] border-b-white border-r-transparent border-l-transparent" />

                    {/* contents */}
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-xl font-semibold text-black pb-2">
                          Ship to
                        </h2>
                        <div>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Bangladesh" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Bangladesh">
                                Bangladesh
                              </SelectItem>
                              <SelectItem value="India">India</SelectItem>
                              <SelectItem value="Pakistan">Pakistan</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-black">
                          Language
                        </h2>
                        <div className="pt-2">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="English" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="light">English</SelectItem>
                              <SelectItem value="dark">Spanish</SelectItem>
                              <SelectItem value="system">Bangla</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-xl font-semibold text-black">
                          Currency
                        </h2>
                        <div className="pt-2">
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="BDT ( BAngladeshi Taka) " />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="BDT">
                                BDT ( BAngladeshi Taka){' '}
                              </SelectItem>
                              <SelectItem value="USD">
                                USD(United States Dollar)
                              </SelectItem>
                              <SelectItem value="Rupee">
                                Rupee (Indian Rupee)
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              onMouseEnter={() => setShowProfileInfo(true)}
              onMouseLeave={() => setShowProfileInfo(false)}
              className="cursor-pointer relative"
            >
              <div
                onMouseEnter={() => setShowProfileInfo(true)}
                onMouseLeave={() => setShowProfileInfo(false)}
                className="flex items-center gap-2 cursor-pointer relative"
              >
                <div>
                  <PersonSvg />
                </div>
                <div>
                  <p className="text-xs">Hello</p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm">Sign In Register</p>
                    <DownArrowSvg />
                  </div>
                </div>
              </div>
              {/* popup */}
              <div
                onMouseEnter={() => setShowProfileInfo(true)}
                onMouseLeave={() => setShowProfileInfo(false)}
                className={`  p-6 text-black absolute top-5 -right-10
                  ${
                    showProfileInfo
                      ? 'opacity-100 transition-all duration-500 z-10'
                      : 'opacity-0 transition-all duration-500 -z-10'
                  }
                  `}
              >
                <div className="w-[340px] absolute top-8 -right-10 bg-white shadow-lg rounded-3xl p-8">
                  <div className="absolute top-[-13px] right-1/2 translate-x-1/2  w-0 h-0 border-r-[20px] border-b-[13px] border-l-[20px] border-b-white border-r-transparent border-l-transparent" />

                  {/* contents */}
                  <div className="">
                    <div>
                      <div className="flex items-center gap-4 pb-2">
                        <div className="size-12 flex items-center justify-center bg-[#D1D0D0] rounded-full">
                          <PersonBlackSvg />
                        </div>
                        <div>
                          <h4 className="text-sm">
                            Welcome back ,{' '}
                            <span className="text-base font-semibold">
                              Badhan
                            </span>
                          </h4>
                        </div>
                      </div>
                      <Link
                        to="/"
                        className="text-[#256FF9] font-semibold text-sm ml-16"
                      >
                        Sign Out
                      </Link>
                    </div>
                    <div className="border border-[#D1D0D0] my-4" />
                    <div>
                      <ul className="flex flex-col gap-4">
                        {profileNavLinks?.map((link) => (
                          <li key={link?.title}>
                            <Link
                              to={link?.path}
                              className="text-blackColor hover:font-bold transition-all duration-300 font-semibold text-sm flex items-center gap-2"
                            >
                              <span>{link?.logo}</span>
                              {link?.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border border-[#D1D0D0] my-4" />
                    <div>
                      <ul className="flex flex-col gap-4">
                        {profileDashboardLinks?.map((link) => (
                          <li key={link?.title}>
                            <Link
                              to={link?.path}
                              className="text-[#5A5C5F] hover:font-bold transition-all duration-300 font-semibold text-sm flex items-center gap-2"
                            >
                              {link?.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
              <div>
                <CartSvg />
              </div>
              <div>
                <p className="text-xs">0</p>
                <p className="text-sm">Cart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* secondary navbar */}
      <div className="bg-secondaryColor h-[80px] flex items-center">
        <div className="container mx-auto flex items-center gap-40">
          <div className="relative">
            <button
              onMouseEnter={() => setShowCategory(true)}
              onMouseLeave={() => setShowCategory(false)}
              className={` bg-white px-6 py-3 rounded-full flex items-center gap-16 w-fit cursor-pointer`}
            >
              <div className="flex items-center gap-3">
                <HamburgerSvg />
                <p className="text-sm font-semibold">All Categories</p>
              </div>
              <div>
                <DownArrowSvg dark={true} />
              </div>
            </button>
            <div
              onMouseEnter={() => setShowCategory(true)}
              onMouseLeave={() => setShowCategory(false)}
              className={`bg-white p-6 rounded-3xl absolute w-full shadow-lg transition-all duration-500
                ${
                  showCategory
                    ? 'z-10 translate-y-3 opacity-100 transition-all duration-500'
                    : '-z-10 translate-y-6 opacity-0 transition-all duration-500'
                }
                `}
            >
              <ul className="space-y-4">
                {categories?.map((category, index) => (
                  <li key={category?.title} className="cursor-pointer w-full">
                    <Link onClick={()=>setShowCategory(false)}
                      className="block hover:font-bold transition-all duration-300"
                      // to={category?.path}
                      to='/category'
                    >
                      {category?.title}
                      {index < categories.length - 1 && (
                        <div className="h-[0.5px] w-full bg-[#E5E5E5] mt-3" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <ul className="flex items-center gap-8">
            {navLinks?.map((link) => (
              <li key={link?.title}>
                <NavLink to={link?.path} className="flex items-center gap-1">
                  {link?.title}
                  {link?.path === '/more' ? <DownArrowSvg dark={true} /> : ''}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
