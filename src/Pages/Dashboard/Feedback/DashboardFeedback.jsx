import FeedBackCard from '@/Components/Cards/FeedBackCard';

const DashboardFeedback = () => {
  return (
    <div>
      <div>
        <h2 className="text-[#191919] font-semibold text-3xl pb-8 border-b border-[#C5C5C5]">
          Feedback
        </h2>
      </div>
      <div className="mt-6">
        <div className='flex justify-between gap-20'>
          <h3 className="font-semibold text-xl w-[70%]">Order Details</h3>
          <h3 className="font-semibold text-xl w-[30%]">Feedback</h3>
        </div>
        <div>
          <FeedBackCard variant={'awaitingDelivery'} />
          <FeedBackCard variant={'awaitingDelivery'} />
        </div>
       
      </div>
    </div>
  );
};

export default DashboardFeedback;
