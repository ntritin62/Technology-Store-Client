import React from 'react';
import { useLoaderData, NavLink } from 'react-router-dom';
const data = ['cold coffee', 'hot coffee', 'hot tea', 'cold tea'];
const Sidebar = ({ brands }) => {
  console.log(brands);
  return (
    <div className="max-w-[230px] w-full md:max-w-full relative">
      <div className="fixed">
        <h2 className="text-4xl font-bold sm:text-3xl sm:font-medium">
          Brands
        </h2>
        <nav className="flex flex-col gap-[16px] mt-[20px] md:flex-row md:overflow-x-auto">
          {brands.map((brand) => (
            <NavLink
              key={brand.brandName}
              to={`./${brand.brandName}`}
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center rounded-[10px] justify-between pl-[20px] font-bold h-[60px] flex-shrink-0 bg-active-sidebar dark:text-text text-dark-text w-full md:w-[148px] md:h-[38px] md:text-2xl md:font-medium'
                  : 'flex items-center rounded-[10px] justify-between pl-[20px] font-bold h-[60px] flex-shrink-0 dark:bg-dark-sidebar bg-sidebar w-full md:w-[148px] md:h-[38px] md:text-2xl md:font-medium'
              }
            >
              {brand.brandName}
              <img
                src={brand.logoImage}
                alt=""
                className="w-[70px] h-[50px] object-contain md:w-[44px] md:h-[30px]"
              />
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
