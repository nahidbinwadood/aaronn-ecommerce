/* eslint-disable react/prop-types */
import HeroCard from '../Cards/HeroCard';
import { YellowTickSvg } from '../Svg Container/SvgContainer';

const BannerCardContainer = ({ choice, choiceContents }) => {
  const { title, description, cards } = choiceContents;

  return (
    <div
      className={`h-1/2 w-full ${
        choice ? 'bg-[#FDF9D4]' : 'bg-[#FFEADF]'
      } rounded-3xl p-8`}
    >
      <div className="flex items-center gap-1">
        <YellowTickSvg />
        <h2 className="text-4xl font-semibold">{title}</h2>
      </div>
      {choice ? (
        <div className="pt-4 flex items-center gap-3 ">
          <p>{description?.[0]} </p>
          <div className="h-3 w-[1px] bg-black" />
          <p>{description?.[1]} </p>
        </div>
      ) : (
        <div className="pt-4 flex items-center gap-3 ">
          <p>{description} </p>
        </div>
      )}
      <div className="grid grid-cols-3 gap-5 pt-6">
        {cards?.map((card) => (
          <HeroCard key={card?.image} card={card} />
        ))}
      </div>
    </div>
  );
};

export default BannerCardContainer;
