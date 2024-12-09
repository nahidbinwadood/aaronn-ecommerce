/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
  const { image, category, path } = item;
  return (
    <Link
      // to={path}
      to='/category'
      className="flex items-center flex-col justify-center gap-5 mr-8 sm:mr-10 md:mr-12  cursor-pointer"
    >
      <div className="size-16 lg:size-20 rounded-full overflow-hidden">
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <p className="font-medium md:font-semibold text-sm md:text-base">{category}</p>
    </Link>
  );
};

export default CategoryItem;
