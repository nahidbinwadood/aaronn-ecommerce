import {
    CartSvg,
  DownArrowSvg,
  PersonSvg,
  SearchSvg,
} from '@/Components/Svg Container/SvgContainer';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='font-sans'>
      {/* primary navbar */}
      <div className="bg-primaryColor text-white h-[70px] flex items-center ">
        <div className="container mx-auto w-full flex items-center justify-between">
          <div>
            <Link to="/">
              <h3 className="text-2xl">Logo Here</h3>
            </Link>
          </div>
          <div>
            <form action="">
              <label htmlFor="search" className="relative block w-[750px]">
                <input
                  id="search"
                  className="w-full pl-6 pr-40 py-3 text-black border border-gray-300 rounded-full focus:outline-none placeholder:text-sm text-sm"
                  placeholder="Search for the product"
                />
                <button
                  type="submit"
                  className="absolute cursor-pointer z-10 inset-y-0 right-5 flex items-center"
                >
                  <SearchSvg />
                </button>
              </label>
            </form>
          </div>

          <div className='flex items-center gap-12'>
            <div className="cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="size-6 rounded-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://i.imgur.com/2lC7irs.png"
                    alt=""
                  />
                </div>
                <div className="flex gap-1 items-center">
                  <div>
                    <p className="text-xs">EN / </p>
                    <p className="text-sm">USD</p>
                  </div>
                  <div>
                    <DownArrowSvg />
                  </div>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <div>
                <PersonSvg />
              </div>
              <div>
                <p className="text-xs">Hello</p>
                <div className='flex items-center gap-2'>
                  <p className='text-sm'>Sign In Register</p>
                  <DownArrowSvg />
                </div>
              </div>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
                <div>
                    <CartSvg/>
                </div>
                <div>
                    <p className='text-xs'>0</p>
                    <p className='text-sm'>Cart</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
