import {
  CartFullSvg,
  HeartRedSvg,
  HeartSvg,
  MinusSvg,
  PlusSvg,
  YellowStarSvg,
} from '@/Components/Svg Container/SvgContainer';
import { useState } from 'react';

const ProductDetails = () => {
  const [wished, setWished] = useState(false);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(88.0);
  const [prevPrice, setPrevPrice] = useState(210.7);

  //   functions:

  const handleIncreaseCount = () => {
    setCount(count + 1);
    setPrice(price + count * 88);
    setPrevPrice(prevPrice + count * 210.7);
  };
  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrice(price - 88);
      setPrevPrice(prevPrice - 210.7);
    }
  };
  return (
    <section className="my-16 container mx-auto">
      <div className="flex gap-16">
        <div className="w-1/2">
          <img
            className="rounded-2xl w-full h-full object-cover"
            src="https://i.imgur.com/yK7SZMY.png"
            alt=""
          />
        </div>
        <div className="w-1/2">
          <div>
            <h2 className="text-2xl font-semibold  pb-6">
              Air Wave Mattress Cool Sleep Supportive and Pressure Relief Air
              Wrapped Coils Comforthable Mattress Topper Affordable Queen&SS
            </h2>
            <div className="flex items-center ">
              <span className="text-3xl font-semibold pr-2">
                ${price.toFixed(2)}
              </span>
              <span className="text-[#5A5C5F] line-through">
                ${prevPrice.toFixed(2)}
              </span>
            </div>

            {/* review */}
            <div>
              <div className="mt-2 flex items-center gap-5">
                <div className="flex items-center gap-1">
                  <YellowStarSvg />
                  <YellowStarSvg />
                  <YellowStarSvg />
                  <YellowStarSvg />
                  <YellowStarSvg />
                </div>
                <div>
                  <p>
                    <span className="font-semibold mr-2">4.9</span> 74 Reviews
                  </p>
                </div>
              </div>

              <div className="mt-10 space-y-6">
                <div className="flex gap-3">
                  <div className="size-3 mt-[6px] rounded-full bg-[#868686]" />
                  <p className="text-[#868686] w-4/5">
                    Meet Echo Dot - Our most compact smart speaker that fits
                    perfectly into small spaces.
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="size-3 mt-[6px] rounded-full bg-[#868686]" />
                  <p className="text-[#868686] w-4/5">
                    Add rich bass to your music experience. Echo Sub delivers
                    down-firing, 100W deep bass sound through a 6” woofer. When
                    paired with Echo Studio, you can feel the music as it fills
                    the room
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {/* size */}
              <div className="mt-12 flex items-center gap-3">
                <h4 className="text-blackColor text-lg font-semibold">Size:</h4>
                <div className="flex items-center gap-4">
                  <p className="px-4 py-2 border border-[#E5E5E5] rounded-md cursor-pointer">
                    110*120 cm
                  </p>
                  <p className="px-4 py-2 border border-[#E5E5E5] rounded-md cursor-pointer">
                    150*200 cm
                  </p>
                </div>
              </div>

              {/* colors */}
              <div className="flex items-center gap-3">
                <h4 className="text-blackColor text-lg font-semibold">
                  Colors:
                </h4>
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-[#686463] cursor-pointer" />
                  <div className="size-8 rounded-full bg-[#618BF7] cursor-pointer" />
                  <div className="size-8 rounded-full bg-[#59C3C0] cursor-pointer" />
                  <div className="size-8 rounded-full bg-[#D3BBF3] cursor-pointer" />
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <h4 className="text-blackColor text-lg font-semibold">
                  Quantity:
                </h4>

                <div className="flex items-center gap-3">
                  <button
                    onClick={handleIncreaseCount}
                    className="size-12 flex items-center justify-center rounded-lg bg-[#E5E5E5]"
                  >
                    <PlusSvg />
                  </button>
                  <button className="text-lg font-semibold size-12 flex items-center justify-center rounded-lg border border-[#E5E5E5]">
                    <span>{count}</span>
                  </button>
                  <button
                    disabled={count < 1} // Disable button when count is less than 1
                    onClick={handleDecreaseCount}
                    className={`size-12 flex items-center justify-center rounded-lg bg-[#E5E5E5] ${
                      count < 2 ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                  >
                    <MinusSvg />
                  </button>
                </div>
              </div>

              {/* add to cart */}
              <div className="flex items-center gap-5">
                <button className="bg-[#191919] px-8 py-3 rounded-full text-white flex items-center justify-center gap-3">
                  <CartFullSvg />
                  Add To Cart
                </button>

                <button
                  onClick={() => setWished(!wished)}
                  className="border border-[#191919] p-3 rounded-full"
                >
                  {!wished ? <HeartSvg /> : <HeartRedSvg />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;