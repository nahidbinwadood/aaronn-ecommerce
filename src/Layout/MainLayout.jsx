import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from './../Shared/Navbar';
import Footer from '../Shared/Footer';

const MainLayout = () => {
  return (
    <>
      <ScrollRestoration />
      <nav>
        <Navbar />
      </nav>
      <main className="min-h-[calc(100vh-612px)]">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
