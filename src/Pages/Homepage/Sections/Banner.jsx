import ItemCard from '@/Components/Cards/ItemCard';
import BannerCardContainer from '@/Components/Sections/BannerCardContainer';
import {
  RightArrowSvg,
  StarSvg,
} from '@/Components/Svg Container/SvgContainer';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const Banner = () => {
  const choiceContents = {
    title: 'Choice',
    description: ['Free shipping', '12 Days Delivery'],
    cards: [
      {
        image: 'https://i.imgur.com/lppskWx.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/sxIbFeu.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/lppskWx.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/sxIbFeu.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/lppskWx.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/sxIbFeu.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
    ],
  };
  const weeklyDeals = {
    title: 'Weekly Deals',
    description: 'Low Prices in 30 days',
    cards: [
      {
        image: 'https://i.imgur.com/S9Uj3Z1.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/S9Uj3Z1.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/2L9hNQv.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/2L9hNQv.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/usbecei.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/S9Uj3Z1.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/S9Uj3Z1.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/2L9hNQv.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/2L9hNQv.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/usbecei.png',
        price: '196.34',
        previousPrice: '330.69',
      },
    ],
  };
  const bulkContents = [
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
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
      image: 'https://i.imgur.com/ia0QnBP.png',
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
  ];
  return (
    <section className="mt-5 lg:mt-10 container mx-auto px-5">
      <div className="flex gap-6 flex-col lg:flex-row">
        <Link
          to="/welcome-deals"
          className="lg:w-[40%] bg-[#FD384F] rounded-3xl p-5 md:p-7 xl:p-8 flex-grow-0"
        >
          <div className=" text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 font-medium">
              Welcome deals
            </h1>
            <p className="md:text-lg">Your Exclusive Price</p>
          </div>
          <div className="mt-5 lg:mt-8">
            <div className="h-[220px] lg:h-[400px] relative">
              <img
                className=" w-full h-full rounded-2xl object-cover"
                src="https://assets.lummi.ai/assets/QmNraz99nRmGZhXW11eLZhySjqq2b5DXFLwhwVXJR8NEio?auto=format&w=1500"
                alt=""
              />
              <div className="absolute bottom-5 right-5 md:bottom-6 md:right-8 lg:bottom-8 lg:right-10">
                <div className="relative">
                  <StarSvg />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold  text-sm md:text-base lg:text-xl">
                    <p>70%</p>
                    <p>Off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="lg:w-[60%] flex flex-col gap-6">
          <BannerCardContainer choice={true} choiceContents={choiceContents} />
          <BannerCardContainer choice={false} choiceContents={weeklyDeals} />
        </div>
      </div>

      <div className="w-full mt-6 md:mt-8 lg:mt-10 bg-[#E9EBF8] rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 lg:py-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col items-start text-center lg:text-left lg:w-1/3">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-4 sm:pb-6">
            Buy In Bulk
          </h3>
          <p className="text-[#191919] text-sm sm:text-base md:text-lg pb-2 sm:pb-4">
            Wholesale best value items for you
          </p>
          <Link
            to="/"
            className="text-xs sm:text-sm text-[#0451E0] pb-1 sm:pb-2"
          >
            Get exclusive lower price
          </Link>
          <Link to="/" className="text-xs sm:text-sm text-[#0451E0]">
            Source items easier
          </Link>

          <Link
            to="/buy-bulk"
            className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D6D8F4] mt-4 sm:mt-6 rounded-full flex items-center justify-center"
          >
            <RightArrowSvg />
          </Link>
        </div>
        <div className="lg:w-[80%] w-full">
          <Swiper
            loop={true}
            slidesPerView={4}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
              640: { slidesPerView: 2, spaceBetween: 20 }, // Medium screens
              768: { slidesPerView: 3, spaceBetween: 20 }, // Tablet screens
              1024: { slidesPerView: 4, spaceBetween: 30 }, // Large screens
            }}
            className="mySwiper relative rounded-md lg:rounded-2xl"
          >
            {bulkContents.map((item, idx) => (
              <SwiperSlide key={idx}>
                <ItemCard banner={true} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Banner;
