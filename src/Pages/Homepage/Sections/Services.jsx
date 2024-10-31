import ServiceCard from '@/Components/Cards/ServiceCard';
import {
  CustomerSupportMessageSvg,
  DiamondSvg,
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
      icon: <DiamondSvg />,
      title: 'Next Level Pro Quality',
    },
  ];

  return (
    <section className="my-40 grid grid-cols-5 gap-6 container mx-auto">
      {allServices?.map((service, idx) => (
        <ServiceCard key={idx} service={service} />
      ))}
    </section>
  );
};

export default Services;
