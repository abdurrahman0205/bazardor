import { getData } from '@/lib/getData';
import { CategoriesType } from '@/lib/type';
import Link from 'next/link';
import React from 'react';

const NavCategories = async() => {
  const categories = await getData('categories')
  return (
    <div className='flex gap-2 py-2'>
      {
        categories.map((categorie: CategoriesType) => {

          return <div key={categorie.id} className='text-[15px] font-semibold'>
            <Link href={`/${categorie.slug}`} className='flex gap-2 py-2 px-2'>
              <p>{categorie.icon}</p>
              <p>{categorie.nameBn}</p>
            </Link>
          </div>
        })
      }
    </div>
  );
};

export default NavCategories;