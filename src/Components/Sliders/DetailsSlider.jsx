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

  console.log(setSwiperRef);

  // Images and Video array for easier maintenance
  const media = [
    'https://videos.pexels.com/video-files/4154241/4154241-uhd_2732_1440_25fps.mp4', // Video URL
    'https://i.postimg.cc/pdJByqZW/product-1.jpg',
    'https://i.postimg.cc/3RrFGmSg/product-2.jpg',
    'https://i.postimg.cc/Jr86mBq7/product-3.jpg',
    'https://i.postimg.cc/zfrjJ9T2/product-4.jpg',
    'https://i.postimg.cc/9f1WmwD4/product-5.jpg',
    'https://i.postimg.cc/xTbTvd47/product-6.jpg',
    'https://i.postimg.cc/g2Vz7TdH/product-7.jpg',
    'https://i.postimg.cc/JzV7PLwh/product-8.jpg',
    'https://i.postimg.cc/ZqJbzx5t/product-9.jpg',
    'https://i.postimg.cc/L4W8gPNL/product-10.jpg',
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
        {media.map((item, index) => (
          <SwiperSlide key={`main-${index}`}>
            <div className="h-[400px]">
              {item.endsWith('.mp4') ? (
                // Video element
                <video
                  src={item}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                // Image element
                <img
                  src={item}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              )}
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
            {media.map((item, index) => (
              <SwiperSlide key={`thumb-${index}`}>
                <div className="cursor-pointer h-20">
                  {item.endsWith('.mp4') ? (
                    <video
                      src={item}
                      className="w-full h-full object-cover rounded transition-all duration-300 hover:opacity-100"
                      loading="lazy"
                    />
                  ) : (
                    <img
                      src={item}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover rounded transition-all duration-300 hover:opacity-100"
                      loading="lazy"
                    />
                  )}
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
