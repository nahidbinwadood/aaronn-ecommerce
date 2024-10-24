import ItemCard from '@/Components/Cards/ItemCard';
import Title from '@/Components/Title';

const ProductsSection = () => {
  const allProducts = [
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.33,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/SQQlarb.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/SQQlarb.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/SQQlarb.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/SQQlarb.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/SQQlarb.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/ia0QnBP.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/SQQlarb.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
    {
      image: 'https://i.imgur.com/LRfGo6D.png',
      title: 'Xiaomi Mijia vacuum Cleaner',
      review: 5,
      price: 196.34,
      previousPrice: 330.69,
    },
  ];
  return (
    <section className="container mx-auto">
      <Title title={'More to Love'} />

      <div className="mt-20 grid grid-cols-4 gap-8">
        {allProducts?.map((item, idx) => (
          <ItemCard key={idx} item={item} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center pt-20">
        <button className="bg-[#191919] px-8 py-3 rounded-full text-white  ">
          Load More
        </button>
      </div>
    </section>
  );
};

export default ProductsSection;
