import {
  CartBlack,
  CrossSvg,
  DeleteBlackSvg,
  YellowStarSvg,
} from '@/Components/Svg Container/SvgContainer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal } from '../Modals/Modal';
import ConfirmReceiptModal from '../Modals/ConfirmReceiptModal';
import ReviewModal from '../Modals/ReviewModal';
import DeleteModal from '../Modals/DeleteModal';

// eslint-disable-next-line react/prop-types
const DashboardCard = ({ variant }) => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState('');
  const [showTracking, setShowTracking] = useState(false);
  console.log(modalType);
  return (
    <div className="flex w-full items-center justify-between py-8 border-b border-[#C5C5C5]">
      {/* Modal */}
      <Modal open={open} setOpen={setOpen}>
        {modalType && modalType === 'confirmReceipt' && (
          <ConfirmReceiptModal setOpen={setOpen} />
        )}
        {modalType && modalType === 'review' && (
          <ReviewModal setOpen={setOpen} />
        )}
        {modalType && modalType === 'delete' && (
          <DeleteModal setOpen={setOpen} />
        )}
      </Modal>
      <div className="flex gap-7 w-4/5">
        <div className="size-[200px]">
          <img
            className="h-full w-full object-cover rounded-[24px]"
            src="https://i.postimg.cc/sX3nGJZT/bed.png"
            alt=""
          />
        </div>
        <div className="w-[70%]">
          <div>
            <h4 className="text-xl font-medium">
              Air Wave Mattress Cool Sleep Supportive and Pressure Relief Air
              Wrapped Coils Comforthable Mattress Topper Affordable Queen&SS
            </h4>

            {/* price */}
            <div className="mt-5 flex items-center gap-2">
              <p className="text-2xl font-medium">$88.00</p>

              {/* showing price */}
              {variant && (variant == 'wishlist' || variant == 'viewed') && (
                <span className="text-[#5A5C5F] text-base line-through">
                  $210.70
                </span>
              )}

              {/* quantity */}
              {variant &&
                (variant == 'pending' ||
                  variant == 'awaitingDelivery' ||
                  variant == 'completed') && (
                  <span className="text-[#5A5C5F] text-base flex items-center gap-2">
                    <CrossSvg /> 1
                  </span>
                )}
            </div>

            {/* stars */}
            <div className="mt-6 flex items-center gap-5">
              <div className="flex items-center gap-2">
                <YellowStarSvg />
                <YellowStarSvg />
                <YellowStarSvg />
                <YellowStarSvg />
                <YellowStarSvg />
              </div>
              {/* rating */}
              <div>
                <p className="font-semibold ">
                  4.9 <span className="pl-2 font-normal">74 Reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        {variant && (variant == 'wishlist' || variant == 'viewed') && (
          <>
            <button
               
              className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border border-[#C5C5C5] group hover:bg-blackColor hover:border-blackColor transition-all duration-500"
            >
              <CartBlack />
              <span className="group-hover:text-white transition duration-500">
                Add To Cart
              </span>
            </button>
            <button
              onClick={() => {
                setOpen(true);
                setModalType('delete');
              }}
              className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border border-[#C5C5C5] group hover:bg-blackColor hover:border-blackColor transition-all duration-500"
            >
              <DeleteBlackSvg />
              <span className="group-hover:text-white transition duration-500">
                Delete
              </span>
            </button>
          </>
        )}

        {variant && variant === 'pending' && (
          <>
            <Link
              to="/checkout"
              className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border hover:border-[#C5C5C5] hover:bg-transparent text-white group bg-blackColor border-blackColor transition-all duration-500"
            >
              <span className="group-hover:text-blackColor transition duration-500">
                Pay Now
              </span>
            </Link>
            <button className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border border-[#C5C5C5] group hover:bg-blackColor hover:border-blackColor transition-all duration-500">
              <span className="group-hover:text-white transition duration-500">
                Edit Address
              </span>
            </button>
          </>
        )}

        {variant && variant === 'awaitingDelivery' && (
          <>
            <button
              onClick={() => {
                setOpen(true);
                setModalType('confirmReceipt');
              }}
              className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border hover:border-[#C5C5C5] hover:bg-transparent text-white group bg-blackColor border-blackColor transition-all duration-500"
            >
              <span className="group-hover:text-blackColor transition duration-500">
                Confirm Receipt
              </span>
            </button>
            <div className="relative">
              <button
                onMouseEnter={() => setShowTracking(true)}
                onMouseLeave={() => setShowTracking(false)}
                className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border border-[#C5C5C5] transition-all duration-500"
              >
                <span className="transition duration-500">Track Order</span>
              </button>

              {/* tracking */}
              <div
                onMouseEnter={() => setShowTracking(true)}
                onMouseLeave={() => setShowTracking(false)}
                className={`p-6 text-black absolute left-1/2 transform -translate-x-1/2 cursor-pointer
                  ${
                    showTracking
                      ? 'opacity-100 transition-all duration-500 z-10 top-5 '
                      : 'opacity-0 transition-all duration-500 -z-10 top-8'
                  }
                  `}
              >
                <div className="relative w-[350px] h-[289px]">
                  <div
                    className="absolute top-0 left-[55%] -translate-x-1/2 w-full h-full bg-[#F7F7F7] border border-[#C5C5C5] shadow-lg"
                    style={{
                      clipPath:
                        "path('M20 51.3579C20 38.1031 30.7452 27.3579 44 27.3579H141.5L154 16L167.5 27.3579H259C272.255 27.3579 283 38.1031 283 51.3579V241C283 254.255 272.255 265 259 265H44C30.7452 265 20 254.255 20 241V51.3579Z')",
                    }}
                  >
                    <div className="top-0 inset-0 absolute left-0 z-10 mt-14 ml-12">
                      <div className="flex gap-3">
                        <div className="w-15% flex flex-col">
                          <div className="h-16">
                            <div className="size-4 rounded-full bg-[#1877F2] mt-[3px]" />
                            <div className="h-full flex items-center justify-center">
                              <div className="h-full w-[2px] bg-[#cfcfcf]"></div>
                            </div>
                          </div>
                          <div className="h-16">
                            <div className="size-4 rounded-full bg-[#1877F2] mt-[3px]" />
                            <div className="h-full flex items-center justify-center">
                              <div className="h-full w-[2px] bg-[#cfcfcf]"></div>
                            </div>
                          </div>
                          <div className="h-16">
                            <div className="size-4 rounded-full bg-[#1877F2] mt-[3px]" />
                            <div className="h-full flex items-center justify-center"></div>
                          </div>
                        </div>
                        <div className="w-full flex flex-col">
                          <div className="h-16 space-y-2">
                            <h5 className="font-semibold text-sm">
                              Lorem ipsum dolor sit am
                            </h5>
                            <p className="text-[#5A5C5F] text-xs">
                              jul 21, 2024, 21:3
                            </p>
                          </div>
                          <div className="h-16 space-y-2">
                            <h5 className="font-semibold text-sm">
                              Lorem ipsum dolor sit am
                            </h5>
                            <p className="text-[#5A5C5F] text-xs">
                              jul 21, 2024, 21:3
                            </p>
                          </div>
                          <div className="h-16 space-y-2">
                            <h5 className="font-semibold text-sm">
                              Lorem ipsum dolor sit am
                            </h5>
                            <p className="text-[#5A5C5F] text-xs">
                              jul 21, 2024, 21:3
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {variant && variant === 'completed' && (
          <>
            <button
              onClick={() => {
                setOpen(true);
                setModalType('review');
              }}
              className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border hover:border-[#C5C5C5] hover:bg-transparent text-white group bg-blackColor border-blackColor transition-all duration-500"
            >
              <span className="group-hover:text-blackColor transition duration-500">
                Write a Review
              </span>
            </button>
            <div className="relative">
              <button
                onClick={() => {
                  setOpen(true);
                  setModalType('delete');
                }}
                className="flex items-center justify-center gap-2 w-52 py-3 rounded-full border border-[#C5C5C5]  hover:bg-blackColor group hover:border-blackColor transition-all duration-500"
              >
                <span className="transition duration-500 group-hover:text-white">
                  Delete
                </span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardCard;
