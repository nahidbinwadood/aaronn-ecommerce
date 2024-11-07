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
  const welcomeDeals = [
    {
      img: 'https://i.postimg.cc/QdhqH3SH/bottle.avif',
      discount: 70,
    },
    {
      img: 'https://i.postimg.cc/rwwtBFQC/glass.avif',
      discount: 80,
    },
    {
      img: 'https://i.postimg.cc/63yctfcc/watch.avif',
      discount: 50,
    },
    {
      img: 'https://assets.lummi.ai/assets/QmNraz99nRmGZhXW11eLZhySjqq2b5DXFLwhwVXJR8NEio?auto=format&w=1500',
      discount: 30,
    },
    {
      img: 'https://i.postimg.cc/QdhqH3SH/bottle.avif',
      discount: 70,
    },
    {
      img: 'https://i.postimg.cc/rwwtBFQC/glass.avif',
      discount: 80,
    },
    {
      img: 'https://i.postimg.cc/63yctfcc/watch.avif',
      discount: 50,
    },
    {
      img: 'https://assets.lummi.ai/assets/QmNraz99nRmGZhXW11eLZhySjqq2b5DXFLwhwVXJR8NEio?auto=format&w=1500',
      discount: 30,
    },
  ];
  const choiceContents = {
    title: 'Choice',
    description: ['Free shipping', 'Free Delivery'],
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
    <section className="mt-5 container mx-auto px-5 md:px-7 2xl:px-0 ">
      <div className="flex gap-5 flex-col">
        <div className=" bg-[#FD384F] rounded-3xl p-5 md:p-7 flex-grow-0">
          <div className=" text-center text-white">
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-2 md:mb-3 font-medium">
              Welcome deals
            </h1>
            <p className="md:text-lg">Your Exclusive Price</p>
          </div>

          <Swiper
            loop={true}
            slidesPerView={5}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            modules={[Pagination, Navigation, Autoplay]}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 }, // Small screens
              640: { slidesPerView: 1, spaceBetween: 20 }, // Medium screens
              768: { slidesPerView: 1, spaceBetween: 20 }, // Tablet screens
              1024: { slidesPerView: 2, spaceBetween: 30 }, // Large screens
              1280: { slidesPerView: 4, spaceBetween: 30 }, // Extra-large screens
            }}
            className="mySwiper relative rounded-md lg:rounded-2xl mt-5"
          >
            {welcomeDeals?.map((item,idx) => (
              <SwiperSlide key={idx}>
                <Link to='/welcome-deals' className="h-[220px] lg:h-[300px] relative block">
                  <img
                    className=" w-full h-full rounded-2xl object-cover"
                    src={item?.img}
                    alt=""
                  />
                  <div className="absolute bottom-5 right-5 md:bottom-6 md:right-8 lg:bottom-8 lg:right-10">
                    <div className="relative">
                      <StarSvg />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold  text-sm ml-[2px] mt-[1px]">
                        <p>{item?.discount}%</p>
                        <p>Off</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div className="lg:w-1/2 w-full">
            <BannerCardContainer
              choice={true}
              choiceContents={choiceContents}
            />
          </div>
          <div className="lg:w-1/2 lg:pr-6 w-full">
            <BannerCardContainer choice={false} choiceContents={weeklyDeals} />
          </div>
        </div>
      </div>

      <div className="w-full mt-6 md:mt-8 lg:mt-10 bg-[#E9EBF8] rounded-2xl sm:rounded-3xl px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-5 lg:py-8 flex flex-col lg:flex-row items-center gap-6 sm:gap-8 md:gap-10 lg:gap-12">
        <div className="flex flex-col items-start text-center lg:text-left lg:w-1/3">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold pb-4 sm:pb-6">
            Big Save
          </h3>
          <p className="text-[#191919] text-sm sm:text-base md:text-lg pb-2 sm:pb-4">
            The best value items for you
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
