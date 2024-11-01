import ItemCard from '@/Components/Cards/ItemCard';
import BannerCardContainer from '@/Components/Sections/BannerCardContainer';
import {
  RightArrowSvg,
  StarSvg,
} from '@/Components/Svg Container/SvgContainer';
import { Link } from 'react-router-dom';

const Banner = () => {
  const choiceContents = {
    title: 'Choice',
    description: ['Free shipping', '12 Days Delivery'],
    cards: [
      {
        image: 'https://i.imgur.com/lppskWx.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/sxIbFeu.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/lppskWx.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/sxIbFeu.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/lppskWx.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/sxIbFeu.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/ia0QnBP.png',
        price: '196.34',
        previousPrice: '330.69',
      },
    ],
  };
  const weeklyDeals = {
    title: 'Weekly Deals',
    description: 'Low Prices in 30 days',
    cards: [
      {
        image: 'https://i.imgur.com/S9Uj3Z1.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/S9Uj3Z1.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/2L9hNQv.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/2L9hNQv.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/usbecei.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/S9Uj3Z1.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/S9Uj3Z1.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/2L9hNQv.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/2L9hNQv.png',
        price: '196.34',
        previousPrice: '330.69',
      },
      {
        image: 'https://i.imgur.com/usbecei.png',
        price: '196.34',
        previousPrice: '330.69',
      },
    ],
  };
  const bulkContents = [
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
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
  ];
  return (
    <section className="mt-10 container mx-auto">
      <div className="flex gap-6">
        <Link
          to="/welcome-deals"
          className="w-[40%] bg-[#FD384F] rounded-3xl p-8 flex-grow-0"
        >
          <div className=" text-center text-white">
            <h1 className="text-5xl mb-3 font-medium">Welcome deals</h1>
            <p className="text-lg">Your Exclusive Price</p>
          </div>
          <div className="mt-8">
            <div className="h-[400px] relative">
              <img
                className=" w-full h-full rounded-2xl object-cover"
                src="https://assets.lummi.ai/assets/QmNraz99nRmGZhXW11eLZhySjqq2b5DXFLwhwVXJR8NEio?auto=format&w=1500"
                alt=""
              />
              <div className="absolute bottom-8 right-10">
                <div className="relative">
                  <StarSvg />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-xl">
                    <p>70%</p>
                    <p>Off</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <div className="w-[60%] flex flex-col gap-6">
          <BannerCardContainer choice={true} choiceContents={choiceContents} />
          <BannerCardContainer choice={false} choiceContents={weeklyDeals} />
        </div>
      </div>
      <div className="w-full mt-10 bg-[#E9EBF8] rounded-3xl px-4 py-5 flex items-center gap-12">
        <div className="flex justify-center flex-col ml-12">
          <h3 className="text-4xl font-semibold pb-6">Buy In Bulk</h3>
          <p className="text-[#191919] pb-4">
            Wholesale best value items for you
          </p>
          <Link to="/" className="text-sm text-[#0451E0] pb-2">
            Get exclusive lower price
          </Link>
          <Link to="/" className="text-sm text-[#0451E0]">
            Source items easier
          </Link>

          <Link
            to="/buy-bulk"
            className="size-[50px] bg-[#D6D8F4] mt-6 rounded-full p-4 flex items-center justify-center"
          >
            <RightArrowSvg />
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {bulkContents?.map((item) => (
            <ItemCard key={item?.image} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
