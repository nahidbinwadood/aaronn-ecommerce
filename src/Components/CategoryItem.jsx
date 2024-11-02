/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
  const { image, category, path } = item;
  return (
    <Link
      // to={path}
      to='/category'
      className="flex items-center flex-col justify-center gap-5 mr-8 sm:mr-10 md:mr-12 lg:mr-16 2xl:mr-20 cursor-pointer"
    >
      <div className="size-16 lg:size-20 xl:size-24 rounded-full">
        <img src={image} alt="" />
      </div>
      <p className="font-medium md:font-semibold text-sm md:text-base">{category}</p>
    </Link>
  );
};

export default CategoryItem;
