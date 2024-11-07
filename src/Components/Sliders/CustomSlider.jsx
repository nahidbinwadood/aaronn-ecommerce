/* eslint-disable react/prop-types */

import { useState } from 'react';
import {
  LeftArrowNavSvg,
  RightArrowNavSvg,
} from '../Svg Container/SvgContainer';
import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

const CustomSlider = ({ media, activeSlide, setActiveSlide }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div>
      {/* preview */}
      <div>
        <div className="h-[450px] w-full">
          <img
            className="h-full w-full object-cover aspect-square rounded-xl"
            src={activeSlide?.src}
            alt=""
          />
        </div>
      </div>

      {/* slider */}
      <div className="flex items-center mt-5 w-full justify-between">
        <button
          onClick={() => swiperRef.slidePrev()}
          className="size-10 bg-[#F6F7FB] group rounded-md p-2 transition duration-300 border border-[#F6F7FB] flex items-center justify-center flex-shrink-0"
        >
          <LeftArrowNavSvg isGray={true} />
        </button>

        <Swiper
          onSwiper={setSwiperRef}
          loop
          slidesPerView={4}
          spaceBetween={20}
          className="product-image-slider"
        >
          {media.map((item, index) => (
            <SwiperSlide
              onSwiper={setSwiperRef}
              key={index}
              onClick={() => setActiveSlide(item)}
              className={`cursor-pointer ${
                activeSlide.src === item.src
                  ? 'border-2 border-secondaryColor'
                  : 'border-2 border-transparent hover:border-secondaryColor'
              } p-2 rounded-md transition-all duration-300`}
            >
              <img
                className="h-full w-full object-cover aspect-square rounded"
                src={item.src}
                alt={`Slide ${index}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef.slideNext()}
          className="size-10 bg-[#F6F7FB] group rounded-md p-2 transition duration-300 border border-[#F6F7FB] flex items-center justify-center flex-shrink-0"
        >
          <RightArrowNavSvg isGray={true} />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
