import DashboardCard from '@/Components/Cards/DashboardCard';

const DashboardOverview = () => {
  return (
    <div>
      <div>
        <h2 className="text-[#191919] font-semibold text-3xl pb-8 border-b border-[#C5C5C5]">
          Overview
        </h2>
      </div>
      <div className="mt-6">
        <div>
          <h3 className="font-semibold text-xl">Wishlist</h3>
        </div>
        <div>
          <DashboardCard variant={"wishlist"}/>
          <DashboardCard variant={"wishlist"}/>
          <DashboardCard variant={"wishlist"}/>
        </div>
      </div>
      <div className="mt-12">
        <div>
          <h3 className="font-semibold text-xl">Viewed</h3>
        </div>
        <div>
          <DashboardCard variant={"viewed"}/>
          <DashboardCard variant={"viewed"}/>
          <DashboardCard variant={"viewed"}/>
        </div>
      </div>
      <div className="mt-12">
        <div>
          <h3 className="font-semibold text-xl">My Orders</h3>
        </div>
        <div>
          <DashboardCard variant={'pending'} />
          <DashboardCard variant={'pending'} />
          <DashboardCard variant={'pending'} />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
