const DashboardPayment = () => {
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
        {payments?.map((item) => (
          <button className="w-20 h-14 border border-[#C5C5C5] rounded-md px-5" key={item?.name}>
            <img src={item?.img} alt="" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default DashboardPayment;
