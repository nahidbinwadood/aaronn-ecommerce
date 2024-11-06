/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  const { icon, title } = service;
  return (
    <div className="bg-[#FFEADF] border border-[#E5E5E5] rounded-lg flex flex-col items-center justify-center py-8 md:py-10 lg:py-10">
      {icon}
      <p className="mt-2 font-semibold text-center text-sm   w-4/5 mx-auto h-10">{title}</p>
    </div>
  );
};

export default ServiceCard;
