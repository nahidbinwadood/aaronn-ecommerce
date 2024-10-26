import {
  CrossSvg,
  EmptyStartSvg,
  FeedBackStarSvg,
} from '@/Components/Svg Container/SvgContainer';

const FeedBackCard = () => {
  return (
    <div className="flex w-full justify-between py-8 border-b border-[#C5C5C5] gap-20">
      <div className="flex gap-7 w-[70%]">
        <div className="size-[200px]">
          <img
            className="h-full w-full object-cover rounded-[24px]"
            src="https://i.postimg.cc/sX3nGJZT/bed.png"
            alt=""
          />
        </div>
        <div className="w-[70%]">
          <div>
            <h4 className="text-xl font-semibold">
              Air Wave Mattress Cool Sleep Supportive and Pressure Relief Air
              Wrapped Coils Comforthable Mattress Topper Affordable Queen&SS
            </h4>

            {/* price */}
            <div className="mt-5 flex items-center gap-2">
              <p className="text-2xl font-semibold">$88.00</p>

              {/* showing price */}

              <span className="text-[#5A5C5F] text-base line-through">
                $210.70
              </span>

              <span className="text-[#5A5C5F] text-base flex items-center gap-2">
                <CrossSvg /> 1
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30%]">
        <div className="flex items-center gap-2">
          <FeedBackStarSvg />
          <FeedBackStarSvg />
          <FeedBackStarSvg />
          <FeedBackStarSvg />
          <EmptyStartSvg />
        </div>
        <div className='mt-5'>
          <p>The Shoes are very nice. They are very comfortable.</p>
        </div>
      </div>
    </div>
  );
};

export default FeedBackCard;
