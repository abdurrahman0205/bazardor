import { getData } from '@/lib/getData';
import { CategoriesType } from '@/lib/type';
import Link from 'next/link';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import NavCategoryTab from './NavBar/NavCategoryTab';

const NavCategories = async() => {
  const categories = await getData('categories');

  //API data error
  if (categories.length === 0) {
    return <div className="flex flex-col items-center justify-center text-center py-2">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-600">
        <IoWarningOutline className='text-sm' />
      </div>    
    </div>
  }
 
  return (
    <div className='flex gap-2 py-2 flex-nowrap whitespace-nowrap overflow-x-auto'>
      {
        categories?.map((category: CategoriesType) => {

          const {id:key, slug,icon, nameBn} = category

          // id={id} slug={slug} icon={icon} nameBn={nameBn} key={id}
          //  
          return <NavCategoryTab key ={key} slug={slug} icon={icon} nameBn={nameBn} />
        })
      }
    </div>
  );
};

export default NavCategories;