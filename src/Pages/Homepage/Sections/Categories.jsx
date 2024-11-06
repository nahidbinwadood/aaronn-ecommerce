import CategoryItem from '@/Components/CategoryItem';
import Title from '@/Components/Title';
import Marquee from 'react-fast-marquee';

const Categories = () => {
  const allCategories = [
    {
      image: ' https://i.postimg.cc/7YLvNRLY/1.png',
      category: 'Pet Supplies',
      path: '/categories/pet-supplies',
    },
    {
      image: ' https://i.postimg.cc/2jGRhYrK/2.png',
      category: 'Men’s clothing',
      path: "/categories/men's-clothing",
    },
    {
      image: 'https://i.postimg.cc/XqQRbfsb/3.png',
      category: 'Home & Garden',
      path: '/categories/home-and-garden',
    },
    {
      image: 'https://i.postimg.cc/7hxFdsM9/4.png',
      category: 'Electronics',
      path: '/categories/electronics',
    },
    {
      image: 'https://i.postimg.cc/j5QV80NC/6.png',
      category: "Women's Clothing",
      path: "/categories/women's-clothing",
    },
    {
      image: 'https://i.postimg.cc/fbdQ90Rc/7.png',
      category: 'Babies & Kids',
      path: '/categories/babies-&-kids',
    },
    {
      image: 'https://i.postimg.cc/fbdQ90Rc/7.png',
      category: 'Beauty & Health',
      path: '/categories/beauty-&-health',
    },
    {
      image: 'https://i.postimg.cc/y8tzxTs6/8.png',
      category: 'Sports & Entertainment',
      path: '/categories/sports-&-entertainment',
    },
  ];
  return (
    <section className="my-10 md:my-16 relative">
      <div className="container mx-auto pt-10 sm:pt-14 md:pt-16 lg:pt-20 2xl:pt-28 pb-10 md:pb-14 lg:pb-16 xl:pb-20 relative z-20">
        <Title title={'Shop By Categories'} />

        <div className="mt-10 md:mt-12 lg:mt-16">
          <Marquee autoFill={true} pauseOnHover={true} speed={50}>
            {' '}
            {allCategories?.map((category) => (
              <CategoryItem key={category.image} item={category} />
            ))}
          </Marquee>
          <Marquee
            direction={'right'}
            autoFill={true}
            pauseOnHover={true}
            speed={50}
            className="mt-10 md:mt-12 lg:mt-16"
          >
            {' '}
            {allCategories?.map((category) => (
              <CategoryItem key={category.image} item={category} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default Categories;
