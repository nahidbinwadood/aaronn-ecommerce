import { useSwiper } from 'swiper/react';
import { LeftArrowSvg, RightArrowSignSvg } from './../Svg Container/SvgContainer';

const SliderNavButtons = () => {
  const swiper = useSwiper(); // Get the swiper instance from context

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => swiper.slidePrev()} // Call Swiper's previous method
        className="p-3 border border-black rounded-md hover:bg-[#FCEB4D] transition duration-500 hover:border-[#FCEB4D]"
      >
        <LeftArrowSvg />
      </button>
      <button
        onClick={() => swiper.slideNext()} // Call Swiper's next method
        className="p-3 border border-black rounded-md hover:bg-[#FCEB4D] transition duration-500 hover:border-[#FCEB4D]"
      >
        <RightArrowSignSvg />
      </button>
    </div>
  );
};

export default SliderNavButtons;
