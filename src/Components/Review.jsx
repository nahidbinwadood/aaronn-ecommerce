import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';
import {
  LeftArrowReviewSvg,
  RightArrowReviewSvg,
} from './Svg Container/SvgContainer';
import { useState } from 'react';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Emmett Torphy',
      image:
        'https://i.postimg.cc/bNgxX8v9/girl.avif',
      role: 'Direct Operations Producer',
      text: "Our mission is to leave every customer with a memorable experience. We strive to not be like other contractors and provide an exceptional pressure washing service. Over the years our strongest form of advertisement has been word of mouth, and that's why we will like our countless happy customers speak for the quality of our pressure washing services!",
      rating: 5,
    },
    {
      id: 2,
      image:
        'https://i.postimg.cc/bNgxX8v9/girl.avif',
      name: 'Emmett Torphy',
      role: 'Direct Operations Producer',
      text: "Our mission is to leave every customer with a memorable experience. We strive to not be like other contractors and provide an exceptional pressure washing service. Over the years our strongest form of advertisement has been word of mouth, and that's why we will like our countless happy customers speak for the quality of our pressure washing services!",
      rating: 5,
    },
    {
      id: 3,
      image:
        'https://i.postimg.cc/PddySVqM/bnoy.avif',
      name: 'Emmett Torphy',
      role: 'Direct Operations Producer',
      text: "Our mission is to leave every customer with a memorable experience. We strive to not be like other contractors and provide an exceptional pressure washing service. Over the years our strongest form of advertisement has been word of mouth, and that's why we will like our countless happy customers speak for the quality of our pressure washing services!",
      rating: 5,
    },
    {
      id: 4,
      name: 'Emmett Torphy',
      image:
        'https://i.postimg.cc/bNgxX8v9/girl.avif',
      role: 'Direct Operations Producer',
      text: "Our mission is to leave every customer with a memorable experience. We strive to not be like other contractors and provide an exceptional pressure washing service. Over the years our strongest form of advertisement has been word of mouth, and that's why we will like our countless happy customers speak for the quality of our pressure washing services!",
      rating: 5,
    },
    {
      id: 5,
      image:
        'https://i.postimg.cc/PddySVqM/bnoy.avif',
      name: 'Emmett Torphy',
      role: 'Direct Operations Producer',
      text: "Our mission is to leave every customer with a memorable experience. We strive to not be like other contractors and provide an exceptional pressure washing service. Over the years our strongest form of advertisement has been word of mouth, and that's why we will like our countless happy customers speak for the quality of our pressure washing services!",
      rating: 5,
    },
    {
      id: 6,
      image:
        'https://i.postimg.cc/bNgxX8v9/girl.avif',
      name: 'Emmett Torphy',
      role: 'Direct Operations Producer',
      text: "Our mission is to leave every customer with a memorable experience. We strive to not be like other contractors and provide an exceptional pressure washing service. Over the years our strongest form of advertisement has been word of mouth, and that's why we will like our countless happy customers speak for the quality of our pressure washing services!",
      rating: 5,
    },
  ];

  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between pl-10">
        <div className="flex items-center justify-between w-full pb-16">
          <h2 className="text-2xl font-semibold ">Customer Reviews </h2>
          <div className="flex items-center gap-3">
            <div
              onClick={() => swiperRef.slidePrev()}
              className="border border-[#F9E106] rounded p-3 bg-[#F9E106] cursor-pointer hover:bg-white transition duration-500"
            >
              <LeftArrowReviewSvg />
            </div>
            <div
              onClick={() => swiperRef.slideNext()}
              className="border border-[#F9E106] rounded p-3 bg-[#F9E106] cursor-pointer hover:bg-white transition duration-500"
            >
              <RightArrowReviewSvg />
            </div>
          </div>
        </div>

        {/* nav btns */}
        <div>{/* <SliderNavButtons /> */}</div>
      </div>
      <Swiper
        loop={true}
        speed={800}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        slidesPerView="auto"
        centeredSlides={true}
        initialSlide={1}
        onSwiper={setSwiperRef}
        spaceBetween={30}
        watchSlidesProgress={true}
        slideToClickedSlide={true}
        modules={[Navigation, Autoplay]}
        className="py-12"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <SwiperSlide key={`${testimonial.id}-${index}`}>
            {({ isActive }) => (
              <div
                className={`transition-all duration-300 rounded-xl ${
                  isActive
                    ? 'scale-100 opacity-100 shadow-lg overflow-hidden'
                    : 'scale-[0.88] opacity-60 overflow-hidden'
                }`}
              >
                <div className="bg-white p-8 rounded-xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="size-14 bg-gray-100 overflow-hidden rounded-full">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    {testimonial.text}
                  </p>

                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star
                        key={index}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
