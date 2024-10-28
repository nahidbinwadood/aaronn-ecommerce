import CartCard from '@/Components/Cards/CartCard';
import { Link } from 'react-router-dom';
const Cart = () => {
  const carts = [
    {
      id: crypto.randomUUID(),
      image: 'https://i.postimg.cc/sX3nGJZT/bed.png',
      title:
        'Air Wave Mattress Cool Sleep Supportive and Pressure Relief Air Wrapped Coils Comforthable Mattress TopperAffordable Queen&SS',
      currentPrice: 196.34,
      prevPrice: 330.69,
    },
    {
      id: crypto.randomUUID(),
      image: 'https://i.postimg.cc/sX3nGJZT/bed.png',
      title:
        'Air Wave Mattress Cool Sleep Supportive and Pressure Relief Air Wrapped Coils Comforthable Mattress TopperAffordable Queen&SS',
      currentPrice: 196.34,
      prevPrice: 330.69,
    },
    {
      id: crypto.randomUUID(),
      image: 'https://i.postimg.cc/sX3nGJZT/bed.png',
      title:
        'Air Wave Mattress Cool Sleep Supportive and Pressure Relief Air Wrapped Coils Comforthable Mattress TopperAffordable Queen&SS',
      currentPrice: 196.34,
      prevPrice: 330.69,
    },
    {
      image: 'https://i.postimg.cc/sX3nGJZT/bed.png',
      title:
        'Air Wave Mattress Cool Sleep Supportive and Pressure Relief Air Wrapped Coils Comforthable Mattress TopperAffordable Queen&SS',
      currentPrice: 196.34,
      prevPrice: 330.69,
    },
  ];
  return (
    <div className="my-24 font-poppins">
      <div className="container mx-auto">
        <p>
          Home <span> {'>'} </span> <span className="font-medium">Cart</span>
        </p>
        <div className="mt-16 p-9 rounded-[24px] border border-borderColor">
          {/* table head */}
          <div className="grid grid-cols-12 pb-6 border-b border-borderColor">
            <div className="col-span-6">
              <h3 className="text-xl font-medium">Product Details</h3>
            </div>
            <div className="col-span-2">
              <h3 className="text-xl font-medium">Price</h3>
            </div>
            <div className="col-span-2">
              <h3 className="text-xl font-medium">Quantity</h3>
            </div>
            <div className="col-span-2">
              <h3 className="text-xl font-medium">Total Price</h3>
            </div>
          </div>

          {/* table body */}
          {carts?.map((cart) => (
            <CartCard key={cart?.id} cart={cart} />
          ))}
        </div>

        {/*Order Summary */}
        <div className="mt-16 flex justify-end">
          <div className="w-1/2  p-9 rounded-[24px] border border-borderColor">
            <div className="text-center">
              <h3 className="mt-5 text-xl font-medium pb-6 border-b border-borderColor">
                Order Summary
              </h3>
            </div>
            <div className="flex items-center justify-between pb-6 mt-8 border-b border-borderColor">
              <p>Sub Total</p>
              <p className="font-medium">$ 196.34</p>
            </div>
            <div className="flex items-center justify-between pb-6 mt-8">
              <p>Total</p>
              <p className="font-medium">$ 196.34</p>
            </div>
            <div className="w-full flex items-center justify-center gap-5">
              <Link
                to="/"
                className="w-1/2 border border-borderColor rounded-full py-4 flex items-center justify-center"
              >
                <button>Keep Shopping</button>
              </Link>
              <Link
                to="/checkout"
                className="w-1/2 bg-[#191919] text-white border border-borderColor rounded-full py-4 flex items-center justify-center"
              >
                <button className="">Checkout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
