import CategoryItem from '@/Components/CategoryItem';
import Title from '@/Components/Title';
import Marquee from 'react-fast-marquee';
import pet from '../../../assets/images/categories/pet.avif';
import home from '../../../assets/images/categories/home.avif';
import men from '../../../assets/images/categories/men.avif';
import electronics from '../../../assets/images/categories/electronics.avif';
import women from '../../../assets/images/categories/women.avif';
import baby from '../../../assets/images/categories/baby.avif';
import beauty from '../../../assets/images/categories/beauty.avif';
import sport from '../../../assets/images/categories/sport.avif';

const Categories = () => {
  const allCategories = [
    {
      image: pet,
      category: 'Pet Supplies',
      path: '/categories/pet-supplies',
    },
    {
      image: men,
      category: 'Men’s clothing',
      path: "/categories/men's-clothing",
    },
    {
      image: home,
      category: 'Home & Garden',
      path: '/categories/home-and-garden',
    },
    {
      image: electronics,
      category: 'Electronics',
      path: '/categories/electronics',
    },
    {
      image: women,
      category: "Women's Clothing",
      path: "/categories/women's-clothing",
    },
    {
      image: baby,
      category: 'Babies & Kids',
      path: '/categories/babies-&-kids',
    },
    {
      image: beauty,
      category: 'Beauty & Health',
      path: '/categories/beauty-&-health',
    },
    {
      image: sport,
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
