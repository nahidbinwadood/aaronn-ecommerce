/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';

const CategoryItem = ({ item }) => {
  const { image, category, path } = item;
  return (
    <Link
      to={path}
      className="flex items-center flex-col justify-center gap-5 mr-20 cursor-pointer"
    >
      <div className="size-24 rounded-full">
        <img src={image} alt="" />
      </div>
      <p className="font-semibold">{category}</p>
    </Link>
  );
};

export default CategoryItem;
