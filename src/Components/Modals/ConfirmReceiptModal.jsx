import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/Components/ui/dialog';
import toast from 'react-hot-toast';
const ConfirmReceiptModal = ({ setOpen }) => {
  const handleConfirmReceipt = () => {
    toast.success('Recept has confirmed successfully !');
    setOpen(false);
  };
  return (
    <DialogContent className="sm:max-w-[825px] py-[100px] px-[100px] text-center">
      <DialogHeader>
        <DialogTitle className="text-4xl text-center font-medium font-poppins leading-[1.4]">
          Are you sure you want to confirm the receipt of your order?
        </DialogTitle>
        <DialogDescription className="text-[#868686] w-2/3 mx-auto text-base text-center pt-2">
          By clicking “Confirm”, you are confirming that you have received your
          full order in good condition.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-8 font-poppins space-y-4">
        <button
          onClick={handleConfirmReceipt}
          className="flex w-[450px] mx-auto items-center justify-center gap-2 py-3 rounded-full border hover:border-[#C5C5C5] hover:bg-transparent text-white group bg-blackColor border-blackColor transition-all duration-500"
        >
          <span className="group-hover:text-blackColor transition duration-500">
            Confirm
          </span>
        </button>

        <button
          onClick={() => {
            setOpen(false);
          }}
          className="flex items-center justify-center gap-2 w-[450px] mx-auto py-3 rounded-full border border-[#C5C5C5]  group  transition-all duration-500"
        >
          <span className="transition duration-500  ">Cancel</span>
        </button>
      </div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default ConfirmReceiptModal;
