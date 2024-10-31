import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import {
  LeftArrowNavSvg,
  RightArrowNavSvg,
} from '../Svg Container/SvgContainer';

export default function DetailsSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [swiperRef, setSwiperRef] = useState(null);

  // Images array for easier maintenance
  const images = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
    'https://swiperjs.com/demos/images/nature-10.jpg',
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      {/* Main Swiper */}
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        loop={true}
        onSwiper={setSwiperRef}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="w-full rounded-lg main-swiper"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`main-${index}`}>
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <div>
        <div className="w-full flex items-center justify-center gap-5">
          <button
            onClick={() => swiperRef.slidePrev()}
            className="size-10 bg-[#F6F7FB] group rounded-md p-2 transition duration-300 border border-[#F6F7FB] flex items-center justify-center flex-shrink-0"
          >
            <LeftArrowNavSvg isGray={true} />
          </button>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={6}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="thumbnail-swiper flex-1"
            breakpoints={{
              // Mobile
              320: {
                slidesPerView: 3,
                spaceBetween: 8,
              },
              // Tablet
              640: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              // Desktop
              1024: {
                slidesPerView: 6,
                spaceBetween: 12,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={`thumb-${index}`}>
                <div className="cursor-pointer">
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-20 object-cover rounded transition-all duration-300 hover:opacity-100"
                    loading="lazy"
                  />
                </div>
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
    </div>
  );
}
