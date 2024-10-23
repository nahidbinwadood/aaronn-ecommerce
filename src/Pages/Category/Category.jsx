import ItemCard from '@/Components/Cards/ItemCard';
import Services from '../Homepage/Sections/Services';
import {
  DownArrowSvg,
  RightArrowSvg,
} from '@/Components/Svg Container/SvgContainer';

const Category = () => {
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
  return (
    <section className="container mx-auto">
      {/* filter */}

      <div className="w-full mt-16 flex items-center justify-between">
        <button className="flex items-center gap-2 py-3 px-6 text-[#1B1B1B] rounded-full border border-[#E5E5E5]">
          Price Range <DownArrowSvg dark={true} />
        </button>
        <button className="flex items-center gap-2 py-3 px-6 text-[#1B1B1B] rounded-full border border-[#E5E5E5]">
          Sort by Latest
          <DownArrowSvg dark={true} />
        </button>
      </div>

      <div>
        <section className="container mx-auto">
          <div className="mt-20 grid grid-cols-4 gap-8">
            {allProducts?.map((item, idx) => (
              <ItemCard key={idx} item={item} />
            ))}
          </div>
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

export default Category;
