/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/Components/ui/dialog';
import toast from 'react-hot-toast';

const DeleteModal = ({ setOpen }) => {
  return (
    <DialogContent className="sm:max-w-[525px] py-20 px-14 text-center">
      <DialogHeader>
        <DialogTitle className="text-3xl text-center font-medium font-poppins leading-[1.4]">
          Are You Sure To Delete?
        </DialogTitle>
        <DialogDescription className="text-[#868686] text-base w-2/3 mx-auto text-center pt-2">
          You won&apos;t be able to revert this!
        </DialogDescription>
      </DialogHeader>
      <div className="mt-5">
        <div className="w-full flex items-center justify-between">
          <button
            onClick={() => {
              setOpen(false);
              toast.success('Deleted successfully!', {
                duration: 3000,
              });
            }}
            className="flex items-center justify-center gap-2 w-40 mx-auto py-3 rounded-full border border-[#C5C5C5]  group  transition-all duration-500 bg-green-500 text-white"
          >
            <span className="transition duration-500">Yes,Delete it!</span>
          </button>
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="flex items-center justify-center gap-2  w-40 mx-auto py-3 rounded-full border border-[#C5C5C5]  group  transition-all duration-500 bg-red-500 text-white"
          >
            <span className="transition duration-500 ">Cancel</span>
          </button>
        </div>
      </div>
    </DialogContent>
  );
};

export default DeleteModal;
