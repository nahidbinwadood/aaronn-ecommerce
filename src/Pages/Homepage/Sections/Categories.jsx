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
      image:
        'https://i.postimg.cc/7hxFdsM9/4.png',
      category: 'Electronics',
      path: '/categories/electronics',
    },
    {
      image:
        'https://i.postimg.cc/j5QV80NC/6.png',
      category: "Women's Clothing",
      path: "/categories/women's-clothing",
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/f340/5244/c28ffff907eee4c4d7f51c55e555eeaf?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cVTT46udQUWMfKNbmYA2QtfzdzP1bq0k2rXbWE~cNgH7qmW3pW8FPoypCmWd3wk9cN6AREK8Mgf-NvqOG9R~se4OIyKKOH7nbGtKDqlr06oT39xN~rMUn3uJrxLaWlmBB-HoYIjBiPubfLKi1I8eAnLObRz9hBraHNJ65gv0GG388wUfPEGGD2xlRtIllYljug49aD1SrViVm5ufVhKdhlmjc~9UEaJiwPEEsEzLkaBDSjwVicSDaIBEgtFnxLwPArrg6t-kaNm7AuAKKu3BRf14AHJi1k5lPQXX03Al5MPQoGIbVoV2Vf~7FjZLabq5cPJ41fUQ~ovAi7EBuROEjg__',
      category: 'Babies & Kids',
      path: '/categories/babies-&-kids',
    },
    {
      image:
        'https://i.postimg.cc/fbdQ90Rc/7.png',
      category: 'Beauty & Health',
      path: '/categories/beauty-&-health',
    },
    {
      image:
        'https://i.postimg.cc/y8tzxTs6/8.png',
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
