import Title from '@/Components/Title';
import Services from '../Homepage/Sections/Services';
import TopPicks from './TopPicks';
import Marquee from 'react-fast-marquee';
import CategoryItem from '@/Components/CategoryItem';
import ItemCard from '@/Components/Cards/ItemCard';
import Banner from '@/Components/Banner';
const WelcomePage = () => {
  const allCategories = [
    {
      image:
        'https://s3-alpha-sig.figma.com/img/4c0f/3415/f7d784654821fb30a4e29686067564f3?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hSm5SbCgCSmNp3rK-y0O7sYxjEhfnVcjWJZh6G-qDdsq8hvtPzANIXu-Q2tSSbXotNnWQaeDwUqyPpBmnNZu66wvp8sxW4Tnd4a3-F8mmjDEtcLYz67UPA2OL1ybp4MOmlr8gmAoujDDWiuaTS8HTRXjts4wP8KwbNuqG5bz~EB3Dt8gTKiiU0RDuBlhtYgeahWL3KlUy3sDxzPUViZf6by3Mui0eEsTgG75AexusmDmi4L7V1iSiK0uEmnsItm1jMlSVYKmi99nDcFhxv3qBi4q8JBXucPHLaeTCLrEnbQgSpG~CY3jdH9zuDLxgRucCXcJLsHZL69ynujcvJiplQ__',
      category: 'Pet Supplies',
      path: '/categories/pet-supplies',
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/8f3a/0a5c/f5c164f69f3571d1b70e82d8128db283?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HVuTU~33QoerSXVbNJjLF55LwKJwNsDarnCIkA7ppwcjsoAFOItDKCpahWSQdQmFWrw0iWSm1Tz--dwkr5U4CYd9cxuEoWTHISM2665Q94UKeU~jsC1M9Lac5QbZGfmmlrfjthVRru07-GE-PXUfV~BQqDKgStMY6hGtmjPCR~eSvhk75zWRPExqdiJNKVv6PBLSmJgxKf1UIUIIzMh6YQrwbwnJIJ0Vf6IUfhKh7dYUSiS405wcWUS0mWArHLPACcCUflcLGSBVRMa7MXskYMdpFK9jUbasOzm5bW5~TZMP5bJ3w9nwrqLQiCZnH0AkzjrO3LWwrmGW77qDFQlhjA__',
      category: 'Men’s clothing',
      path: "/categories/men's-clothing",
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/257f/6c4e/5753955ac7a6a35499690b3ba381fc7d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jxLfjhqE0~f2KkJHVGP4fyr8GJ9S1IBFR7ySY70ImhVc7OdXRKaq110GpxYi4RKHgFWb8YuRAutAFUMbwl53NdBjgQ7E5qJ4i65aYGGih4ge7p39LRzJUb5PLtp5rBFUAnHF5RDamq4PayLQ1Z009z0k~kuCfD-GZJ~rvvohcXPwz3GfoHYG8Jo-y-tNEBA1rc5CoHW~yv-YH6e-UjiHXuGeVWujPjAZBRK~8uextuBiEcEdGgUWkVudal9vbwVficOd7Gf5qS9yx4ayDLoIuvkYi3YsyGxOI4RkerJf8bsGHmKfXXaVFIh3N~Gf6YmDVfc0wBfsJ2sOyg7yVDg2PA__',
      category: 'Home & Garden',
      path: '/categories/home-and-garden',
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/31a1/7357/a78e2b200b66b3f190b9d6e03c5cd573?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XRN5yDmPSGyDoVBXsaa5LsY2Z9f0jWNZdF2ilQbRtYTYKaxZIu4Vg8vjkpxIBlfR6IoUnYsBqKB9fBRUvSdaAI58lGXnIzRAf-twtNSc-EPxZcecdv6zTvF56Tn0ReZ7U3RfKce30xiJnRHPQVxcqt-bDV9N9Y-sjhNURzrjWg59NfRq3tqCq2fL3pYi3WJxjX148Z6UIL0d1Dr~5is2fj2o2-FTQhckrPh8PULXExWI9MX8tFif1WJtQPT~UpYucfNbxSXTgNEoq4R5gb1P9ZQVN0sbMdXpUvWdmDcfskmdP6kl0cUsGF2RuBj4RT1ZW3QpDerTLpccZ4gma8e79w__',
      category: 'Electronics',
      path: '/categories/electronics',
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/4930/b994/fe2ee3774fb78c4f1401c8faa97b6910?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k-3bPcZ06ciXUEX95yTdP8743i3oqJvzkkAWMUgVvraol357UcSwKmbTTY5AMoCvWeN0FEifpJGpeE-fMmznqwsfC7hHiVDIkbEB71UoPA~lUP~e1W2Y4txoHiUHg8NTtprZ0iZ3o2~jEnw3NEpdoHJfIhvYtA7Wv8-gTv4mPLdAnR1xRyW-~B9OR6WYvjZrj4b2EbeZgGrZsXA5kp3IOA1RvXJE-vBm5w3jY73BBozPK4t92-wHEAwVgmqkxK-GJ-Dgqi1Os1G-XlOf2qmiblADYZXDkEgYZlvGdGKA3nf9d9ocAL0UAWcklTej~wWoFDWQUjuq7mz~o8xQ0w1uAw__',
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
        'https://s3-alpha-sig.figma.com/img/36e5/9a68/85aa16598ec5ae9517de750f51e20005?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=keuoC0GhAsj5xC8LrmaL1fjsPvWF4pcvMHR-OUt2~X1SP4zuUF1oUWV~8VDTrgHHlZLIBTv-VUGB6YIuY1yCg6BC6-1VtIe6ydMJRrZ84ndyJV6cHuwM6SeCdK9RfrD7T5aWYvXPPXUX5Bh8ghZWpR-AjRKFG~DYWh~P6NXupuqWhv997Ajz-Xyrow8J5irNrThQak~r-iexfXIatFQB1HCoGV2PHuG8syO7jnJS9CK11vymx7CoRwPgXog-MS8EcBAa3EbmTLVkhkkZMUDQfrrgBVi86eFI3IRno6qVc5u4UsUdAabkPj4kkN7F8mqSzOR64129EE4xuObt6mH0eA__',
      category: 'Beauty & Health',
      path: '/categories/beauty-&-health',
    },
    {
      image:
        'https://s3-alpha-sig.figma.com/img/da35/fc38/500cc1271e5390a651973a1ea84feb5c?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YnQx-ImYF0OSzineXKA3pqcxQoEHvIP53o25tcC7WHYq4-EoJxOpeVqVI42u3URB6p-JaG94uQ0V9QSdqDQN7caXRWcZZZ6VjsMijFxq4y4b9MQUhWJj7fOYbQ2UgyJX-6ykBuAxsyZ~WAs3VKJ6IDTqV3Qqh5tjw501OBgquq7ra6N~czpvfezXWZos8pGc1srWTZWC0EMWNTGWekL3mipSPe2tk7yjYFXuv6Dnblya79eEpMq~VAlSvuAH9vmjw9E4h~xHq4pWbsXWXhwTzvwvAvMdvPLDvy2NuJ8BsY0rSKhYm2gsImR~E~49p8WcyFdeuFap6yMaayctQ2Pedg__',
      category: 'Sports & Entertainment',
      path: '/categories/sports-&-entertainment',
    },
  ];
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
    <section>
      <Banner title={'Welcome deals'} secondaryTitle={'Up to 70% Off'} />
      <div className="container mx-auto">
        <TopPicks />
      </div>

      {/* Categories */}
      <section className="my-40  bg-[#F8F8F8] relative">
        <div className=" pt-28 pb-28 relative z-20">
          <Title title={'Discover our welcome deals'} />

          <div className="mt-16">
            <Marquee autoFill={true} pauseOnHover={true} speed={50}>
              {' '}
              {allCategories?.map((category) => (
                <CategoryItem key={category.image} item={category} />
              ))}
            </Marquee>
          </div>
        </div>
      </section>

      {/* Products Page */}
      <div>
        <section className="container mx-auto">
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
      </div>
      <Services />
    </section>
  );
};

export default WelcomePage;
