import ServiceCard from '@/Components/Cards/ServiceCard';
import {
  CustomerSupportMessageSvg,
  FreeShippingSvg,
  ReturnSvg,
  SecurePaymentSvg,
  TruckSvg,
} from '@/Components/Svg Container/SvgContainer';

const Services = () => {
  const allServices = [
    {
      icon: <TruckSvg />,
      title: 'Fast Delivery',
    },
    {
      icon: <FreeShippingSvg />,
      title: 'Free Shipping',
    },
    {
      icon: <ReturnSvg />,
      title: 'Refund Policy',
    },
    {
      icon: <CustomerSupportMessageSvg />,
      title: '24-hour Customer Support Via Chat',
    },
    {
      icon: <SecurePaymentSvg />,
      title: 'Secure Payment',
    },
  ];

  return (
    <section className="my-10 md:my-16 lg:my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 container mx-auto px-5 md:px-7 2xl:px-0">
      {allServices?.map((service, idx) => (
        <ServiceCard key={idx} service={service} />
      ))}
    </section>
  );
};

export default Services;
