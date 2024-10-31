import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import required modules
import { Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import ItemCard from '@/Components/Cards/ItemCard';
import {
  LeftArrowNavSvg,
  RightArrowNavSvg,
} from '@/Components/Svg Container/SvgContainer';

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
const RecentlyViewed = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="my-40 ">
      <div>
        <h3 className="text-4xl font-semibold text-center">
          Recently Reviewed
        </h3>
      </div>
      <div className="mt-12 relative">
        {/* Right Gradient Box */}
        <div
          style={{
            background:
              'linear-gradient(-90deg, #FFEADF 0%, rgba(245, 245, 245, 0.00) 100%)',
          }}
          className="w-[500px] h-full absolute top-0 right-0 -z-10"
        />

        {/* Left Gradient Box */}
        <div
          style={{
            background:
              'linear-gradient(90deg, #FFEADF 0%, rgba(245, 245, 245, 0.00) 100%)',
          }}
          className="w-[500px] h-full absolute top-0 left-0 -z-10"
        />

        {/* sliders */}
        <div className="container mx-auto py-10">
          <Swiper
            onSwiper={setSwiperRef}
            slidesPerView={4}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            className="mySwiper relative mb-16"
          >
            {allProducts.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ItemCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="w-full flex items-center justify-center gap-5">
            <button
              onClick={() => swiperRef.slidePrev()}
              className="size-10 group hover:bg-blackColor transition duration-300 border border-blackColor flex items-center justify-center"
            >
              <LeftArrowNavSvg />
            </button>
            <button
              onClick={() => swiperRef.slideNext()}
              className="size-10 group hover:bg-blackColor transition duration-300 border border-blackColor flex items-center justify-center"
            >
              <RightArrowNavSvg />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentlyViewed;
