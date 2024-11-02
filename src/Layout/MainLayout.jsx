import { Link, Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import Footer from '../Shared/Footer';
import { FaRegMessage } from 'react-icons/fa6';

const MainLayout = () => {
  return (
    <div className="relative">
      <ScrollRestoration />
      <nav className="font-poppins">
        <Navbar />
      </nav>
      <main className="min-h-[calc(100vh-612px)] overflow-x-hidden">
        <Outlet />
      </main>
      <footer className="font-poppins">
        <Footer />
      </footer>

      {/* message icon */}
      <Link to="/dashboard/message-center" className="fixed hidden right-10 bottom-10 bg-[#FF6F23] p-5 rounded-full z-50">
        <FaRegMessage className='text-white size-5' />
      </Link>
    </div>
  );
};

export default MainLayout;
