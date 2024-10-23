import ItemCard from '@/Components/Cards/ItemCard';

const TopPicks = () => {
  const topPicks = [
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
  ];
  return (
    <section className="pt-20">
      <h2 className="text-4xl font-semibold pb-16 "> Top Picks</h2>
      <div className="grid grid-cols-4 gap-7">
        {topPicks.map((item) => (
          <ItemCard key={item?.image} item={item} />
        ))}
      </div>
    </section>
  );
};

export default TopPicks;
