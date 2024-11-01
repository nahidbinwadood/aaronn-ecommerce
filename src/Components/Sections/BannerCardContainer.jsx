/* eslint-disable react/prop-types */
import HeroCard from '../Cards/HeroCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { YellowTickSvg } from '../Svg Container/SvgContainer';

const BannerCardContainer = ({ choice, choiceContents }) => {
  const { title, description, cards } = choiceContents;

  return (
    <div
      className={`h-1/2 w-full ${
        choice ? 'bg-[#FDF9D4]' : 'bg-[#FFEADF]'
      } rounded-3xl px-6 py-4`}
    >
      <div className="flex items-center gap-2">
        <YellowTickSvg />
        <h2 className="text-3xl font-semibold">{title}</h2>
      </div>
      {choice ? (
        <div className="pt-2 flex items-center gap-3 ">
          <p>{description?.[0]} </p>
          <div className="h-3 w-[1px] bg-black" />
          <p>{description?.[1]} </p>
        </div>
      ) : (
        <div className="pt-4 flex items-center gap-3 ">
          <p>{description} </p>
        </div>
      )}
      <div className="pt-4">
        <Swiper
          loop={true}
          slidesPerView={5}
          autoplay={{
            delay: choice ? 2500 : 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper relative rounded-2xl"
        >
          {cards.map((item, idx) => (
            <SwiperSlide key={idx}>
              <HeroCard card={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BannerCardContainer;
