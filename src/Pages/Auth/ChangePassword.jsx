import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import { CgSpinnerTwo } from 'react-icons/cg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ChangePassword = () => {
  const [show, SetShow] = useState(false);
  const [showAgain, SetShowAgain] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  // function:
  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    if (data) {
      if (data.newPassword == data.confirmPassword) {
        setTimeout(() => {
          setLoading(false);
          setPasswordChanged(true);
          toast.success('Successfully changed your password !');
          //   navigate('/verify-email');
        }, 2000);
      } else {
        toast.error('Passwords do not match!');
        setLoading(false);
      }
    }
  };
  return (
    <div className="w-full flex h-screen">
      {!passwordChanged ? (
        <div className="w-full h-full flex items-center justify-center">
          <div className="rounded-[24px] border border-[#E5E5E5] w-[573px] py-10">
            <div className="text-center mt-10">
              <h3 className="font-semibold text-2xl">Change Password</h3>
            </div>
            <div className="flex items-center justify-center mt-3 w-2/3 mx-auto text-textLight text-center">
              <p className="flex gap-2 items-center py-2">
                Must be 6-20 characters (letters, numbers or symbols)
              </p>
            </div>

            {/* form */}
            <div className="flex flex-col gap-5 items-center justify-center mt-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                action=""
                className="w-3/4 mx-auto flex flex-col gap-5"
              >
                <div className="w-full relative">
                  <input
                    {...register('newPassword', { required: true })}
                    className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]"
                    placeholder="New Password"
                    type={show ? 'text' : 'password'}
                    name="newPassword"
                    id="newPassword"
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
                <div className="w-full relative">
                  <input
                    {...register('confirmPassword', { required: true })}
                    className="w-full py-4 px-6 focus:outline-none border border-borderColor rounded-[24px]"
                    placeholder="Confirm Password"
                    type={showAgain ? 'text' : 'password'}
                    name="confirmPassword"
                    id="confirmPassword"
                  />
                  <div className="absolute top-1/2 right-5 -translate-y-1/2 z-10">
                    {showAgain ? (
                      <FaRegEye
                        onClick={() => SetShowAgain(!showAgain)}
                        className="size-5 cursor-pointer text-textLight"
                      />
                    ) : (
                      <FaRegEyeSlash
                        onClick={() => SetShowAgain(!showAgain)}
                        className="size-5 cursor-pointer text-textLight"
                      />
                    )}
                  </div>
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
                        'Change Password'
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="rounded-[24px] border border-[#E5E5E5] w-[573px] py-10 px-16 text-center">
            <div className="flex flex-col items-center justify-center my-28">
              <h3 className="font-semibold text-2xl">Change Password</h3>
              <p className="text-textLight mt-5">
                Your Password has been updated. You can now sign in with this
                password.
              </p>
              <button
                type="submit"
                onClick={() => navigate('/dashboard/overview')}
                className={`transition mt-10 flex items-center justify-center h-14 duration-300 hover:bg-transparent hover:text-[#FF4B26] py-4 rounded-[24px] font-semibold bg-[#FF4B26] border border-[#FF4B26] text-white  w-full opacity-100`}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChangePassword;
