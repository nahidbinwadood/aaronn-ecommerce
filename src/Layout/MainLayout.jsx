import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <nav className='font-poppins'>
        <Navbar />
      </nav>
      <main className="min-h-[calc(100vh-612px)]">
        <Outlet />
      </main>
      <footer className='font-poppins'>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
