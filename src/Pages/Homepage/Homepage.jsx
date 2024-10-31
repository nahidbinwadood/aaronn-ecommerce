import Banner from './Sections/Banner';
import Categories from './Sections/Categories';
import ProductsSection from './Sections/ProductsSection';
import RecentlyViewed from './Sections/RecentlyViewed';
import Services from './Sections/Services';

const Homepage = () => {
  return (
    <>
      <Banner />
      <Categories />
      <ProductsSection />
      <RecentlyViewed />
      <Services />
    </>
  );
};

export default Homepage;
