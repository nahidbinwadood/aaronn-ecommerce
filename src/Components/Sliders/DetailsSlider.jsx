import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';

export default function DetailsSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={0}
        navigation={true}
        loop={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        <SwiperSlide>
          <img className='w-full' src="https://i.postimg.cc/0yXWJq6V/1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://i.postimg.cc/8CFyRnMN/2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://i.postimg.cc/jjGMZQ4N/4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://i.postimg.cc/1XSJZmT3/3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full' src="https://i.postimg.cc/nzB05j3W/5.png" />
        </SwiperSlide>
      </Swiper>

    </>
  );
}
