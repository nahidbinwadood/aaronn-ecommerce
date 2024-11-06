import ItemCard from '@/Components/Cards/ItemCard';
import ItemCardListView from '@/Components/Cards/ItemCardListView';
import Filters from '@/Components/Filters/Filters';
import { useState } from 'react';
import Services from '../Homepage/Sections/Services';
const allProducts = [
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.33,
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
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
];
const GiftCards = () => {
  const [activeView, setActiveView] = useState('gallery');
  const [filter, setFilter] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [sort, setSort] = useState('');
  const [showSort, setShowSort] = useState(false);

  const handleFiltersClick = (option) => {
    setFilter(option);
    setShowFilters(false);
  };

  const handleSortClick = (option) => {
    setSort(option);
    setShowSort(false);
  };

  return (
    <div className="container mx-auto">
      {/* title */}
      <div className="mt-16">
        <h2 className="text-4xl font-semibold">Gift Cards</h2>
      </div>

      {/* filters */}

      <Filters
        setShowSort={setShowSort}
        setShowFilters={setShowFilters}
        sort={sort}
        filter={filter}
        showSort={showSort}
        showFilters={showFilters}
        handleSortClick={handleSortClick}
        handleFiltersClick={handleFiltersClick}
        setActiveView={setActiveView}
        activeView={activeView}
      />

      <div>
        <section className="container mx-auto">
          {activeView == 'gallery' && (
            <div className="mt-20 grid grid-cols-6 gap-8">
              {allProducts?.map((item, idx) => (
                <ItemCard key={idx} item={item} />
              ))}
            </div>
          )}

          {activeView == 'list' && (
            <div className="mt-20 grid grid-cols-1 gap-5 ">
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
    </div>
  );
};

export default GiftCards;
