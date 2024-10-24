import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Star } from 'lucide-react';
import SliderNavButtons from './Sliders/SliderNavButtons';

const TestimonialSlider = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Emmett Torphy',
      image:
        'https://s3-alpha-sig.figma.com/img/46e6/195c/0a37263a9ae1b0716c61b3f01b72a5e7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9bRo3kicN5F4SuTCh0-c5ekwoX7Zhg5eMYW5ydes3HtUAf0AFK5KQOrINg~m8DSScKtfwT24cNjCZQiZep3sBiTYshjxTEtUzc2celNNug4b7kWUph6zmVBuRLfyFNMujeNqWarJxw7~jD1SmqfooYSwTKW27N8D9C8n0QbJPq9N6TD68TU1~4FRFUVjt51I0tuXIPnTUw0QW4dLXBnXOQYfnfaioD5o7TZVMqAUnC8RmhxrwAwI090nc50f8f9JV93567A2n5aeJ2yUK4Y1ppgRZyV4ZKBGiVrAjNr~fSOVmKhXURNzge-z97CLj1R1xL~hpnguxv0mGejRvviCw__',
      role: 'Direct Operations Producer',
      text: "Our mission is to leave every customer with a memorable experience. We strive to not be like other contractors and provide an exceptional pressure washing service. Over the years our strongest form of advertisement has been word of mouth, and that's why we will like our countless happy customers speak for the quality of our pressure washing services!",
      rating: 5,
    },
    {
      id: 2,
      image:
        'https://s3-alpha-sig.figma.com/img/46e6/195c/0a37263a9ae1b0716c61b3f01b72a5e7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9bRo3kicN5F4SuTCh0-c5ekwoX7Zhg5eMYW5ydes3HtUAf0AFK5KQOrINg~m8DSScKtfwT24cNjCZQiZep3sBiTYshjxTEtUzc2celNNug4b7kWUph6zmVBuRLfyFNMujeNqWarJxw7~jD1SmqfooYSwTKW27N8D9C8n0QbJPq9N6TD68TU1~4FRFUVjt51I0tuXIPnTUw0QW4dLXBnXOQYfnfaioD5o7TZVMqAUnC8RmhxrwAwI090nc50f8f9JV93567A2n5aeJ2yUK4Y1ppgRZyV4ZKBGiVrAjNr~fSOVmKhXURNzge-z97CLj1R1xL~hpnguxv0mGejRvviCw__',
      name: 'Emmett Torphy',
      role: 'Direct Operations Producer',
      text: "Our mission is to leave every customer with a memorable experience. We strive to not be like other contractors and provide an exceptional pressure washing service. Over the years our strongest form of advertisement has been word of mouth, and that's why we will like our countless happy customers speak for the quality of our pressure washing services!",
      rating: 5,
    },
    {
      id: 3,
      image:
        'https://s3-alpha-sig.figma.com/img/46e6/195c/0a37263a9ae1b0716c61b3f01b72a5e7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9bRo3kicN5F4SuTCh0-c5ekwoX7Zhg5eMYW5ydes3HtUAf0AFK5KQOrINg~m8DSScKtfwT24cNjCZQiZep3sBiTYshjxTEtUzc2celNNug4b7kWUph6zmVBuRLfyFNMujeNqWarJxw7~jD1SmqfooYSwTKW27N8D9C8n0QbJPq9N6TD68TU1~4FRFUVjt51I0tuXIPnTUw0QW4dLXBnXOQYfnfaioD5o7TZVMqAUnC8RmhxrwAwI090nc50f8f9JV93567A2n5aeJ2yUK4Y1ppgRZyV4ZKBGiVrAjNr~fSOVmKhXURNzge-z97CLj1R1xL~hpnguxv0mGejRvviCw__',
      name: 'Emmett Torphy',
      role: 'Direct Operations Producer',
      text: "Our mission is to leave every customer with a memorable experience. We strive to not be like other contractors and provide an exceptional pressure washing service. Over the years our strongest form of advertisement has been word of mouth, and that's why we will like our countless happy customers speak for the quality of our pressure washing services!",
      rating: 5,
    },
  ];

  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="relative overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold pb-16">Customer Reviews </h2>
        </div>

        {/* nav btns */}
        <div>
          <SliderNavButtons />
        </div>
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
