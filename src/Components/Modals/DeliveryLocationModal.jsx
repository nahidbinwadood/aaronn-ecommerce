/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/Components/ui/dialog';
 
import { Link } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/Components/ui/select';
import toast from 'react-hot-toast';
const DeliveryLocationModal = ({ setOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //  toast.success('Review submitted successfully!', { duration: 2000 });
    // setOpen(false);
  };
  return (
    <DialogContent className="w-[550px] py-7 px-10 text-center">
      <DialogHeader>
        <DialogTitle className="text-2xl text-center font-semibold font-poppins leading-[1.4]">
          Choose Your location
        </DialogTitle>
        <DialogDescription className="text-[#5A5C5F] text-base mx-auto text-center pt-4">
          Delivery options and delivery speeds may vary for different locations
        </DialogDescription>
      </DialogHeader>
      <div className="font-poppins space-y-4">
        <div className="w-full flex items-center justify-center gap-2">
          <Link
            to="/login"
            className="w-full bg-[#FF4B26] py-3 rounded-full text-white border border-white"
          >
            Sign In to see your Address
          </Link>
        </div>
        <div className="flex items-center gap-3 text-nowrap pt-4">
          <div className="w-full border-t border-[#C5C5C5]" />
          <p className="text-[#5A5C5F]">or enter a US zip code</p>
          <div className="w-full border-t border-[#C5C5C5]" />
        </div>

        <div className="pt-3">
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex items-center gap-4"
          >
            <input
              className="border outline-none py-3 rounded-full px-5 w-full"
              type="text"
              name=""
              id=""
            />
            <button
              onClick={() => {
                // setOpen(false);
              }}
              className="px-8 bg-transparent text-[#FF4B26] py-3 rounded-full border border-[#FF4B26] hover:border-[#FF4B26] hover:bg-transparent hover:text-[#FF4B26] duration-300 transition"
            >
              <span>Apply</span>
            </button>
          </form>
        </div>

        <div className="flex items-center gap-3 text-nowrap pt-4">
          <div className="w-full border-t border-[#C5C5C5]" />
          <p className="text-[#5A5C5F]">or ship outside the US</p>
          <div className="w-full border-t border-[#C5C5C5]" />
        </div>

        <div className='pt-3'>
          <Select>
            <SelectTrigger className="w-full h-12 rounded-full border-[#C5C5C5] px-5">
              <SelectValue placeholder="United State" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Location</SelectLabel>
                <SelectItem value="apple">United State</SelectItem>
                <SelectItem value="United Kingdom">United Kingdom</SelectItem>
                <SelectItem value="Canada">Canada</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="w-full flex justify-end pt-5">
          <button
            onClick={() => {
                toast.success("Location Saved !")
              setOpen(false);
            }}
            className="px-8 bg-[#FF4B26] py-3 rounded-full text-white border border-white"
          >
            <span>Done</span>
          </button>
        </div>
      </div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default DeliveryLocationModal;
