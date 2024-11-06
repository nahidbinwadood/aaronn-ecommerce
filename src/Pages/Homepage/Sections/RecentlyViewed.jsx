import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import ItemCard from '@/Components/Cards/ItemCard';
import {
  LeftArrowNavLightSvg,
  RightArrowNavSvg,
} from '@/Components/Svg Container/SvgContainer';
const allProducts = [
  {
    image: 'https://i.postimg.cc/pdJByqZW/product-1.jpg',
    title: 'Xiaomi Mijia Vacuum Cleaner',
    review: 4,
    price: 163.07,
    previousPrice: 247.92,
  },
  {
    image: 'https://i.postimg.cc/3RrFGmSg/product-2.jpg',
    title: 'Samsung PowerBot Vacuum',
    review: 3,
    price: 240.23,
    previousPrice: 338.37,
  },
  {
    image: 'https://i.postimg.cc/Jr86mBq7/product-3.jpg',
    title: 'Dyson V11 Vacuum Cleaner',
    review: 3,
    price: 165.46,
    previousPrice: 224.45,
  },
  {
    image: 'https://i.postimg.cc/zfrjJ9T2/product-4.jpg',
    title: 'Eufy RoboVac 11S',
    review: 1,
    price: 343.03,
    previousPrice: 400.19,
  },
  {
    image: 'https://i.postimg.cc/9f1WmwD4/product-5.jpg',
    title: 'iRobot Roomba 675',
    review: 4,
    price: 302.69,
    previousPrice: 376.84,
  },
  {
    image: 'https://i.postimg.cc/xTbTvd47/product-6.jpg',
    title: 'Shark Navigator Lift-Away',
    review: 1,
    price: 207.62,
    previousPrice: 303.89,
  },
  {
    image: 'https://i.postimg.cc/g2Vz7TdH/product-7.jpg',
    title: 'Bissell CleanView Vacuum',
    review: 5,
    price: 233.7,
    previousPrice: 308.45,
  },
  {
    image: 'https://i.postimg.cc/JzV7PLwh/product-8.jpg',
    title: 'Hoover WindTunnel',
    review: 1,
    price: 334.78,
    previousPrice: 389.11,
  },
  {
    image: 'https://i.postimg.cc/ZqJbzx5t/product-9.jpg',
    title: 'LG CordZero Vacuum',
    review: 2,
    price: 311.16,
    previousPrice: 367.6,
  },
  {
    image: 'https://i.postimg.cc/L4W8gPNL/product-10.jpg',
    title: 'Ecovacs Deebot N79S',
    review: 1,
    price: 244.7,
    previousPrice: 316.18,
  },
];

const RecentlyViewed = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="my-10 md:my-16 lg:my-20 xl:my-24">
      <div>
        <h3 className="text-2xl md:text-3xl xl:text-4xl font-semibold text-center">
          Recently Reviewed
        </h3>
      </div>
      <div className="mt-8 relative">
        {/* sliders */}
        <div className="container mx-auto py-6 lg:py-10 rounded-2xl px-5 md:px-7 2xl:px-0">
          <Swiper
            loop={true}
            onSwiper={setSwiperRef}
            slidesPerView={6}
            spaceBetween={30}
            modules={[Pagination, Navigation]}
            className="mySwiper relative lg:mb-8 rounded-2xl"
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
              640: { slidesPerView: 2, spaceBetween: 20 }, // Medium screens
              768: { slidesPerView: 3, spaceBetween: 20 }, // Tablet screens
              1280: { slidesPerView: 6, spaceBetween: 30 }, // Extra-large screens
            }}
          >
            {allProducts.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ItemCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Navigation buttons */}
      <div className="w-full flex items-center justify-center gap-5">
        <button
          onClick={() => swiperRef.slidePrev()}
          className="size-10 group hover:bg-blackColor transition duration-300 border border-blackColor flex items-center justify-center"
        >
          <LeftArrowNavLightSvg />
        </button>
        <button
          onClick={() => swiperRef.slideNext()}
          className="size-10 group hover:bg-blackColor transition duration-300 border border-blackColor flex items-center justify-center"
        >
          <RightArrowNavSvg />
        </button>
      </div>
    </section>
  );
};

export default RecentlyViewed;
