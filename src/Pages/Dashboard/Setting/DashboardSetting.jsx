import { ImageUploadPlaceholderSvg } from '@/Components/Svg Container/SvgContainer';
import { useState } from 'react';

const DashboardSetting = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };
  return (
    <div>
      <div>
        <h2 className="text-[#191919] font-semibold text-3xl pb-8 border-b border-[#C5C5C5]">
          Settings
        </h2>
      </div>

      {/* form */}
      <div className="mt-9">
        <div>
          <h4 className="text-center text-2xl font-semibold">
            Personal Information
          </h4>
        </div>
        <div className="mt-9 w-full flex items-center justify-center">
          <label
            id="image"
            className=" cursor-pointer size-72 rounded-[24px] bg-[#D9D9D9] flex items-center justify-center"
          >
            <input
              onChange={handleImageChange}
              className="hidden"
              type="file"
              name=""
              id="image"
            />
            {selectedImage ? (
              <div className="size-72">
                <img
                  className="w-full h-full object-cover rounded-[24px]"
                  src={selectedImage}
                  alt=""
                />
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-3">
                <ImageUploadPlaceholderSvg />
                <p className="text-sm font-semibold">Upload Image</p>
              </div>
            )}
          </label>
        </div>
        <div className="mt-9">
          <form action="" className="w-full px-20 space-y-6">
            <div className="flex items-center w-full gap-6">
              <div className="px-6 py-3 rounded-[24px] flex items-center gap-2 border border-borderColor w-full">
                <label className="text-nowrap" htmlFor="name">
                  Name :
                </label>
                <input
                  defaultValue={'Nahid Bin Wadood'}
                  className="w-full font-semibold py-2 focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                />
              </div>
              <div className="px-6 py-3 rounded-[24px] flex items-center gap-2 border border-borderColor w-full">
                <label className="text-nowrap" htmlFor="email">
                  Email Address :
                </label>
                <input
                  defaultValue={'nahidbinwadood@gmail.com'}
                  className="w-full font-semibold py-2 focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-6">
              <div className="px-6 py-3 rounded-[24px] flex items-center gap-2 border border-borderColor w-full">
                <label className="text-nowrap" htmlFor="memberId">
                  Email Address :
                </label>
                <input
                  defaultValue={'Nahidbinwadood@gmail.com'}
                  className="w-full font-semibold py-2 focus:outline-none"
                  type="email"
                  name="email"
                  id="email"
                />
              </div>
              <div className="px-6 py-3 rounded-[24px] flex items-center gap-2 border border-borderColor w-full">
                <label className="text-nowrap" htmlFor="memberId">
                  Member ID :
                </label>
                <input
                  defaultValue={'us1664578218bgqae'}
                  className="w-full font-semibold py-2 focus:outline-none"
                  type="text"
                  name="memberId"
                  id="memberId"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-6">
              <div className="px-6 py-3 rounded-[24px] flex items-center gap-2 border border-borderColor w-full">
                <label className="text-nowrap" htmlFor="streetAddress">
                  Street Address :
                </label>
                <input
                  defaultValue={'18887 4th Street'}
                  className="w-full font-semibold py-2 focus:outline-none"
                  type="text"
                  name="streetAddress"
                  id="streetAddress"
                />
              </div>
              <div className="px-6 py-3 rounded-[24px] flex items-center gap-2 border border-borderColor w-full">
                <label className="text-nowrap" htmlFor="city">
                  City :
                </label>
                <input
                  defaultValue={'Ibrahimborough'}
                  className="w-full font-semibold py-2 focus:outline-none"
                  type="text"
                  name="city"
                  id="city"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-6">
              <div className="px-6 py-3 rounded-[24px] flex items-center gap-2 border border-borderColor w-full">
                <label className="text-nowrap" htmlFor="country">
                  Country/region :
                </label>
                <input
                  defaultValue={'Japan'}
                  className="w-full font-semibold py-2 focus:outline-none"
                  type="text"
                  name="country"
                  id="country"
                />
              </div>
              <div className="px-6 py-3 rounded-[24px] flex items-center gap-2 border border-borderColor w-full">
                <label className="text-nowrap" htmlFor="zipCode">
                  Zip/postal code :
                </label>
                <input
                  defaultValue={'16205-0776'}
                  className="w-full font-semibold py-2 focus:outline-none"
                  type="text"
                  name="zipCode"
                  id="zipCode"
                />
              </div>
            </div>
            <div className="flex items-center w-full gap-6">
              <div className="px-6 w-1/2 py-3 rounded-[24px] flex items-center gap-2 border border-borderColor">
                <label className="text-nowrap" htmlFor="phoneNumber">
                  Phone Number :
                </label>
                <input
                  defaultValue={'1-526-272-7718'}
                  className="w-full font-semibold py-2 focus:outline-none"
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                />
              </div>
            </div>

            <div className="pt-12 w-full flex flex-col gap-6 items-center justify-center">
              <button className="hover:bg-blackColor px-12 w-1/2 text-center py-3 transition duration-300 border border-blackColor bg-transparent text-blackColor text-lg rounded-full hover:text-white">
                Edit Account
              </button>
              <button className="bg-blackColor px-12 w-1/2 text-center py-3 transition duration-300 border border-blackColor hover:bg-transparent hover:text-blackColor text-lg rounded-full text-white">
                Delete Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DashboardSetting;
