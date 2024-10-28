/* eslint-disable react/prop-types */
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/Components/ui/dialog';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Star } from 'lucide-react';
const ReviewModal = ({ setOpen }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleRating = (value) => {
    setRating(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Review submitted successfully!', { duration: 2000 });
    setOpen(false);
  };
  return (
    <DialogContent className="sm:max-w-[825px] py-[100px] px-14 text-center">
      <DialogHeader>
        <DialogTitle className="text-4xl text-center font-medium font-poppins leading-[1.4]">
          Share your opinion
        </DialogTitle>
        <DialogDescription className="text-[#868686] text-sm w-2/3 mx-auto text-center pt-2">
          Lorem ipsum dolor sit amet consectetur. Nisl commodo mattis fames
          tortor ultricies pretium.
        </DialogDescription>
      </DialogHeader>
      <div className="mt-5 font-poppins space-y-4">
        <div className="w-full flex items-center justify-center gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              className="transition-transform hover:scale-110"
              onClick={() => handleRating(star)}
              onMouseEnter={() => setHover(star)}
              onMouseLeave={() => setHover(0)}
            >
              <Star
                size={32}
                className={`${
                  star <= (hover || rating)
                    ? 'fill-yellow-400 text-yellow-400'
                    : 'fill-transparent text-gray-300'
                } transition-colors`}
              />
            </button>
          ))}
        </div>

        <div className="pt-5">
          <form onSubmit={handleSubmit} action="" className="relative">
            <textarea
              rows={8}
              className="w-full resize-none px-12 placeholder:text-sm py-10 rounded-2xl border border-[#E5E5E5] focus:outline-none"
              placeholder="Write your feedback here..."
            />
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="absolute bottom-5 right-5 flex items-center justify-center gap-2 w-44 mx-auto py-3 rounded-full border border-[#C5C5C5] bg-[#191919] text-white group  transition-all duration-500"
            >
              <span className="transition duration-500">Submit</span>
            </button>
          </form>
        </div>
      </div>
      <DialogFooter></DialogFooter>
    </DialogContent>
  );
};

export default ReviewModal;
