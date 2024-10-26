import {
  DownArrowSvg,
  FacebookAuthSvg,
  GoogleAuthSvg,
  GreenTickSvg,
  TwitterAuthSvg,
} from '@/Components/Svg Container/SvgContainer';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  const [show, SetShow] = useState(false);
  return (
    <div className="w-full flex h-screen">
      <div className="h-full w-1/2 bg-[#FFEADF] flex items-center justify-center">
        <div>
          <img src="https://i.postimg.cc/xTLCXKjq/OBJECTS.png" alt="" />
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="rounded-[24px] border border-[#E5E5E5] w-[573px] py-10">
          <div className="text-center ">
            <h3 className="font-semibold text-2xl">Sign Up</h3>
          </div>
          <div className="flex items-center justify-center mt-5 bg-[#e4f7f1]">
            <p className="flex gap-2 items-center py-2">
              <GreenTickSvg /> Your information is protected
            </p>
          </div>

          {/* form */}
          <div className="flex flex-col gap-5 items-center justify-center mt-8">
            <form action="" className="w-3/4 mx-auto flex flex-col gap-5">
              <div>
                <input
                  className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]"
                  placeholder="Enter Your Email"
                  type="email"
                  name=""
                  id=""
                />
              </div>
              <div className="w-full relative">
                <input
                  className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]"
                  placeholder="Enter Your Password"
                  type={show ? 'text' : 'password'}
                  name=""
                  id=""
                />
                <div className="absolute top-1/2 right-5 -translate-y-1/2 z-10">
                  {show ? (
                    <FaRegEye
                      onClick={() => SetShow(!show)}
                      className="size-5 cursor-pointer text-textLight"
                    />
                  ) : (
                    <FaRegEyeSlash
                      onClick={() => SetShow(!show)}
                      className="size-5 cursor-pointer text-textLight"
                    />
                  )}
                </div>
              </div>
              <div className="mt-2 space-y-2 ml-5">
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-textLight rounded-full" />
                  <p className="text-textLight">6-20 Characters </p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-2 bg-textLight rounded-full" />
                  <p className="text-textLight">
                    Contains number, letter or symbol
                  </p>
                </div>
              </div>

              {/* button */}
              <div className="flex items-center justify-center mt-4">
                <button
                  //   onClick={handleNavigate}
                  className={`transition duration-300 hover:bg-transparent hover:text-[#FF4B26] py-4 rounded-[24px] font-semibold bg-[#FF4B26] border border-[#FF4B26] text-white  w-full opacity-100`}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <p className="text-textLight text-sm underline">
              Have an account
              <Link className="font-semibold text-black" to="/login">
                Sign In?
              </Link>
            </p>
          </div>

          {/* SSL  */}
          <div>
            <div className="w-4/5 flex items-center justify-center text-nowrap mx-auto mt-5 gap-4">
              <div className="w-full h-[2px] bg-borderColor" />
              <p>Or Continue With</p>
              <div className="w-full h-[2px] bg-borderColor" />
            </div>
            <div className="mt-6 flex items-center justify-center gap-5">
              <button className="cursor-pointer">
                <FacebookAuthSvg />
              </button>
              <button className="cursor-pointer">
                <GoogleAuthSvg />
              </button>
              <button className="cursor-pointer">
                <TwitterAuthSvg />
              </button>
            </div>

            <div className="flex items-center justify-center mt-5">
              <p>Location :</p>{' '}
              <div>
                <div className="relative inline-flex items-center">
                  <select className="appearance-none bg-transparent focus:outline-none text-black font-semibold cursor-pointer pr-2 pl-4 py-1">
                    <option className="p-2">Bangladesh</option>
                    <option className="p-2">India</option>
                    <option className="p-2">Pakistan</option>
                    <option className="p-2">Sri Lanka</option>
                  </select>
                  <DownArrowSvg dark={true} />
                </div>
              </div>
            </div>
            <div className="mt-5 text-center w-4/5  mx-auto">
              <p>
                By continuing, you confirm that you‘re an adult and you’ve read
                and accepted our{' '}
                <Link className="underline" to="">
                  Free Membership Agreement
                </Link>
                and{' '}
                <Link className="underline" to="">
                  Privacy Policy
                </Link>
                .
                <Link className="underline" to="">
                  Why choose a location?
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
