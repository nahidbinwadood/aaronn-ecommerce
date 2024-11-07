import ItemCard from '@/Components/Cards/ItemCard';
import ReviewsSlider from '@/Components/Review';
import {
  CartFullSvg,
  HeartRedSvg,
  HeartSvg,
  ListArrowSvg,
  MinusSvg,
  PlusSvg,
  YellowStarSvg,
} from '@/Components/Svg Container/SvgContainer';
// import MyTabs from '@/Components/Tabs';
import ReviewTab from '@/Components/ReviewTab';
import CustomSlider from '@/Components/Sliders/CustomSlider';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { FaShieldAlt, FaShippingFast } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { MdLocalShipping } from 'react-icons/md';
import { PiKeyReturnBold } from 'react-icons/pi';
const allProducts = [
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.33,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.33,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.33,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.33,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.33,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/SQQlarb.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/ia0QnBP.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/SQQlarb.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
  {
    image: 'https://i.imgur.com/LRfGo6D.png',
    title: 'Xiaomi Mijia vacuum Cleaner',
    review: 5,
    price: 196.34,
    previousPrice: 330.69,
  },
];

const media = [
  {
    type: 'image',
    src: 'https://i.postimg.cc/GpQ87R85/black-Shirt.jpg',
    color: 'black',
    colorCode: '#000000',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/43ZHQydc/blue-Shirt.jpg',
    color: 'blue',
    colorCode: '#0000FF',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/BQrKtMfM/redShirt.jpg',
    color: 'red',
    colorCode: '#FF0000',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/DfYs37jV/white-Shirt.jpg',
    color: 'white',
    colorCode: '#FFFFFF',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/hPzmSN6X/gray-Shirt.jpg',
    color: 'gray',
    colorCode: '#808080',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/JzjBXZ1m/green-Shirt.jpg',
    color: 'green',
    colorCode: '#008000',
  },
  {
    type: 'image',
    src: 'https://i.postimg.cc/tJfV3zZR/purple-Shirt.jpg',
    color: 'purple',
    colorCode: '#800080',
  },
];
const ProductDetails = () => {
  const [activeSlide, setActiveSlide] = useState(media[0]);
  const [wished, setWished] = useState(false);
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(88.0);
  const [prevPrice, setPrevPrice] = useState(210.7);

  //   functions:

  const handleIncreaseCount = () => {
    setCount(count + 1);
    setPrice(price + 88);
    setPrevPrice(prevPrice + 210.7);
  };
  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount(count - 1);
      setPrice(price - 88);
      setPrevPrice(prevPrice - 210.7);
    }
  };
  return (
    <section className="mt-16 ">
      <div className="flex gap-10 container mx-auto">
        <div className="w-[40%]">
          {/* <img
            className="rounded-2xl w-full h-full object-cover"
            src="https://i.imgur.com/yK7SZMY.png"
            alt=""
          /> */}
          {/* <DetailsSlider /> */}
          <CustomSlider
            media={media}
            activeSlide={activeSlide}
            setActiveSlide={setActiveSlide}
          />
        </div>
        <div className="w-[35%]">
          <div>
            <h2 className="text-2xl font-semibold  pb-5">
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

              <div className="mt-5 space-y-3">
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

            <div className="space-y-8">
              {/*available  */}
              <p className="mt-6 block">
                <span className="font-medium">This item is available in :</span>{' '}
                United States, Canada and United Kingdom
              </p>

              {/* size */}
              <div className="mt-8 flex items-center gap-3">
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
                  {media?.map((item) => (
                    <div
                      onClick={() => setActiveSlide(item)}
                      key={item?.colorCode}
                      style={{ backgroundColor: item?.colorCode }}
                      className={`size-7 rounded-full shadow-lg cursor-pointer ${
                        item == activeSlide
                          ? 'scale-125 transition-all duration-500'
                          : 'scale-100 transition-all duration-500 '
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <h4 className="text-blackColor text-lg font-semibold">
                  Quantity:
                </h4>

                <div className="flex items-center gap-3">
                  <button
                    disabled={count < 1} // Disable button when count is less than 1
                    onClick={handleDecreaseCount}
                    className={`size-12 flex items-center justify-center rounded-lg bg-[#E5E5E5] ${
                      count < 2 ? 'cursor-not-allowed opacity-50' : ''
                    }`}
                  >
                    <MinusSvg />
                  </button>

                  <button className="text-lg font-medium size-12 flex items-center justify-center rounded-lg border border-[#E5E5E5]">
                    <span>{count}</span>
                  </button>
                  <button
                    onClick={handleIncreaseCount}
                    className="size-12 flex items-center justify-center rounded-lg bg-[#E5E5E5]"
                  >
                    <PlusSvg />
                  </button>
                </div>
              </div>

              {/* add to cart */}
              <div className="flex items-center gap-5">
                <button
                  onClick={() => {
                    toast.success('Product added in cart !!');
                  }}
                  className="bg-[#191919] px-8 py-3 rounded-full text-white flex items-center justify-center gap-3"
                >
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
        <div className="w-[25%] border border-blackColor/60 rounded-md h-fit pb-10">
          <div className="p-5">
            <div className="flex items-center justify-between py-4 border-b border-blackColor/50">
              <h4 className="text-sm">Ship to</h4>
              <div className="flex items-center gap-2">
                <FaLocationDot />
                <span className="text-sm">United States</span>
              </div>
            </div>
            <div className="flex items-center justify-between py-4 border-b border-blackColor/50">
              <h4 className="text-sm">Estimated Delivery</h4>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Nov</span>
                <span className="text-sm">15-20</span>
              </div>
            </div>
          </div>

          {/* Commitments */}
          <div className="mt-2 bg-black text-white py-3 text-center">
            <h2>Our Commitments</h2>
          </div>
          <div className="px-5 mt-5">
            <div className="flex items-center gap-2 text-sm mb-2">
              <FaShippingFast className="size-6 text-[#FF4B26]" />
              <div>
                <h5 className="font-medium">Free Shipping</h5>
              </div>
            </div>

            {/* Fast shipping */}
            <div>
              <div className="flex items-center gap-2 text-sm">
                <MdLocalShipping className="size-6 text-[#FF4B26]" />
                <div>
                  <h5 className="font-medium">Fast Shipping</h5>
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <ListArrowSvg />
                <span className="text-sm text-textLight">
                  Refund if package is lost
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <ListArrowSvg />
                <span className="text-sm text-textLight">
                  Refund if the item is damaged
                </span>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <ListArrowSvg />
                <span className="text-sm text-textLight">
                  Refund if no delivery in 20-30 days
                </span>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm mb-2">
                <PiKeyReturnBold className="size-6 " />
                <div>
                  <h5 className="font-medium">Free returns within 20 Days</h5>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center gap-2 text-sm mb-2">
                <FaShieldAlt className="size-5 " />
                <div>
                  <h5 className="font-medium">Security & Privacy</h5>
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-sm text-textLight gap-2">
                  <h4 className="text-black/90 font-medium inline">
                    Safe Payments :{' '}
                  </h4>
                  <span>
                    We never disclose your personal information to any parties
                    without your consent
                  </span>
                </div>
                <div className="text-textLight text-sm gap-2">
                  <h4 className="inline font-medium text-black/90">
                    Secure Personal Details :{' '}
                  </h4>
                  <span>
                    We protect your privacy and keep data safe and secure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-40 container mx-auto">
        <div>
          <h2 className="text-4xl font-semibold">About This Product</h2>

          {/* tabs */}
          <div className="bg-[#F6F7FB] px-16 py-12 mt-16 rounded-lg">
            <div className="flex items-center gap-5">
              <ReviewTab />
            </div>
          </div>
        </div>
      </div>

      <div className="my-20 container mx-auto">
        <div>
          <h2 className="text-center text-4xl font-semibold">Related Items</h2>
        </div>
        <div className="mt-12 grid grid-cols-6 gap-8">
          {allProducts?.map((item, idx) => (
            <ItemCard key={idx} item={item} />
          ))}
        </div>
      </div>

      <div className="  bg-[#FDF9D4]  ">
        <div className="container mx-auto py-24">
          <div className="pt-10">
            <ReviewsSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
