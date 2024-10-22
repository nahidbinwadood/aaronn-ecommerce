/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { CartSvg, YellowStartSvg } from '../Svg Container/SvgContainer';

const ItemCard = ({ item }) => {
  const { title, review, price, previousPrice, image } = item;
  return (
    <Link to="/card/details">
      <div className="h-[450px] w-full relative">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={image}
          alt=""
        />
        <div className="absolute bottom-4 w-full">
          <div className="bg-white mx-4 rounded-2xl py-5 px-6">
            <p className="text-sm font-medium">{title}</p>
            <div className="flex items-center gap-1 mt-2">
              {Array(review)
                .fill()
                .map((_, index) => (
                  <YellowStartSvg key={index} />
                ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-5 mt-3">
                <p className="font-semibold">$ {price}</p>
                <p className="text-textLight line-through text-base">
                  $ {previousPrice}
                </p>
              </div>
              <div>
                <div className="p-2 bg-[#191919] rounded-full ">
                  <CartSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCard;
