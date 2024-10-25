import DashboardCard from '@/Components/Cards/DashboardCard';
import { useState } from 'react';

const DashboardOrders = () => {
  const [active, setActive] = useState('All');
  const tabs = [{ title: 'All' }, { title: 'Unpaid' }, { title: 'Completed' }];
  return (
    <div>
      <div>
        <div className=" flex items-center gap-12 font-semibold pb-8 border-b border-[#C5C5C5]">
          {tabs?.map((tab) => (
            <h2
              key={tab?.title}
              onClick={() => setActive(tab?.title)}
              className={`cursor-pointer text-2xl transition-all duration-300 ${
                tab.title == active ? ' text-blackColor' : 'opacity-50'
              }`}
            >
              {tab.title == 'Unpaid' ? (
                <span>{tab?.title} (2)</span>
              ) : (
                tab?.title
              )}
            </h2>
          ))}
        </div>
      </div>

      {active === 'All' && (
        <>
          {/* awaiting delivery */}
          <div className="mt-6">
            <div>
              <h3 className="font-semibold text-xl">Awaiting Delivery</h3>
            </div>
            <div>
              <DashboardCard variant={'awaitingDelivery'} />
              <DashboardCard variant={'awaitingDelivery'} />
            </div>
          </div>

          {/* pending*/}
          <div className="mt-6">
            <div>
              <h3 className="font-semibold text-xl">Pending</h3>
            </div>
            <div>
              <DashboardCard variant={'pending'} />
              <DashboardCard variant={'pending'} />
            </div>
          </div>

          {/* finished */}

          <div className="mt-6">
            <div>
              <h3 className="font-semibold text-xl">Finished</h3>
            </div>
            <div>
              <DashboardCard variant={'completed'} />
              <DashboardCard variant={'completed'} />
            </div>
          </div>
        </>
      )}
      {active === 'Unpaid' && (
        <div className="transition-all duration-500">
          {/* awaiting delivery */}
          <div className="mt-6">
            <div>
              <h3 className="font-semibold text-xl">Unpaid</h3>
            </div>
          </div>

          {/* finished */}

          <div>
            <DashboardCard variant={'pending'} />
            <DashboardCard variant={'pending'} />
          </div>
        </div>
      )}
      {active === 'Completed' && (
        <div className="transition-all duration-500">
          {/* awaiting delivery */}
          <div className="mt-6">
            <div>
              <h3 className="font-semibold text-xl">Completed</h3>
            </div>
          </div>

          {/* finished */}

          <div>
            <DashboardCard variant={'completed'} />
            <DashboardCard variant={'completed'} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardOrders;
