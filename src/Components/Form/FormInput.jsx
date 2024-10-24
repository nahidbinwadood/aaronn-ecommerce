/* eslint-disable react/prop-types */
import { SearchSvg } from '../Svg Container/SvgContainer';

const FormInput = ({ placeholder, type, address, bgGray }) => {
  return (
    <div className="relative w-full">
      <input
        className={`w-full focus:outline-none border  px-6 py-4 rounded-[24px] ${
          bgGray ? 'bg-[#DCDADA] border-[#DCDADA] placeholder:text-[#797979]' : 'bg-white border-[#969696]'
        }`}
        type={type}
        name=""
        id=""
        placeholder={placeholder}
      />
      {address && (
        <div className="absolute top-1/2 right-10 -translate-y-1/2">
          <SearchSvg />
        </div>
      )}
    </div>
  );
};

export default FormInput;
