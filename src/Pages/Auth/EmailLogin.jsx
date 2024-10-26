import { DownArrowSvg, FacebookAuthSvg, GoogleAuthSvg, GreenTickSvg, TwitterAuthSvg } from '@/Components/Svg Container/SvgContainer';
import { Link } from 'react-router-dom';

const EmailLogin = () => {
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
            <h3 className="font-semibold text-2xl">Register / Sign in</h3>
          </div>
          <div className="flex items-center justify-center mt-5 bg-[#e4f7f1]">
            <p className="flex gap-2 items-center py-2">
              <GreenTickSvg /> Your information is protected
            </p>
          </div>

          {/* tabs */}
          <div className="flex flex-col gap-5 items-center justify-center mt-8">

          </div>

          {/* button */}
          <div className="flex items-center justify-center mt-8">
            <button
            //   onClick={handleNavigate}
            //   className={`py-4 rounded-[24px] font-semibold text-lg  bg-[#FF4B26] text-white border border-borderColor w-4/5 ${
            //     active ? 'opacity-100' : 'opacity-50 cursor-not-allowed'
            //   }`}
            >
              Continue
            </button>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <p className="text-textLight text-sm underline">
              Don’t have an account{' '}
              <Link className="font-semibold text-black" to="/register">
                Sign Up?
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

export default EmailLogin;
