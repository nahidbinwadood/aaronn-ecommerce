/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartSvg, YellowStarSvg } from '../Svg Container/SvgContainer';
import { FaHeart } from "react-icons/fa6";
const ItemCard = ({ item }) => {
  const { title, review, price, previousPrice, image } = item;
  const [isFavorite, setIsFavorite] = useState(false);
  console.log(isFavorite);
  return (
    <div className="relative">
      <div className="h-[280px] w-full relative">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={image}
          alt={title}
        />
        <div className="absolute bottom-4 w-full">
          <Link
            to="/product-details"
            className="bg-white block mx-2 md:mx-4 rounded-2xl py-2 px-3 md:py-3 md:px-4"
          >
            <p className="text-sm font-medium">{title}</p>
            <div className="flex items-center gap-1 mt-1 md:mt-2">
              {Array(review)
                .fill()
                .map((_, index) => (
                  <YellowStarSvg key={index} />
                ))}
            </div>
            <div className="flex items-center justify-between mt-2 md:mt-3">
              <div className="flex items-center gap-3 md:gap-2">
                <p
                  className={`font-semibold text-sm`}
                >
                  $ {price}
                </p>
                <p
                  className={`text-textLight line-through text-xs text-nowrap`}
                >
                  $ {previousPrice}
                </p>
              </div>
              <div className="p-2 bg-[#191919] rounded-full">
                <CartSvg />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <button
        onClick={() => setIsFavorite(!isFavorite)}
        className="absolute top-5 right-5 bg-white p-2 rounded-full"
      >
        <FaHeart className={`${!isFavorite ? "text-black" :"text-red-500"}`} />
      </button>
    </div>
  );
};

export default ItemCard;
