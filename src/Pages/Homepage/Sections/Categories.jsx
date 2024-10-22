import Title from '@/Components/Title';

const Categories = () => {
  return (
    <section className="my-40 h-[60vh] bg-[#F8F8F8] relative">
      {/* Right Gradient Box */}
      <div
        style={{
          background:
            'linear-gradient(-90deg, #FFEADF 0%, rgba(245, 245, 245, 0.00) 100%)',
        }}
        className="w-[500px] h-full absolute top-0 right-0 z-10"
      />

      {/* Left Gradient Box */}
      <div
        style={{
          background:
            'linear-gradient(90deg, #FFEADF 0%, rgba(245, 245, 245, 0.00) 100%)',
        }}
        className="w-[500px] h-full absolute top-0 left-0 z-10"
      />

      <div className="container mx-auto pt-28 relative z-20">
        <Title title={'Shop By Categories'} />
      </div>
    </section>
  );
};

export default Categories;
