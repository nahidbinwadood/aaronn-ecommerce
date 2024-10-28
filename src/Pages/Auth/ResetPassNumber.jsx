import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { CgSpinnerTwo } from 'react-icons/cg';
import { Link, useNavigate } from 'react-router-dom';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/Components/ui/input-otp';

const ResetPassNumber = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      otp: ['', '', '', '', '', ''], // Initialize with empty strings for each slot
    },
  });

  // function:
  const handleOTPChange = (index, value) => {
    const updatedOTP = [...otpValues];
    updatedOTP[index] = value;
    setValue('otp', updatedOTP); // Update the entire array in form state
  };

  const otpValues = watch('otp');
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    if (data) {
      setTimeout(() => {
        setLoading(false);
        toast.success('Verification Successful');
        navigate('/dashboard/overview');
      }, 2000);
    }
  };
  return (
    <div className="w-full flex h-screen">
      <div className="h-full w-1/2 bg-[#FFEADF] flex items-center justify-center">
        <div>
          <img src="https://i.postimg.cc/xTLCXKjq/OBJECTS.png" alt="" />
        </div>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center">
        <div className="rounded-[24px] border border-[#E5E5E5] w-[573px] py-10">
          <div className="text-center mt-10">
            <h3 className="font-semibold text-2xl">
              Phone Number Verification Code
            </h3>
          </div>
          <div className="flex items-center justify-center mt-6 text-textLight text-center w-1/2 mx-auto">
            <p>Enter the 6-digit code we sent to +33*******82</p>
          </div>

          {/* form */}
          <div className="flex flex-col gap-5 items-center justify-center mt-8">
            <form
              onSubmit={handleSubmit(onSubmit)}
              action=""
              className="w-3/4 mx-auto flex flex-col gap-5"
            >
              {/* OTP */}

              <div className="w-full flex items-center justify-center">
                <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
                  <InputOTPGroup>
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <InputOTPSlot
                        key={index}
                        index={index}
                        value={otpValues[index]} // Bind to the watched value
                        onChange={(e) => handleOTPChange(index, e.target.value)} // Handle changes manually
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
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
                      'Verify'
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="mt-5 flex items-center justify-center">
            <p className="text-textLight text-sm underline">
              Have an account?
              <Link className="font-semibold text-[#1877F2]" to="/login">
                Sign In?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassNumber;
