/* eslint-disable react/prop-types */
const Banner = ({ title, secondaryTitle, buyInBulk }) => {
  return (
    <section className="py-5 ">
      <div
        className={`${
          buyInBulk ? 'bg-[#E9EBF8]' : 'bg-[#FD384F]'
        } h-[320px] rounded-2xl container mx-auto relative flex items-center justify-center py-20`}
      >
        {/* shades */}
        <div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://i.imgur.com/IFXdgM2.png"
              alt=""
            />
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <img
              className="h-full w-full object-cover"
              src="https://i.imgur.com/iVxMC5a.png"
              alt=""
            />
          </div>
        </div>

        <div
          className={`${
            buyInBulk ? 'text-[#167EE6]' : 'text-white'
          } text-center space-y-6`}
        >
          <h2 className="text-4xl font-semibold">{title}</h2>
          <h3
            className={`text-6xl font-bold ${
              buyInBulk ? 'text-[#167EE6]' : 'text-[#FFDF88]'
            } `}
          >
            {secondaryTitle}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Banner;
