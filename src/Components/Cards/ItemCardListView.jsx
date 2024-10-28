/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { CartSvg, YellowStarSvg } from '../Svg Container/SvgContainer';

const ItemCardListView = ({ item }) => {
  const { title, review, price, previousPrice, image } = item;
  return (
    <Link
      to="/product-details"
      className="flex items-center justify-between gap-8 p-8 rounded-[24px] border border-borderColor"
    >
      <div className="flex-shrink-0">
        <img
          className="h-60 w-auto object-cover rounded-2xl"
          src={image}
          alt=""
        />
      </div>
      <div className="flex-1">
        <h5 className="text-lg font-medium">{title}</h5>
        <div className="flex items-center gap-1 my-4">
          {Array(review)
            .fill()
            .map((_, index) => (
              <YellowStarSvg key={index} />
            ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <p className="font-medium text-lg">$ {price.toFixed(2)}</p>
            <p className="text-textLight line-through">
              $ {previousPrice.toFixed(2)}
            </p>
          </div>
          <div className="p-2 bg-[#191919] rounded-full">
            <CartSvg />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ItemCardListView;
