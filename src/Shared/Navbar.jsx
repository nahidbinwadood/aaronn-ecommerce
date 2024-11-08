import {
  CartSvg,
  DownArrowSvg,
  HamburgerSvg,
  LocationSvg,
  MessageSvg,
  OrderSvg,
  PersonBlackSvg,
  PersonSvg,
  SearchSvg,
  USAFlagSvg,
  WishlistSvg,
} from '@/Components/Svg Container/SvgContainer';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import NavbarRes from '@/Components/NavbarRes';
import { Modal } from '@/Components/Modals/Modal';
import DeliveryLocationModal from '@/Components/Modals/DeliveryLocationModal';

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
const categories = [
  {
    name: 'Home & Garden',
    subcategories: [
      {
        name: 'Kitchen',
        items: [
          'Mug Thermos',
          'Basket',
          'Waterproof Wall Sticker',
          'Home Brewing & Wine Making',
          'Table Decoration & Accessories',
          'Wok',
        ],
      },
      {
        name: 'Bathroom',
        items: [
          'Towel',
          'Paper Holder',
          'Quick Dry Towel',
          'Hair Towel',
          'Mat',
          'Hand Towel',
        ],
      },
      {
        name: 'Bedroom',
        items: [
          'Boxes',
          'Bags',
          'Decorative Mirrors',
          'Sculptures & Figurines',
          'Photo Albums',
          'Tapestries',
        ],
      },
      {
        name: 'Living Room',
        items: [
          'Painting By Numbers',
          'Hooks',
          'Stickers & Poster',
          'Door Screen',
          'Sculptures & Figurine',
          'Tapestries',
        ],
      },
      {
        name: 'Home Office',
        items: [
          'Fabric & Lace',
          'Needle Arts & Craft',
          'Home Fragrance',
          'Candle Making',
          'Ceramics & Pottery',
          'Diamond Painting',
        ],
      },
      {
        name: 'Bedding Basics',
        items: [
          'Mattress Cover',
          'Cushions',
          'Mosquito Nets',
          'Sheet Sets',
          'Duvets',
          'Bedspreads & Coverlets',
        ],
      },
      {
        name: 'Garden & Balcony',
        items: [
          'Automatic Irrigation Equipment',
          'Garden Water Timers',
          'Garden Buildings',
          'Outdoor Heaters',
          'Garden Pots & Planters',
          'Watering & Irrigation',
        ],
      },
      {
        name: 'Festive & Party Supplies',
        items: [
          'Christmas Supplies',
          'Glow Supplies',
          'Birthday & Balloon',
          'Party Supplies',
          'Artificial Flower',
          'Gift & Gift Bag',
        ],
      },
    ],
  },
  {
    name: 'Hair Extensions & Wigs',
    subcategories: [
      {
        name: 'Hair Extensions',
        items: [
          'Clip-in Extensions',
          'Tape-in Extensions',
          'Weft Extensions',
          'Fusion Extensions',
          'Ponytail Extensions',
        ],
      },
      {
        name: 'Wigs',
        items: [
          'Synthetic Wigs',
          'Human Hair Wigs',
          'Lace Front Wigs',
          'Full Lace Wigs',
          'U-Part Wigs',
        ],
      },
      {
        name: 'Hair Accessories',
        items: [
          'Hair Clips',
          'Hair Combs',
          'Wig Caps',
          'Hair Ties',
          'Headbands',
        ],
      },
    ],
  },
  {
    name: "Men's Clothing",
    subcategories: [
      {
        name: 'Outerwear',
        items: ['Jackets', 'Coats', 'Blazers', 'Sweaters', 'Hoodies'],
      },
      {
        name: 'Bottoms',
        items: ['Jeans', 'Casual Pants', 'Dress Pants', 'Shorts', 'Tracksuits'],
      },
      {
        name: 'Suits',
        items: ['Blazers', 'Dress Shirts', 'Ties', 'Waistcoats', 'Dress Pants'],
      },
    ],
  },
  {
    name: 'Accessories',
    subcategories: [
      {
        name: 'Jewelry',
        items: ['Necklaces', 'Bracelets', 'Earrings', 'Rings', 'Brooches'],
      },
      {
        name: 'Bags',
        items: [
          'Handbags',
          'Backpacks',
          'Messenger Bags',
          'Wallets',
          'Briefcases',
        ],
      },
      {
        name: 'Belts & Suspenders',
        items: ['Leather Belts', 'Fabric Belts', 'Suspenders', 'Belt Buckles'],
      },
    ],
  },
  {
    name: 'Consumer Electronics',
    subcategories: [
      {
        name: 'Mobile Phones',
        items: [
          'Smartphones',
          'Cases & Covers',
          'Screen Protectors',
          'Chargers',
          'Batteries',
        ],
      },
      {
        name: 'Audio & Video',
        items: [
          'Earphones',
          'Speakers',
          'Microphones',
          'MP3 Players',
          'Home Audio',
        ],
      },
      {
        name: 'Computer & Office',
        items: [
          'Laptops',
          'Monitors',
          'Keyboards',
          'Mice',
          'Printers',
          'Scanners',
        ],
      },
    ],
  },
  {
    name: 'Home Improvement & Lighting',
    subcategories: [
      {
        name: 'Lighting',
        items: [
          'Ceiling Lights',
          'LED Strips',
          'Desk Lamps',
          'Wall Lamps',
          'Outdoor Lighting',
        ],
      },
      {
        name: 'Bathroom Fixtures',
        items: [
          'Faucets',
          'Showers',
          'Toilet Accessories',
          'Bathroom Cabinets',
          'Mirrors',
        ],
      },
      {
        name: 'Tools',
        items: ['Power Drills', 'Screwdrivers', 'Wrenches', 'Pliers', 'Saws'],
      },
    ],
  },
  {
    name: 'Home Appliances',
    subcategories: [
      {
        name: 'Kitchen Appliances',
        items: ['Microwaves', 'Ovens', 'Blenders', 'Coffee Makers', 'Toasters'],
      },
      {
        name: 'Cleaning Appliances',
        items: [
          'Vacuum Cleaners',
          'Steam Cleaners',
          'Air Purifiers',
          'Humidifiers',
        ],
      },
      {
        name: 'Personal Care',
        items: [
          'Hair Dryers',
          'Electric Shavers',
          'Massagers',
          'Oral Care',
          'Hair Clippers',
        ],
      },
    ],
  },
  {
    name: 'Automotive & Motorcycle',
    subcategories: [
      {
        name: 'Car Electronics',
        items: ['Dash Cameras', 'Car Alarms', 'Car Chargers', 'GPS Devices'],
      },
      {
        name: 'Motorcycle Gear',
        items: ['Helmets', 'Gloves', 'Riding Jackets', 'Motorcycle Parts'],
      },
      {
        name: 'Car Accessories',
        items: [
          'Seat Covers',
          'Floor Mats',
          'Steering Wheel Covers',
          'Car Covers',
        ],
      },
    ],
  },
  {
    name: 'Luggages & Bags',
    subcategories: [
      {
        name: 'Travel Bags',
        items: ['Suitcases', 'Carry-On Bags', 'Duffel Bags', 'Garment Bags'],
      },
      {
        name: "Women's Bags",
        items: ['Shoulder Bags', 'Crossbody Bags', 'Clutches', 'Mini Bags'],
      },
      {
        name: "Men's Bags",
        items: ['Briefcases', 'Messenger Bags', 'Backpacks', 'Waist Bags'],
      },
    ],
  },
  {
    name: 'Shoes',
    subcategories: [
      {
        name: "Women's Shoes",
        items: ['Heels', 'Flats', 'Sandals', 'Sneakers', 'Boots'],
      },
      {
        name: "Men's Shoes",
        items: ['Loafers', 'Dress Shoes', 'Boots', 'Sneakers', 'Sandals'],
      },
      {
        name: "Kids' Shoes",
        items: ["Boys' Shoes", "Girls' Shoes", 'School Shoes', 'Sports Shoes'],
      },
    ],
  },
  {
    name: 'Special Occasion Costume',
    subcategories: [
      {
        name: 'Halloween Costumes',
        items: ['Costumes for Adults', 'Costumes for Kids', 'Masks', 'Wigs'],
      },
      {
        name: 'Cosplay',
        items: [
          'Anime Cosplay',
          'Movie Cosplay',
          'Fantasy Costumes',
          'Game Characters',
        ],
      },
      { name: 'Accessories', items: ['Hats', 'Wings', 'Props', 'Masks'] },
    ],
  },
  {
    name: "Women's Clothing",
    subcategories: [
      {
        name: 'Dresses',
        items: [
          'Casual Dresses',
          'Evening Dresses',
          'Party Dresses',
          'Maxi Dresses',
        ],
      },
      { name: 'Outerwear', items: ['Coats', 'Jackets', 'Sweaters', 'Blazers'] },
      { name: 'Bottoms', items: ['Skirts', 'Pants', 'Shorts', 'Jeans'] },
    ],
  },
  {
    name: 'Health & Beauty',
    subcategories: [
      {
        name: 'Makeup',
        items: ['Lipstick', 'Foundation', 'Eye Shadow', 'Blush', 'Mascara'],
      },
      {
        name: 'Skin Care',
        items: [
          'Moisturizers',
          'Serums',
          'Sunscreen',
          'Cleansers',
          'Exfoliators',
        ],
      },
      {
        name: 'Hair Care',
        items: [
          'Shampoo',
          'Conditioner',
          'Hair Color',
          'Hair Oil',
          'Hair Styling',
        ],
      },
    ],
  },
  {
    name: 'Toys & Hobbies',
    subcategories: [
      {
        name: 'Toys',
        items: [
          'Action Figures',
          'Dolls',
          'Building Blocks',
          'Puzzles',
          'Remote Control Toys',
        ],
      },
      {
        name: 'Outdoor Play',
        items: [
          'Play Tents',
          'Trampolines',
          'Slides',
          'Swing Sets',
          'Water Toys',
        ],
      },
      {
        name: 'Pet Supplies',
        items: [
          'Pet Beds',
          'Toys for Pets',
          'Leashes',
          'Pet Clothing',
          'Pet Food',
        ],
      },
    ],
  },
  {
    name: 'Sports & Entertainment',
    subcategories: [
      {
        name: 'Fitness Equipment',
        items: [
          'Dumbbells',
          'Treadmills',
          'Exercise Bikes',
          'Resistance Bands',
        ],
      },
      {
        name: 'Sportswear',
        items: ['Sports Bras', 'Running Shoes', 'Athletic Socks', 'Gym Bags'],
      },
      {
        name: 'Outdoor Recreation',
        items: [
          'Camping Gear',
          'Fishing Equipment',
          'Hiking Backpacks',
          'Tents',
        ],
      },
    ],
  },
  {
    name: 'Office & School Supplies',
    subcategories: [
      {
        name: 'Writing Supplies',
        items: ['Pens', 'Pencils', 'Markers', 'Highlighters', 'Erasers'],
      },
      {
        name: 'Organizational Supplies',
        items: ['Binders', 'Folders', 'Labels', 'Desk Organizers'],
      },
      {
        name: 'Art Supplies',
        items: ['Paints', 'Brushes', 'Sketchbooks', 'Easels', 'Canvas'],
      },
    ],
  },
  {
    name: 'Security & Protection',
    subcategories: [
      {
        name: 'Surveillance',
        items: [
          'CCTV Cameras',
          'Smart Door Locks',
          'Alarm Systems',
          'Motion Sensors',
        ],
      },
      {
        name: 'Personal Safety',
        items: [
          'Pepper Spray',
          'Personal Alarms',
          'Self-Defense Tools',
          'Safety Whistles',
        ],
      },
      {
        name: 'Home Safety',
        items: [
          'Smoke Detectors',
          'Carbon Monoxide Detectors',
          'Fire Extinguishers',
        ],
      },
    ],
  },
  {
    name: 'Mother & Kids',
    subcategories: [
      {
        name: 'Baby Clothing',
        items: ['Onesies', 'Rompers', 'Sleepwear', 'Hats', 'Baby Shoes'],
      },
      {
        name: 'Nursing',
        items: [
          'Breast Pumps',
          'Nursing Pads',
          'Bottle Warmers',
          'Sterilizers',
        ],
      },
      {
        name: 'Baby Gear',
        items: ['Strollers', 'Car Seats', 'Playpens', 'Swings'],
      },
    ],
  },
  {
    name: 'Tools',
    subcategories: [
      {
        name: 'Power Tools',
        items: ['Drills', 'Saws', 'Angle Grinders', 'Impact Wrenches'],
      },
      {
        name: 'Hand Tools',
        items: [
          'Hammers',
          'Screwdrivers',
          'Wrenches',
          'Pliers',
          'Measuring Tape',
        ],
      },
      {
        name: 'Garden Tools',
        items: ['Pruners', 'Shovels', 'Rakes', 'Garden Forks', 'Hose Reels'],
      },
    ],
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
    title: 'Watchlist ',
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

const languages=[
  {
    name:"English-US",
    code:"EN"
  },
  {
    name:"español - Es",
    code:"ES"
  },
]
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [showSubCategory, setShowSubCategory] = useState(false);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [showSuggestionsText, setShowSuggestionsText] = useState(false);
  const [showProfileInfo, setShowProfileInfo] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [showLanguage, setShowLanguage] = useState(false);
  const [language,setLanguage]=useState("EN")
  const dropdownRef = useRef(null);
  const profileInfoRef = useRef(null);
  const languageRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    if (search.length > 0) {
      navigate('/search-result');
      setShowSuggestion(false);
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
      if (
        profileInfoRef.current &&
        !profileInfoRef.current.contains(event.target)
      ) {
        setShowProfileInfo(false);
      }

      if (languageRef.current && !languageRef.current.contains(event.target)) {
        setShowLanguage(false);
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
      {/* Modal */}

      <Modal open={open} setOpen={setOpen}>
        <DeliveryLocationModal setOpen={setOpen} />
      </Modal>

      {/* primary navbar */}
      <div className="h-[70px] lg:flex items-center hidden">
        <div className="container mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-7">
            <Link to="/">
              <h3 className="text-xl">Logo Here</h3>
            </Link>

            <div
              onClick={() => setOpen(true)}
              className="flex items-center gap-2 cursor-pointer border border-transparent hover:border-blackColor px-5 py-2 rounded duration-300 transition"
            >
              <div>
                <LocationSvg />
              </div>
              <div>
                <h4 className="text-xs">Deliver To</h4>
                <p className="text-sm">USA</p>
              </div>
            </div>
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
                  className="w-full pl-6 pr-40 py-3 text-black border border-[#191919] rounded-full focus:outline-none placeholder:text-sm text-sm"
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
                    <Link
                      onClick={() => setShowSuggestion(false)}
                      to="/category"
                    >
                      Mattress Topper
                    </Link>
                    <Link
                      onClick={() => setShowSuggestion(false)}
                      to="/category"
                    >
                      Matte Lipstick
                    </Link>
                    <Link
                      onClick={() => setShowSuggestion(false)}
                      to="/category"
                    >
                      Mattress Queen Size
                    </Link>
                    <Link
                      onClick={() => setShowSuggestion(false)}
                      to="/category"
                    >
                      Mattress
                    </Link>
                    <Link
                      onClick={() => setShowSuggestion(false)}
                      to="/category"
                    >
                      Mattress Protector
                    </Link>
                    <Link
                      onClick={() => setShowSuggestion(false)}
                      to="/category"
                    >
                      Mattress Full Size
                    </Link>
                    <Link to="/category">Mattress Cover</Link>
                    <Link
                      onClick={() => setShowSuggestion(false)}
                      to="/category"
                    >
                      Mattress Gloves
                    </Link>
                  </div>
                )}
              </div>
            </form>
          </div>

          <div className="flex items-center gap-6">
            {/* Language */}
            <div className="relative">
              <div
                onClick={() => setShowLanguage(!showLanguage)}
                className="flex items-center gap-2 cursor-pointer font-poppins border border-transparent hover:border-blackColor rounded px-2 transition duration-500"
              >
                <USAFlagSvg />
                <p>{language}</p>
              </div>

              <div
                className={`bg-secondaryColor  p-4 rounded-lg shadow-lg absolute min-w-44 -right-10 ${
                  showLanguage
                    ? 'translate-y-3 opacity-100 transition-transform duration-300 z-10'
                    : 'translate-y-5 opacity-0 transition-transform duration-300 -z-10'
                }`}
              >
                <div ref={languageRef} className="flex flex-col gap-2">

                  {
                    languages.map(lang=>
                      <div key={lang?.name}>
                      <input
                        type="radio"
                        name="language"
                        id={lang?.name}
                        className="peer hidden"
                        checked={language ==lang?.code}
                      />
                      <label
                        onClick={() => {
                          setLanguage(lang.code)
                          setShowLanguage(false)
                        }}
                        htmlFor={lang?.name}
                        className="flex items-center gap-2 cursor-pointer before:content-[''] before:size-4 before:bg-white before:rounded-full peer-checked:before:bg-secondaryColor before:border before:border-white peer-checked:before:border-[4px]"
                      >
                        <span>{lang?.name}</span>
                      </label>
                    </div>
                    )
                  }

                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div
              ref={profileInfoRef}
              onClick={() => setShowProfileInfo(!showProfileInfo)}
              // onMouseEnter={() => setShowProfileInfo(true)}
              // onMouseLeave={() => setShowProfileInfo(false)}
              className="cursor-pointer relative"
            >
              <div
                // onMouseEnter={() => setShowProfileInfo(true)}
                // onMouseLeave={() => setShowProfileInfo(false)}
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
                // onClick={() => setShowProfileInfo(true)}
                // onMouseLeave={() => setShowProfileInfo(false)}
                className={`  p-6 text-black absolute top-5 -right-10
                  ${
                    showProfileInfo
                      ? 'opacity-100 transition-transform duration-500 translate-y-2 z-10'
                      : 'opacity-0 transition-transform duration-500 translate-y-5 -z-10'
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

            {/* Cart */}
            <Link to="/cart" className="flex items-center gap-2 cursor-pointer">
              <div>
                <CartSvg dark={true} />
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
      <div className="bg-blackColor h-[80px] lg:flex items-center hidden">
        <div className="container mx-auto flex items-center  ">
          <div className="relative flex-shrink-0">
            <button
              onMouseEnter={() => setShowCategory(true)}
              onMouseLeave={() => {
                setShowCategory(false);
                setActiveSubCategory(null);
                setShowSubCategory(false);
                setActiveCategory(null);
              }}
              className={`bg-white px-6 py-3 rounded-full w-[275px] flex items-center gap-20 cursor-pointer`}
            >
              <div className="flex items-center gap-3.5">
                <HamburgerSvg />
                <p className="text-sm font-semibold">All Categories</p>
              </div>
              <div>
                <DownArrowSvg dark={true} />
              </div>
            </button>

            {/* categories */}

            <div
              onMouseEnter={() => {
                setShowCategory(true);
              }}
              onMouseLeave={() => {
                setShowSubCategory(false);
                setActiveSubCategory(null);
                setShowCategory(false);
                setActiveCategory(null);
              }}
              className={`bg-white flex p-6 pr-2 ${
                showSubCategory ? 'w-[1000px]' : 'w-[275px]'
              } rounded-3xl absolute shadow-lg transition-all duration-200
    ${
      showCategory
        ? 'z-20 translate-y-0 opacity-100 transition-transform duration-200'
        : '-z-20 translate-y-5 opacity-0 transition-transform duration-200'
    }
  `}
            >
              <ul className="space-y-4 h-[635px] w-[243px] overflow-y-auto discover-more pr-5 flex-shrink-0">
                {categories?.map((category, index) => (
                  <li key={category?.name} className="cursor-pointer w-full">
                    <button
                      // onClick={() => setShowCategory(false)}
                      onMouseEnter={() => {
                        setActiveSubCategory(category);
                        setShowSubCategory(true);
                        setActiveCategory(category.name);
                      }}
                      onMouseLeave={() => {
                        // setActiveSubCategory(null);
                      }}
                      className={` w-full text-start text-sm text-nowrap ${
                        activeCategory === category.name
                          ? 'font-semibold duration-200'
                          : ''
                      }`}
                    >
                      {category?.name}
                      {index < categories.length - 1 && (
                        <div className="h-[0.5px] w-full bg-[#E5E5E5] mt-3" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* subcategory */}
              <div
                onMouseLeave={() => {
                  setShowSubCategory(false);
                  setActiveSubCategory(null);
                  setActiveCategory(null);
                }}
                className="grid grid-cols-4 gap-10 px-8 h-fit"
              >
                {activeSubCategory?.subcategories?.map((subCategory, idx) => (
                  <div key={idx}>
                    <div>
                      <h2 className="font-semibold text-sm">
                        {subCategory?.name}
                      </h2>
                    </div>
                    <div className="mt-4">
                      <ul className="space-y-3  transition-opacity   duration-1000">
                        {subCategory?.items?.map((item) => (
                          <li key={item}>
                            <Link
                              className="text-sm"
                              onClick={() => {
                                setShowSubCategory(false);
                                setShowCategory(false);
                              }}
                              to={
                                activeCategory === 'Home & Garden'
                                  ? '/home-and-garden'
                                  : activeCategory === 'Hair Extensions & Wigs'
                                  ? '/hair-extension'
                                  : '/category' // Default or fallback path
                              }
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* navLinks */}
          <ul className="flex items-center gap-10 flex-1 w-full justify-center">
            {navLinks?.map((link) => (
              <li key={link?.title}>
                <NavLink
                  to={link?.path}
                  className={({ isActive }) =>
                    `flex items-center gap-1 font-medium ${
                      isActive ? 'text-white' : 'text-white/60'
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

      <div className="lg:hidden">
        <NavbarRes />
      </div>
    </div>
  );
};

export default Navbar;
