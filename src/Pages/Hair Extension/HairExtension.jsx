import ItemCard from '@/Components/Cards/ItemCard';
import {
  DownArrowSvg,
  GallerySvg,
  ListSvg,
} from '@/Components/Svg Container/SvgContainer';
import Services from '../Homepage/Sections/Services';
import ItemCardListView from '@/Components/Cards/ItemCardListView';
import { useEffect, useRef, useState } from 'react';
const allProducts = [
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.33,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/SQQlarb.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/SQQlarb.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/SQQlarb.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/SQQlarb.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/SQQlarb.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/SQQlarb.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
];
const HairExtension = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [showSort, setShowSort] = useState(false);
  const [activeView, setActiveView] = useState('gallery');
  const dropdownRef = useRef(null);
  const sortRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowFilters(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target)) {
        setShowSort(false);
      }
    };

    // Add event listener when dropdown is open
    if (showFilters) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showFilters]);
  const handleOptionClick = (option) => {
    // Handle the option selection
    setFilter(option);
    setShowFilters(false);
  };

  const handleSortClick = (option) => {
    setSort(option);
    setShowSort(false);
  };
  return (
    <section className="container mx-auto">
      {/* title */}
      <div className="mt-16">
        <h2 className="text-4xl font-semibold">Hair Extension & Wigs</h2>
      </div>

      {/* filters */}
      <div className="w-full mt-16 flex items-center justify-between">
        {/* filter button */}
        <div ref={dropdownRef} className="relative">
          <button
            onClick={() => setShowFilters(true)}
            className="flex items-center gap-2 py-3 px-6 text-[#1B1B1B] rounded-full border border-[#E5E5E5]"
          >
            {filter ? filter : 'Price Range'} <DownArrowSvg dark={true} />
          </button>

          {/* filter options */}
          <div
            className={`w-full bg-white absolute z-10 mt-2 rounded-[24px] border border-[#E5E5E5] ${
              showFilters
                ? 'opacity-100 transition-all duration-300'
                : 'opacity-0 transition-all duration-300 mt-5'
            }`}
          >
            <div className="flex items-center justify-center flex-col gap-2 py-6">
              <p
                onClick={() => handleOptionClick('Low to High')}
                className="py-2 border-b border-borderColor cursor-pointer"
              >
                Low to High
              </p>
              <p
                onClick={() => handleOptionClick('High to Low')}
                className="py-2 cursor-pointer"
              >
                High to Low
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {/* sort button */}
          <div className="relative" ref={sortRef}>
            <button
              onClick={() => {
                setShowSort(true);
              }}
              className="flex w-48 justify-center items-center gap-4 py-3 px-6 text-[#1B1B1B] rounded-full border border-[#E5E5E5]"
            >
              {sort ? sort : 'Sort by Latest'}
              <DownArrowSvg dark={true} />
            </button>
            {/* filter options */}
            <div
              className={`w-full bg-white absolute z-10 mt-2 rounded-[24px] border border-[#E5E5E5] ${
                showSort
                  ? 'opacity-100 transition-all duration-300'
                  : 'opacity-0 transition-all duration-300 mt-5'
              }`}
            >
              <div className="flex items-center justify-center flex-col gap-2 py-6 px-8">
                <p
                  onClick={() => handleSortClick('Best Selling')}
                  className=" w-full py-2 border-b border-borderColor cursor-pointer"
                >
                  Best Selling
                </p>
                <p
                  onClick={() => handleSortClick('New to old')}
                  className=" w-full py-2 border-b border-borderColor cursor-pointer"
                >
                  New to old
                </p>
                <p
                  onClick={() => handleSortClick('Old to New')}
                  className=" w-full py-2 border-b border-borderColor cursor-pointer"
                >
                  Old to New
                </p>
                <p
                  onClick={() => handleSortClick('A - Z')}
                  className=" w-full py-2 border-b border-borderColor cursor-pointer"
                >
                  A - Z
                </p>
                <p
                  onClick={() => handleSortClick('Z - A')}
                  className=" w-full pt-2 cursor-pointer"
                >
                  Z - A
                </p>
              </div>
            </div>
          </div>

          {/* layout */}

          <div className="flex items-center gap-3">
            <span className="text-lg font-medium">View :</span>
            <div className="flex items-center gap-2 px-6 py-2.5 border border-borderColor rounded-full">
              <div
                onClick={() => setActiveView('gallery')}
                className="flex items-center gap-1 cursor-pointer border-r border-black pr-2"
              >
                {activeView == 'gallery' ? (
                  <>
                    <GallerySvg active={true} />
                    <span className="text-[#FD384F]">Gallery</span>
                  </>
                ) : (
                  <>
                    <GallerySvg />
                    <span>Gallery</span>
                  </>
                )}
              </div>
              <div
                onClick={() => setActiveView('list')}
                className="flex items-center gap-1 cursor-pointer"
              >
                {activeView == 'list' ? (
                  <>
                    <ListSvg active={true} />
                    <span className="text-[#FD384F]">List</span>
                  </>
                ) : (
                  <>
                    <ListSvg />
                    <span>List</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}

      <div>
        <section className="container mx-auto">
          {activeView == 'gallery' && (
            <div className="mt-20 grid grid-cols-4 gap-8">
              {allProducts?.map((item, idx) => (
                <ItemCard key={idx} item={item} />
              ))}
            </div>
          )}

          {activeView == 'list' && (
            <div className="mt-20 grid grid-cols-2 gap-5 ">
              {allProducts?.map((item, idx) => (
                <ItemCardListView key={idx} item={item} />
              ))}
            </div>
          )}
          <div className="w-full flex items-center justify-center pt-20">
            <button className="bg-[#191919] px-8 py-3 rounded-full text-white  ">
              Load More
            </button>
          </div>
        </section>
      </div>
      <Services />
    </section>
  );
};

export default HairExtension;
