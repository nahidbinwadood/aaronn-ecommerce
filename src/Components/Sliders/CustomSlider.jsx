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
        <div className="!h-[450px] w-full">
          {activeSlide?.src ? (
            // Check if the activeSlide is a video or an image
            activeSlide?.type === 'video' ? (
              <video
                className="h-full w-full object-cover aspect-square rounded-xl"
                autoPlay
                muted
                loop
              >
                <source src={activeSlide?.src} />
              </video>
            ) : (
              <img
                className="h-full w-full object-cover aspect-square rounded-xl"
                src={activeSlide?.src}
                alt="Preview"
              />
            )
          ) : (
            <p>No media available</p>
          )}
        </div>
      </div>

      {/* slider */}
      <div className="flex items-center mt-5 w-full justify-between gap-4">
        <button
          onClick={() => swiperRef?.slidePrev()}
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
              key={index}
              onClick={() => setActiveSlide(item)}
              className={`cursor-pointer ${
                activeSlide?.src === item?.src
                  ? 'border-2 border-secondaryColor'
                  : 'border-2 border-transparent hover:border-secondaryColor'
              } p-2 rounded-md transition-all duration-300`}
            >
              <div>
                {/* Render video or image based on the media type */}
                {item?.type === 'video' ? (
                  <video className="h-full w-full object-cover aspect-square rounded">
                    <source src={item.src} />
                  </video>
                ) : (
                  <img
                    className="h-full w-full object-cover aspect-square rounded"
                    src={item?.src}
                    alt={`Slide ${index}`}
                  />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          onClick={() => swiperRef?.slideNext()}
          className="size-10 bg-[#F6F7FB] group rounded-md p-2 transition duration-300 border border-[#F6F7FB] flex items-center justify-center flex-shrink-0"
        >
          <RightArrowNavSvg isGray={true} />
        </button>
      </div>
    </div>
  );
};

export default CustomSlider;
