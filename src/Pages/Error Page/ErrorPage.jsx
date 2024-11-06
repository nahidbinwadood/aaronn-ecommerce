import Footer from '@/Shared/Footer';
import Navbar from '@/Shared/Navbar';
import { Link, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    let navigate=useNavigate()
  return (
    <>
      <nav className="font-poppins">
        <Navbar />
      </nav>
      <div className="min-h-[calc(100vh-475px)] font-poppins overflow-x-hidden flex w-full items-center justify-center py-16">
        <div className="rounded-[24px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.16)] p-28">
          <div className="text-center">
            <h2 className=" font-bold text-9xl text-blackColor">404</h2>
            <p className="text-lg text-center mt-3">Page Not Found</p>
            <p className="w-4/5 mx-auto text-textLight mt-5">
              Oops! The page you&apos;re looking for doesn’t exist or has been
              moved. Try checking the URL
            </p>
            <button onClick={()=>navigate(-1)} className="w-full bg-[#FF4B26] py-3 mt-5 text-white rounded-full hover:bg-transparent hover:text-[#FF4B26] transition duration-300 border border-[#FF4B26] font-medium">
              Go Back
            </button>

            <Link className='pt-5 block text-textLight' to='/dashboard/help-center'>Help Center</Link>
          </div>
        </div>
      </div>

      <footer className="font-poppins">
        <Footer />
      </footer>
    </>
  );
};

export default ErrorPage;
