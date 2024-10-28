/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { MinusSvg, PlusSvg } from '../Svg Container/SvgContainer';

const CartCard = ({ cart }) => {
  const { image, title, currentPrice, prevPrice } = cart;
  const [count, setCount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(currentPrice);

  // Update total price whenever count changes
  useEffect(() => {
    const calculatedTotal = (currentPrice * count).toFixed(2);
    setTotalPrice(parseFloat(calculatedTotal));
  }, [count, currentPrice]);

  const handleIncreaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecreaseCount = () => {
    setCount(prevCount => prevCount > 1 ? prevCount - 1 : 1);
  };
  return (
    <div className="grid grid-cols-12 mt-8 pb-6 border-b border-borderColor">
      <div className="col-span-6">
        <div className="flex items-center justify-center gap-5 ">
          <div className="size-48 flex-shrink-0">
            <img className="w-full h-full rounded-2xl" src={image} alt="" />
          </div>
          <div className="flex-1">
            <p className="w-4/5">{title}</p>
          </div>
        </div>
      </div>
      <div className="col-span-2 flex items-center">
        <div className="flex items-center gap-5">
          <p className="text-xl font-medium">$ {currentPrice.toFixed(2)}</p>
          <p className="text-textLight line-through">
            $ {prevPrice.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="col-span-2 flex items-center">
        <div className="flex items-center justify-center">
          <div
            disabled={count < 2}
            onClick={handleDecreaseCount}
            className={`size-10 flex items-center justify-center border border-borderColor cursor-pointer ${
              count < 2 ? 'cursor-not-allowed opacity-50' : ''
            }`}
          >
            <MinusSvg />
          </div>
          <div className="size-10 flex items-center border-y border-borderColor justify-center cursor-pointer">
            {count}
          </div>
          <div
            onClick={handleIncreaseCount}
            className="size-10 flex items-center justify-center border border-borderColor cursor-pointer"
          >
            <PlusSvg />
          </div>
        </div>
      </div>
      <div className="col-span-2 flex items-center">
        <p className="text-xl font-medium">$ {totalPrice}</p>
      </div>
    </div>
  );
};

export default CartCard;
