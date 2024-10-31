import {
  DownArrowSvg,
  FacebookAuthSvg,
  GoogleAuthSvg,
  GreenTickSvg,
  TwitterAuthSvg,
} from '@/Components/Svg Container/SvgContainer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { CgSpinnerTwo } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';

const NumberLogin = () => {
  const [show, SetShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // function:
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    if (data) {
      setTimeout(() => {
        setLoading(false);
        toast.success('Login Successfull');
        navigate('/dashboard/overview');
      }, 2000);
    }
  };
  return (
    <div className="w-full flex h-screen">
      <div className="w-full h-full flex items-center justify-center">
        <div className="rounded-[24px] border border-[#E5E5E5] w-[573px] py-10">
          <div className="text-center ">
            <h3 className="font-semibold text-2xl">Sign In</h3>
          </div>
          <div className="flex items-center justify-center mt-5 bg-[#e4f7f1]">
            <p className="flex gap-2 items-center py-2">
              <GreenTickSvg /> Your information is protected
            </p>
          </div>

          {/* form */}
          <div className="flex flex-col gap-5 items-center justify-center mt-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="w-3/4 mx-auto flex flex-col gap-5"
            >
              <div>
                <input
                  {...register('number', { required: true })}
                  className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]"
                  placeholder="Enter Your Number"
                  type="number"
                  name="number"
                  id=""
                />
              </div>
              <div className="w-full relative">
                <input
                  {...register('password', { required: true })}
                  className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]"
                  placeholder="Enter Your Password"
                  type={show ? 'text' : 'password'}
                  name="password"
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

              <div className="flex items-center  justify-end">
                <Link to="/reset-password" className="text-textLight underline">
                  Forgot Password
                </Link>
              </div>

              {/* button */}
              <div className="flex items-center justify-center mt-4">
                <button
                  type="submit"
                  className={`transition flex items-center justify-center h-14 duration-300 hover:bg-transparent hover:text-[#FF4B26] py-4 rounded-[24px] font-semibold bg-[#FF4B26] border border-[#FF4B26] text-white  w-full opacity-100`}
                >
                  <span>
                    {loading ? (
                      <CgSpinnerTwo className="size-6 animate-spin" />
                    ) : (
                      'Sign In'
                    )}
                  </span>
                </button>
              </div>
            </form>
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

export default NumberLogin;
