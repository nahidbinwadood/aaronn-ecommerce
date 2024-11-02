import { YellowPersonSvg } from '@/Components/Svg Container/SvgContainer';

const DashboardMessageCenter = () => {
  return (
    <div className="">
      <div>
        <h2 className="text-[#191919] font-medium text-3xl pb-8 border-b border-[#C5C5C5]">
          Message Center
        </h2>
      </div>
      <div className="h-full flex">

        <div className="h-full p-9 w-full">
          <div className="flex flex-col gap-9">
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-[#F5B145] h-fit">
                <YellowPersonSvg />
              </div>
              <div className="p-6 rounded-[24px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)]">
                <p className="leading-[1.8]">
                  Lorem ipsum dolor sit amet consectetur. Lacinia purus nec nec
                  facilisis. Ut nibh purus sed etiam aliquet facilisis orci urna
                  pretium. Lorem ipsum dolor sit amet consectetur. Lacinia purus
                  nec nec facilisis. Ut nibh purus sed etiam aliquet facilisis
                  orci urna.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-4">
              <div className="p-2 rounded-full bg-[#F5B145] h-fit">
                <YellowPersonSvg />
              </div>
              <div className="p-6 rounded-[24px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)]">
                <p className="leading-[1.8]">
                  Lorem ipsum dolor sit amet consectetur. Lacinia purus nec nec
                  facilisis. Ut nibh purus sed etiam aliquet facilisis orci urna
                  pretium. Lorem ipsum dolor sit amet consectetur. Lacinia purus
                  nec nec facilisis. Ut nibh purus sed etiam aliquet facilisis
                  orci urna.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="p-2 rounded-full bg-[#F5B145] h-fit">
                <YellowPersonSvg />
              </div>
              <div className="p-6 rounded-[24px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)]">
                <p className="leading-[1.8]">
                  Lorem ipsum dolor sit amet consectetur. Lacinia purus nec nec
                  facilisis. Ut nibh purus sed etiam aliquet facilisis orci urna
                  pretium. Lorem ipsum dolor sit amet consectetur. Lacinia purus
                  nec nec facilisis. Ut nibh purus sed etiam aliquet facilisis
                  orci urna.
                </p>
              </div>
            </div>
            <div className="flex flex-row-reverse gap-4">
              <div className="p-2 rounded-full bg-[#F5B145] h-fit">
                <YellowPersonSvg />
              </div>
              <div className="p-6 rounded-[24px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)]">
                <p className="leading-[1.8]">
                  Lorem ipsum dolor sit amet consectetur. Lacinia purus nec nec
                  facilisis. Ut nibh purus sed etiam aliquet facilisis orci urna
                  pretium. Lorem ipsum dolor sit amet consectetur. Lacinia purus
                  nec nec facilisis. Ut nibh purus sed etiam aliquet facilisis
                  orci urna.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <form action="">
              <div className="w-full flex flex-col gap-4">
                <textarea rows={6}
                  className="py-5 resize-none focus:outline px-6 w-full rounded-[24px] shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)]"
                  type="text"
                  name=""
                  id=""
                />
                <button
                  type="submit"
                  className="px-20 py-3 w-fit rounded-full font-medium bg-blackColor text-white border border-blackColor hover:bg-transparent hover:text-blackColor transition duration-300"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMessageCenter;
