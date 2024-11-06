/* eslint-disable react/prop-types */
import { useEffect, useRef } from 'react';
import {
  DownArrowSvg,
  GallerySvg,
  ListSvg,
} from '../Svg Container/SvgContainer';

const Filters = ({
  setShowSort,
  setShowFilters,
  sort,
  filter,
  showSort,
  showFilters,
  handleSortClick,
  handleFiltersClick,
  setActiveView,
  activeView,
}) => {
  const sortRef = useRef(null);
  const dropdownRef = useRef(null);

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
    if (showSort) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    // Cleanup event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showFilters, showSort]);

  return (
    <div className='w-full mt-16 flex items-center justify-between'>
      {/* filters */}
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
          className={`w-full bg-white absolute mt-2 rounded-[24px] border border-[#E5E5E5] ${
            showFilters
              ? 'opacity-100 transition-transform duration-500 z-10'
              : 'opacity-0 transition-transform duration-500 mt-5 -z-20'
          }`}
        >
          <div className="flex items-center justify-center flex-col gap-2 py-6">
            <p
              onClick={() => handleFiltersClick('Low to High')}
              className="py-2 border-b border-borderColor cursor-pointer"
            >
              Low to High
            </p>
            <p
              onClick={() => handleFiltersClick('High to Low')}
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
            className={`w-full bg-white absolute mt-2 rounded-[24px] border border-[#E5E5E5] ${
              showSort
                ? 'opacity-100 transition-transform duration-300 z-10'
                : 'opacity-0 transition-transform duration-300 mt-5 -z-10'
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
  );
};

export default Filters;
