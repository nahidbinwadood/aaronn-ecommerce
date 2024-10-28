import DashboardCard from "@/Components/Cards/DashboardCard";

const DashboardWishlist = () => {
  return (
    <div>
      <div>
        <h2 className="text-[#191919] font-medium text-3xl pb-8 border-b border-[#C5C5C5]">
          All Items
        </h2>
      </div>
      <div>
        <DashboardCard variant={'wishlist'} />
        <DashboardCard variant={'wishlist'} />
        <DashboardCard variant={'wishlist'} />
      </div>
    </div>
  );
};

export default DashboardWishlist;
