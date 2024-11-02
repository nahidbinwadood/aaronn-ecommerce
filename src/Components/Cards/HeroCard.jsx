import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const HeroCard = ({ card }) => {
  const { image, price, previousPrice } = card;
  return (
    <Link to="/product-details">
      <div className="h-[150px] md:h-[130px] w-full  ">
        <img
          className="h-full w-full object-cover rounded-md md:rounded-xl"
          src={image}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center gap-2 pt-3 text-sm text-nowrap">
        <p className="font-semibold">$ {price}</p>
        <p className="text-textLight line-through">
          $ {previousPrice}
        </p>
      </div>
    </Link>
  );
};

export default HeroCard;
