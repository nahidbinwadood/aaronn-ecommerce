/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { CartSvg, YellowStarSvg } from '../Svg Container/SvgContainer';

const ItemCard = ({ item ,banner}) => {
  const { title, review, price, previousPrice, image } = item;
  return (
    <Link to="/product-details">
      <div className="h-[300px] md:h-[350px] lg:h-[400px] w-full relative">
        <img
          className="h-full w-full object-cover rounded-xl"
          src={image}
          alt={title}
        />
        <div className="absolute bottom-4 w-full">
          <div className="bg-white mx-2 md:mx-4 rounded-2xl py-2 px-3 md:py-3 md:px-4">
            <p className="text-sm md:text-base font-medium">{title}</p>
            <div className="flex items-center gap-1 mt-1 md:mt-2">
              {Array(review)
                .fill()
                .map((_, index) => (
                  <YellowStarSvg key={index} />
                ))}
            </div>
            <div className="flex items-center justify-between mt-2 md:mt-3">
              <div className="flex items-center gap-3 md:gap-4">
                <p className={`font-semibold  ${banner? "text-xs md:text-base ":"text-sm md:text-base lg:text-lg"}`}>
                  $ {price}
                </p>
                <p className={`text-textLight line-through ${banner? "text-xs md:text-sm":"text-sm md:text-base lg:text-lg"}`}>
                  $ {previousPrice}
                </p>
              </div>
              <div className="p-2 bg-[#191919] rounded-full">
                <CartSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
