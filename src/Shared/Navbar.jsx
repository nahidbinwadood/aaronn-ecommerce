import {
  CartSvg,
  DownArrowSvg,
  HamburgerSvg,
  MessageSvg,
  OrderSvg,
  PersonBlackSvg,
  PersonSvg,
  SearchSvg,
  WishlistSvg,
} from '@/Components/Svg Container/SvgContainer';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';

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
    title: 'Hair Extension & Wigs',
    path: '/hair-extension',
  },
  {
    title: 'Home & Garden',
    path: '/home-and-garden',
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
    title: 'Motor & parts & accessories ',
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
    path: '/dashboard/orders',
  },
  {
    title: 'Message center',
    logo: <MessageSvg />,
    path: '/dashboard/message-center',
  },
  {
    title: 'Wishlist ',
    logo: <WishlistSvg />,
    path: '/dashboard/wishlist',
  },
];
const profileDashboardLinks = [
  {
    title: 'Settings',
    path: '/dashboard/setting',
  },
  {
    title: 'Help Center',
    path: '/dashboard/help-center',
  },
];
const discoverMore = [
  {
    title: 'Tumbler stainless',
    path: '/categories/tumbler-stainless',
  },
  {
    title: '3 for 99 cents free',
    path: '/categories/3-for-99-cents-free',
  },
  {
    title: 'Playstation 5',
    path: '/categories/playstation',
  },
  {
    title: '99 cents items',
    path: '/categories/99-cents-item',
  },
  {
    title: 'Halloween',
    path: '/categories/halloween',
  },
  {
    title: 'iPhone 14pro max',
    path: '/categories/iphone',
  },
  {
    title: 'Watches',
    path: '/categories/watches',
  },
  {
    title: '99 cents items',
    path: '/categories/99-cents-item',
  },
  {
    title: 'Halloween',
    path: '/categories/halloween',
  },
  {
    title: 'iPhone 14pro max',
    path: '/categories/iphone',
  },
  {
    title: 'Watches',
    path: '/categories/watches',
  },
  {
    title: '99 cents items',
    path: '/categories/99-cents-item',
  },
  {
    title: 'Halloween',
    path: '/categories/halloween',
  },
  {
    title: 'iPhone 14pro max',
    path: '/categories/iphone',
  },
  {
    title: 'Watches',
    path: '/categories/watches',
  },
];
const homeAppliances = [
  {
    image: 'https://i.postimg.cc/rpGfv1Pr/1.png',
    title: 'Air Purifier',
    path: '/category/air-purifier',
  },
  {
    image: 'https://i.postimg.cc/Gmy7jwPz/2.png',
    title: 'Dressers',
    path: '/category/dressers',
  },
  {
    image: 'https://i.postimg.cc/vmwPqq3y/3.png',
    title: 'TV Stands',
    path: '/category/tv-stands',
  },
  {
    image: 'https://i.postimg.cc/PhMGVWh5/4.png',
    title: 'HairDryer',
    path: '/category/hair-dryer',
  },
  {
    image: 'https://i.postimg.cc/7Yct7Yzf/5.png',
    title: 'Iron',
    path: '/category/iron',
  },
  {
    image: 'https://i.postimg.cc/nzkwQ4KJ/6.png',
    title: 'Refrigerators',
    path: '/category/refrigerators',
  },
  {
    image: 'https://i.postimg.cc/cCLk7vT8/7.png',
    title: 'Water Dispenser',
    path: '/category/water-dispenser',
  },
  {
    image: 'https://i.postimg.cc/cCk9Fd5k/8.png',
    title: 'Smart Watches',
    path: '/category/smart-watches',
  },
  {
    image: 'https://i.postimg.cc/nV3PF1cK/9.png',
    title: 'Monitor',
    path: '/category/monitor',
  },
  {
    image: 'https://i.postimg.cc/ZRZMR7dH/10.png',
    title: 'Chargers',
    path: '/category/charger',
  },
];
const Navbar = () => {
  const [showCategory, setShowCategory] = useState(false);
  const [showPriceInfo, setShowPriceInfo] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSuggestionsText, setShowSuggestionsText] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [searchText, setSearchText] = useState('');
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search.length > 0) {
      navigate('/');
    }
  };

  useEffect(() => {
    if (searchText == '' || searchText.length == 0) {
      setShowSuggestionsText(false);
    }

    //
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestion(false);
      }
    };

    // Add event listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchText]);
  return (
    <div className="font-poppins">
      {/* primary navbar */}
      <div className="bg-primaryColor text-white h-[70px] flex items-center">
        <div className="container mx-auto w-full flex items-center justify-between">
          <div>
            <Link to="/">
              <h3 className="text-2xl">Logo Here</h3>
            </Link>
          </div>
          <div>
            <form onSubmit={handleSubmit} action="" className="relative">
              <label htmlFor="search" className="relative block w-[750px]">
                <input
                  onFocus={() => setShowSuggestion(true)}
                  onChange={(e) => {
                    //setShowSuggestion(false)
                    setShowSuggestionsText(true);
                    setSearchText(e.target.value);
                  }}
                  value={searchText}
                  id="search"
                  name="search"
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

              {/* Suggestions in searchBar */}
              <div
                ref={dropdownRef}
                style={{
                  boxShadow:
                    '0px 0px 2px rgba(145, 158, 171, 0.24), -20px 20px 40px -4px rgba(145, 158, 171, 0.24)',
                }}
                className={`absolute transition-transform duration-500 h-[400px] w-full rounded-[24px] bg-white   ${
                  showSuggestion
                    ? 'z-10 translate-y-2 opacity-100  transition-transform duration-500'
                    : '-z-10 translate-y-6 opacity-0 transition-transform duration-500'
                }`}
              >
                {!showSuggestionsText && (
                  <div className="flex text-black p-9 h-full">
                    <div className="w-[25%] overflow-y-scroll discover-more">
                      <div>
                        <h2 className="text-xl font-medium">Discover More</h2>
                      </div>
                      <div>
                        <ul className="mt-6 flex flex-col gap-4">
                          {discoverMore?.map((item, idx) => (
                            <li
                              onClick={() => setShowSuggestion(false)}
                              key={idx}
                            >
                              <Link to={'/category'} className="">
                                {item?.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="w-[75%] pl-7">
                      <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium">Home Appliance </h2>
                        <h2 className="text-lg font-medium">
                          Other Recommendations
                        </h2>
                      </div>
                      <div className="mt-6 grid grid-cols-5 gap-4">
                        {homeAppliances?.map((item, idx) => (
                          <Link
                            onClick={() => setShowSuggestion(false)}
                            to="/category"
                            key={idx}
                          >
                            <div className="size-20">
                              <img
                                className="rounded-xl h-full w-full object-cover"
                                src={item?.image}
                                alt=""
                              />
                            </div>
                            <div className="text-center">
                              <h5 className="text-sm font-medium mt-3">
                                {item?.title}
                              </h5>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {showSuggestionsText && (
                  <div className="flex flex-col justify-evenly text-black px-9 py-6 h-full">
                    <Link to="/category">Mattress Topper</Link>
                    <Link to="/category">Matte Lipstick</Link>
                    <Link to="/category">Mattress Queen Size</Link>
                    <Link to="/category">Mattress</Link>
                    <Link to="/category">Mattress Protector</Link>
                    <Link to="/category">Mattress Full Size</Link>
                    <Link to="/category">Mattress Cover</Link>
                    <Link to="/category">Mattress Gloves</Link>
                  </div>
                )}
              </div>
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
                              Aaron
                            </span>
                          </h4>
                        </div>
                      </div>
                      <Link
                        to="/login"
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
            <Link to="/cart" className="flex items-center gap-2 cursor-pointer">
              <div>
                <CartSvg />
              </div>
              <div>
                <p className="text-xs">0</p>
                <p className="text-sm">Cart</p>
              </div>
            </Link>
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
                    <Link
                      onClick={() => setShowCategory(false)}
                      className="block hover:font-bold duration-200 transition-all"
                      to="/category"
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
                <NavLink
                  to={link?.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 ${
                      isActive ? 'font-semibold' : 'font-normal'
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
    </div>
  );
};

export default Navbar;
