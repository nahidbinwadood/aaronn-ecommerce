import {
  CartBlack,
  DeleteBlackSvg,
  YellowStarSvg,
} from '@/Components/Svg Container/SvgContainer';

const DashboardOverview = () => {
  return (
    <div>
      <div>
        <h2 className="text-[#191919] font-semibold text-3xl pb-8 border-b border-[#C5C5C5]">
          Overview
        </h2>
      </div>
      <div className="mt-6">
        <div>
          <h3 className="font-semibold text-xl">Wishlist</h3>
        </div>
        <div className="mt-5">
          <div className="flex w-full items-center justify-between">
            <div className="flex gap-7 w-4/5">
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
                    Air Wave Mattress Cool Sleep Supportive and Pressure Relief
                    Air Wrapped Coils Comforthable Mattress Topper Affordable
                    Queen&SS
                  </h4>

                  {/* price */}
                  <div className="mt-5 flex items-center gap-2">
                    <p className="text-2xl font-semibold">$88.00</p>
                    <span className="text-[#5A5C5F] text-base line-through">
                      $210.70
                    </span>
                  </div>

                  {/* stars */}
                  <div className="mt-6 flex items-center gap-5">
                    <div className="flex items-center gap-2">
                      <YellowStarSvg />
                      <YellowStarSvg />
                      <YellowStarSvg />
                      <YellowStarSvg />
                      <YellowStarSvg />
                    </div>
                    {/* rating */}
                    <div>
                      <p className="font-semibold ">
                        4.9 <span className="pl-2 font-normal">74 Reviews</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='space-y-8'>
              <button className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border border-[#C5C5C5] group hover:bg-blackColor hover:border-blackColor transition-all duration-500">
                <CartBlack />
                <span className='group-hover:text-white transition duration-500'>Add To Cart</span>
              </button>
              <button className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border border-[#C5C5C5] group hover:bg-blackColor hover:border-blackColor transition-all duration-500">
                <DeleteBlackSvg />
                <span className='group-hover:text-white transition duration-500'>Delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
