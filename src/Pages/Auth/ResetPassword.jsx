import { CgSpinnerTwo } from 'react-icons/cg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import {
  CheckedSvg,
  UncheckedSvg,
} from '@/Components/Svg Container/SvgContainer';

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState('email');
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // function:

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    if (active == 'email') {
      if (data) {
        setTimeout(() => {
          setLoading(false);
          toast.success('A verification code sent to your email address');
          navigate('/reset-password/email');
        }, 2000);
      }
    } else if (active == 'number') {
      if (data) {
        setTimeout(() => {
          setLoading(false);
          toast.success('A verification code sent to your number');
          navigate('/reset-password/number');
        }, 2000);
      }
    }
  };
  console.log(active);
  return (
    <div className="w-full flex h-screen">
      <div className="h-full w-1/2 bg-[#FFEADF] flex items-center justify-center">
        <div>
          <img src="https://i.postimg.cc/xTLCXKjq/OBJECTS.png" alt="" />
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="rounded-[24px] border border-[#E5E5E5] w-[573px] py-10">
          <div className="text-center mt-10 ">
            <h3 className="font-semibold text-2xl">Reset Your Password</h3>
          </div>
          <div className="flex items-center justify-center mt-5">
            <p className="flex gap-2 items-center py-2 w-2/3 mx-auto text-center text-textLight">
              Enter your email or phone number to get back into your account
            </p>
          </div>

          {/* form */}
          <div className="flex flex-col gap-5 items-center justify-center mt-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="w-3/4 mx-auto flex flex-col gap-5"
            >
              <div className="flex items-center gap-10 mx-auto">
                <div
                  onClick={() => setActive('email')}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  {active === 'email' ? <CheckedSvg /> : <UncheckedSvg />}

                  <span className="cursor-pointer">Email</span>
                </div>
                <div
                  onClick={() => setActive('number')}
                  className="flex items-center gap-3 cursor-pointer"
                >
                  {active === 'number' ? <CheckedSvg /> : <UncheckedSvg />}
                  <span className="cursor-pointer">Phone Number</span>
                </div>
              </div>
              <div>
                {active === 'email' ? (
                  <input
                    {...register('email', { required: true })}
                    className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]"
                    placeholder="Enter Your Email"
                    type="email"
                    name="email"
                    id=""
                  />
                ) : (
                  <input
                    {...register('number', { required: true })}
                    className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]"
                    placeholder="Enter Your Number"
                    type="number"
                    name="number"
                    id=""
                  />
                )}
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
                      'Continue'
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
