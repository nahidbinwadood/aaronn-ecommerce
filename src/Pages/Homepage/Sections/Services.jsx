import ServiceCard from '@/Components/Cards/ServiceCard';
import {
  CustomerSupportMessageSvg,
  // DiamondSvg,
  GuaranteeSvg,
  ReturnSvg,
  TruckSvg,
} from '@/Components/Svg Container/SvgContainer';

const Services = () => {
  const allServices = [
    {
      icon: <TruckSvg />,
      title: 'Fast & Secure Delivery',
    },
    {
      icon: <GuaranteeSvg />,
      title: '100% Guarantee On Product',
    },
    {
      icon: <ReturnSvg />,
      title: '24 Hour Return Policy',
    },
    {
      icon: <CustomerSupportMessageSvg />,
      title: '24-hour Customer Support Via Chat',
    },
    {
      icon: "",
      title: '',
    },
  ];

  return (
    <section className="my-10 md:my-16 lg:my-20 xl:my-28 2xl:my-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 container mx-auto px-5 md:px-7 2xl:px-0">
      {allServices?.map((service, idx) => (
        <ServiceCard key={idx} service={service} />
      ))}
    </section>
  );
};

export default Services;
