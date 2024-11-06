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
  ];
  return (
    <section className="bg-blackColor text-white">
      <div className="container mx-auto py-14   flex flex-col sm:flex-row justify-between  px-5 md:px-7 2xl:px-0">
        <div className="2xl:w-2/3">
          <Link to="/">
            <h3 className="text-2xl md:text-3xl font-semibold">Logo Here</h3>
          </Link>

          {/* Social Links */}

          <ul className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 lg:pt-8">
            {socialLinks?.map((link) => (
              <li key={link?.path}>
                <Link
                  target="_blank"
                  to={link?.path}
                  className="p-2 md:p-3 rounded-full bg-[#0B0B0B] flex items-center group border border-[#0B0B0B] hover:bg-white transition-all duration-500 hover:border-white"
                >
                  {link?.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row  gap-5 md:gap-8 lg:gap-12 mt-5">
          {/* shopping with us */}
          <div>
            <h3 className="text-lg md:text-xl font-semibold pb-3 md:pb-4 lg:pb-6 text-nowrap">
              Shipping with us
            </h3>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base">
              {shippingLinks?.map((link) => (
                <li key={link?.title}>
                  <Link to={link?.path}>{link?.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* payments */}
          <div>
            <h3 className="text-xl font-semibold pb-6 text-nowrap">Pay with</h3>
            <div className="md:grid md:grid-cols-3 gap-3 w-full flex items-center">
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
      <div className='text-center py-5 md:py-7 border-t container mx-auto border-[#444343] text-sm'>
        <p>Copyright @2024Company Name Here</p>
      </div>
    </section>
  );
};

export default Footer;
