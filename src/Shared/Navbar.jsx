import {
  CartSvg,
  DownArrowSvg,
  HamburgerSvg,
  PersonSvg,
  SearchSvg,
} from '@/Components/Svg Container/SvgContainer';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

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

const lastCategory = categories[categories.length - 1];
console.log(lastCategory);
const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);
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
              <div className="flex items-center gap-2">
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
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer">
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
              onMouseEnter={() => setShowCategory(!showCategory)}
              onMouseLeave={() => setShowCategory(!showCategory)}
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
              className={`bg-white p-6 rounded-3xl absolute w-full shadow-lg transition-all duration-500
                ${
                  showCategory
                    ? 'z-10 translate-y-3 opacity-100'
                    : '-z-10 translate-y-6 opacity-0'
                }
                `}
            >
              <ul
                onMouseEnter={() => setShowCategory(!showCategory)}
                onMouseLeave={() => setShowCategory(!showCategory)}
                className="space-y-4"
              >
                {categories?.map((category, index) => (
                  <li key={category?.title} className="cursor-pointer w-full">
                    <Link
                      className="block hover:font-bold transition-all duration-300"
                      to={category?.path}
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
