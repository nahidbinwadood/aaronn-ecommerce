/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  // eslint-disable-next-line no-unused-vars
  const { icon, title } = service;
  return (
    <div className="bg-[#FFEADF] border border-[#E5E5E5] rounded-lg flex flex-col items-center justify-center py-16">
      {icon}
      <p className="pt-6 font-semibold">{title}</p>
    </div>
  );
};

export default ServiceCard;
