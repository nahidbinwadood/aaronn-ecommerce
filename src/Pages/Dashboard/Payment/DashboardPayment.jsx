import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
const DashboardPayment = () => {
  const [active, setActive] = useState(0);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div>
        <h2 className="text-[#191919] font-semibold text-3xl pb-8 border-b border-[#C5C5C5]">
          Payment Type
        </h2>
      </div>
      <div>
        <h4 className="text-xl font-semibold mt-8">Payment Type</h4>
      </div>
      <div className="mt-6 flex items-center gap-6">
        {payments?.map((item, index) => (
          <button
            onClick={() => setActive(index)}
            className={`w-20 h-14 border ${
              index == active ? 'border-[#191919]' : 'border-[#C5C5C5]'
            } rounded-md px-5`}
            key={item?.name}
          >
            <img src={item?.img} alt="" />
          </button>
        ))}
      </div>

      {/* form */}
      <div className="mt-12">
        <form onSubmit={handleSubmit(onSubmit)} action="" className="w-full">
          <div className="flex items-center gap-5">
            <div className="flex flex-col gap-4 w-1/2">
              <label id="creditCardNumber" className="text-lg">
                Credit Card Number
              </label>
              <input
                {...register('creditCardNumber')}
                placeholder="**** **** **** ****"
                className={`w-full focus:outline-none border  px-6 py-4 rounded-[24px] bg-white border-[#969696]`}
                type="password"
                name="creditCardNumber"
                id="creditCardNumber"
              />
            </div>
            <div className="w-1/2 flex items-center gap-5">
              <div className="flex flex-col gap-4 w-1/2">
                <label id="expDate" className="text-lg">
                  Exp Date
                </label>
                <input
                  {...register('expDate')}
                  placeholder="MM/YY"
                  className={`w-full focus:outline-none border  px-6 py-4 rounded-[24px] bg-white border-[#969696]`}
                  type="text"
                  name="expDate"
                  id="expDate"
                />
              </div>
              <div className="flex flex-col gap-4 w-1/2">
                <label id="cvv" className="text-lg">
                  CVV
                </label>
                <input
                  {...register('cvv')}
                  placeholder="****"
                  className={`w-full focus:outline-none border  px-6 py-4 rounded-[24px] bg-white border-[#969696]`}
                  type="password"
                  name="cvv"
                  id="cvv"
                />
              </div>
            </div>
          </div>
          <div className="mt-9">
            <div className="flex flex-col gap-4 ">
              <label id="fullName" className="text-lg">
                Full Name
              </label>
              <input
                {...register('fullName')}
                placeholder="Enter Full Name"
                className={`w-full focus:outline-none border  px-6 py-4 rounded-[24px] bg-white border-[#969696]`}
                type="text"
                name="fullName"
                id="fullName"
              />
            </div>
          </div>
          <div className="mt-16">
            <h4 className="text-xl font-semibold mt-8">Shipping</h4>
            <div className="flex items-center gap-5 mt-8">
              <div className="flex flex-col gap-4 w-1/2">
                <label id="address" className="text-lg">
                  Address
                </label>
                <input
                  {...register('address')}
                  placeholder="Enter Your Address"
                  className={`w-full focus:outline-none border  px-6 py-4 rounded-[24px] bg-white border-[#969696]`}
                  type="text"
                  name="address"
                  id="address"
                />
              </div>
              <div className="flex flex-col gap-4 w-1/2">
                <label id="fullName" className="text-lg">
                  City
                </label>
                <input
                  {...register('city')}
                  placeholder="Enter Your City"
                  className={`w-full focus:outline-none border  px-6 py-4 rounded-[24px] bg-white border-[#969696]`}
                  type="text"
                  name="city"
                  id="city"
                />
              </div>
            </div>
            <div className="flex items-center gap-5 mt-8">
              <div className="flex flex-col gap-4 w-1/2">
                <label id="country" className="text-lg">
                  Country
                </label>
                <input
                  {...register('country')}
                  placeholder="Enter Your Country"
                  className={`w-full focus:outline-none border  px-6 py-4 rounded-[24px] bg-white border-[#969696]`}
                  type="text"
                  name="country"
                  id="country"
                />
              </div>
              <div className="flex flex-col gap-4 w-1/2">
                <label id="passcode" className="text-lg">
                  Passcode
                </label>
                <input
                  {...register('city')}
                  placeholder="Enter Your Passcode"
                  className={`w-full focus:outline-none border  px-6 py-4 rounded-[24px] bg-white border-[#969696]`}
                  type="text"
                  name="passcode"
                  id="passcode"
                />
              </div>
            </div>
          </div>
          <div className="mt-12 w-full flex items-center justify-center">
            <button className="bg-blackColor px-12 w-1/2 text-center py-3 transition duration-300 border border-blackColor hover:bg-transparent hover:text-blackColor text-lg rounded-full text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DashboardPayment;
