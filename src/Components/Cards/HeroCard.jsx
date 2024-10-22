import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const HeroCard = ({ card }) => {
  const { image, price, previousPrice } = card;
  return (
    <Link to="/card/id">
      <div className="h-[220px] w-full">
        <img
          className="h-full w-full object-cover rounded-2xl"
          src={image}
          alt=""
        />
      </div>
      <div className="flex items-center justify-center gap-3 pt-3 text-lg">
        <p className="font-semibold">$ {price}</p>
        <p className="text-textLight line-through text-base">
          $ {previousPrice}
        </p>
      </div>
    </Link>
  );
};

export default HeroCard;
