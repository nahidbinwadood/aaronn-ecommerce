import FormInput from '@/Components/Form/FormInput';
import {
  MasterCardSvg,
  PaypalSvg,
  VisaSvg,
} from '@/Components/Svg Container/SvgContainer';
import Services from '../Homepage/Sections/Services';
import ItemCard from '@/Components/Cards/ItemCard';

const Checkout = () => {
  const allProducts = [
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.33,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/SQQlarb.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/SQQlarb.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
  ];
  return (
    <section className="container mx-auto mt-16 font-sans">
      <div className="flex gap-7">
        <div className="w-1/2">
          <form action="">
            <div>
              <div>
                <h2 className="text-xl font-semibold text-blackColor">
                  Contact
                </h2>
                <div className="mt-4">
                  <FormInput
                    placeholder={'Email or mobile phone number'}
                    type={'text'}
                  />
                </div>
              </div>

              {/* delivery */}
              <div className="mt-10">
                <h2 className="text-xl font-semibold text-blackColor">
                  Delivery
                </h2>
                <div>
                  <div className="mt-4">
                    <FormInput
                      placeholder={'Country or region'}
                      type={'text'}
                    />
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="mt-4 w-1/2">
                      <FormInput placeholder={'First name'} type={'text'} />
                    </div>
                    <div className="mt-4 w-1/2">
                      <FormInput placeholder={'Last name'} type={'text'} />
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <FormInput
                        placeholder={'Address'}
                        type={'text'}
                        address={true}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <FormInput
                        placeholder={'Apartment, suite  etc. (optional)'}
                        type={'text'}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="mt-4">
                      <FormInput placeholder={'Postal code'} type={'number'} />
                    </div>
                  </div>
                  <div className="mt-3">
                    <div>
                      <label
                        htmlFor="saveInfo"
                        className="flex items-center gap-3 "
                      >
                        <input
                          className="size-4"
                          type="checkbox"
                          name="saveInfo"
                          id="saveInfo"
                        />
                        <span className="cursor-pointer">
                          Save this information for next time
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* contact */}
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-blackColor">
                  Contact
                </h2>
                <div className="mt-4">
                  <div>
                    <FormInput
                      placeholder={
                        'Enter your shipping address to view available shipping methods.'
                      }
                      type={'text'}
                      bgGray={true}
                    />
                  </div>
                </div>
              </div>

              {/* Payment */}
              <div className="mt-10">
                <div>
                  <h2 className="text-xl font-semibold text-blackColor">
                    Payment
                  </h2>
                  <p className="text-[#868686] pt-4">
                    All transactions are secured and encrypted.{' '}
                  </p>
                </div>
                <div className="rounded-[24px] border border-t-0 border-[#969696] bg-[#F4F4F4] px-6 py-7 mt-6 relative">
                  {/* Payment Cards */}
                  <div className="absolute top-0 left-0 flex items-center justify-between py-3 bg-[#F4F6FF] rounded-[22px] w-full px-5 border border-[#006EFF] z-10">
                    <p className="text-[#1B1B1B] font-medium">Credit card</p>
                    <div className="flex items-center gap-2">
                      <div className="border border-[#D8D8D8] rounded-md size-10 flex items-center justify-center">
                        <VisaSvg />
                      </div>
                      <div className="border border-[#D8D8D8] rounded-md size-10 flex items-center justify-center">
                        <MasterCardSvg />
                      </div>
                      <div className="border border-[#D8D8D8] rounded-md size-10 flex items-center justify-center">
                        <PaypalSvg />
                      </div>
                      <div className="border border-[#D8D8D8] rounded-md size-10 flex items-center justify-center font-semibold text-[#006EFF]">
                        <p>3+</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16">
                    <FormInput placeholder={'Card number'} type={'number'} />
                  </div>
                  <div className="mt-4 flex gap-5">
                    <div className="w-1/2">
                      <FormInput
                        placeholder={'Expiration date (MM / YY)'}
                        type={'number'}
                      />
                    </div>
                    <div className="w-1/2">
                      <FormInput
                        placeholder={'Security code'}
                        type={'number'}
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <FormInput placeholder={'Name on card'} type={'text'} />
                    <div className="mt-3">
                      <div>
                        <label
                          htmlFor="billingAddress"
                          className="flex items-center gap-3"
                        >
                          <input
                            className="size-4"
                            type="checkbox"
                            name="billingAddress"
                            id="billingAddress"
                          />
                          <span className="cursor-pointer">
                            Use shipping address as billing address
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* pay btn */}
              <button className="w-full mt-6 bg-[#006EFF] py-5 rounded-full font-semibold transition hover:bg-transparent border border-[#006EFF] hover:text-[#006EFF] duration-500 text-white">
                Pay Now
              </button>
            </div>
          </form>
        </div>
        <div className="w-1/2">
          <div>
            <div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-32">
                    <img
                      className="w-full h-full rounded-[24px]"
                      src="https://s3-alpha-sig.figma.com/img/27d5/e1b9/2d45c7e26fc938a5afe86dbd55735e32?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=H4DMAUT~w3VGMxxo0FxJ9ALZLnDN1-vvYxc72btWHMnkqgbBj7O5aPVb5T1wMuntcC6AkJ6qdYm6YA74L-9~tKT~RSWkwbNa0-uruwmDrmlqXJYAL5KpiRehCBBAejxri9~lOpVTjXIjZS6ivW01gy7CVgL-8g1v3IZIG9aaVd6zOAQlKlSBscA3y5A-9DlpjJJc6wU2YxDoUeMLiAw5jWCvpaRWtkdjYPNPnw8ZEEMASP45p-qbIP~UwgPjdv8bMSdUMQBvRKAAs3ORHNT-4Gh3Dpn70GybrqlVuykhx-1q37bYwriGKBZobwHcg3aD2LCIr5IY-rkoMtUCxQ4pWA__"
                      alt=""
                    />
                  </div>
                  <h2 className="w-2/3 font-semibold">
                    Air Wave Mattress Cool Sleep Supportive and Pressure Relief
                    Air Wrapped Coils Comforthable Mattress Topper Affordable
                    Queen&SS
                  </h2>
                </div>
                <div>
                  <p className="text-xl font-semibold">$72</p>
                </div>
              </div>
              <div className="mt-9">
                <form action="" className="flex items-center gap-5 w-full">
                  <div className="w-full">
                    <FormInput placeholder={'Discount code'} type={'text'} />
                  </div>
                  <div>
                    <button className="py-5 rounded-[24px] px-10 bg-[#D9D9D9] border border-[#C1C1C1]">
                      Apply
                    </button>
                  </div>
                </form>

                <div className="pt-5 flex items-center justify-between font-medium">
                  <h5>Subtitle ( 1 item)</h5>
                  <p>$72</p>
                </div>
                <div className="pt-5 flex items-center justify-between ">
                  <h5 className="font-medium">Shipping</h5>
                  <div>
                    <input
                      className="focus:outline-none"
                      placeholder="Enter shipping address"
                      type="text"
                      name=""
                      id=""
                    />
                  </div>
                </div>
                <div className="pt-5 flex items-center justify-between font-medium">
                  <h5>Total</h5>
                  <p>
                    <span className="text-sm text-[#868686]">USD</span> $72
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-40 container mx-auto">
        <div>
          <h2 className="text-center text-4xl font-semibold">More to love</h2>
        </div>
        <div className="mt-20 grid grid-cols-4 gap-8">
          {allProducts?.map((item, idx) => (
            <ItemCard key={idx} item={item} />
          ))}
        </div>
      </div>

      <Services />
    </section>
  );
};

export default Checkout;
