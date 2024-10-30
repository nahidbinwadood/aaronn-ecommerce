import {
  FacebookSvg,
  InstagramSvg,
  TwitterSvg,
} from '@/Components/Svg Container/SvgContainer';

import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      icon: <InstagramSvg />,
      path: 'https://www.instagram.com/',
    },
    {
      icon: <FacebookSvg />,
      path: 'https://www.facebook.com/',
    },
    {
      icon: <TwitterSvg />,
      path: 'https://x.com/',
    },
  ];
  const shippingLinks = [
    {
      title: 'Making payments',
      path: '/making-payments',
    },
    {
      title: 'Delivery options',
      path: '/delivery-options',
    },
     
  ];
  const companyLinks = [
    {
      title: 'Tech Solutions Inc.',
      path: 'www.techsolutions.com',
    },
    {
      title: 'Green Earth Products',
      path: 'www.greenearthproducts.com',
    },
    {
      title: 'Innovative Designs LLC',
      path: 'www.innovativedesigns.com',
    },
    {
      title: 'Health & Wellness Co',
      path: 'www.healthandwellness.com',
    },
    {
      title: 'Future Finance Group',
      path: 'www.futurefinancegroup.com',
    },
  ];
  const payments = [
    {
      name: 'Visa',
      img: 'https://i.imgur.com/47d6P0a.png',
    },
    {
      name: 'MasterCard',
      img: 'https://i.imgur.com/SCN39gQ.png',
    },
    {
      name: 'American Express',
      img: 'https://i.imgur.com/IilE47f.png',
    },
    {
      name: 'Discover',
      img: 'https://i.imgur.com/w8qv3GY.png',
    },
    {
      name: 'Paypal',
      img: 'https://i.imgur.com/x32Scnr.png',
    },
    {
      name: 'Google Pay',
      img: 'https://i.imgur.com/2I1lzEZ.png',
    },
    {
      name: 'Apple Pay',
      img: 'https://i.imgur.com/OGgQx09.png',
    },
  ];
  return (
    <section className="bg-blackColor text-white">
      <div className="container mx-auto py-[100px] flex justify-between ">
        <div className="w-2/3">
          <Link to="/">
            <h3 className="text-3xl font-semibold">Logo Here</h3>
          </Link>
          <p className="pt-6 w-1/2">
            Lorem ipsum dolor sit amet consectetur. Dignissim elementum enim
            blandit ullamcorper sagittis. Neque enim eu sed euismod tellus odio
            elit lacus. Nulla fermentum tincidunt arcu viverra proin at proin.{' '}
          </p>

          {/* Social Links */}

          <ul className="flex items-center gap-4 pt-8">
            {socialLinks?.map((link) => (
              <li key={link?.path}>
                <Link
                  target="_blank"
                  to={link?.path}
                  className="p-3 rounded-full bg-[#0B0B0B] flex items-center group border border-[#0B0B0B] hover:bg-white transition-all duration-500 hover:border-white"
                >
                  {link?.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-12">
          {/* shopping with us */}
          <div>
            <h3 className="text-xl font-semibold pb-6 text-nowrap">
              Shipping with us
            </h3>
            <ul className="space-y-4">
              {shippingLinks?.map((link) => (
                <li key={link?.title}>
                  <Link to={link?.path}>{link?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* company Name */}
          <div>
            <h3 className="text-xl font-semibold pb-6 text-nowrap">Company</h3>
            <ul className="space-y-4">
              {companyLinks?.map((link) => (
                <li key={link?.title}>
                  <Link to={link?.path} className="text-nowrap">
                    {link?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* payments */}
          <div>
            <h3 className="text-xl font-semibold pb-6 text-nowrap">Pay with</h3>
            <div className="grid grid-cols-3 gap-3 w-full">
              {payments?.map((payment) => (
                <div className="h-6 w-9 " key={payment?.name}>
                  <img
                    className="h-full w-full object-cover"
                    src={payment?.img}
                    alt={payment?.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
