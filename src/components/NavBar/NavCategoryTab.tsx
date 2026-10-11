'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavCategoryTabPropsType {

  slug: string 
  icon: string
  nameBn: string 
}

const NavCategoryTab = ({ slug, icon, nameBn }: NavCategoryTabPropsType) => {
  
  const path = usePathname()

  //path

  return (
    <div className={`text-[15px] font-semibold py-1`}>
      <Link href={`/category/${slug}`} className={`flex gap-2 py-1  px-2 ${path === `/category/${slug}` ? 'bg-[#057C37] rounded-md ease-in-out text-white' : ''}`}>
        <p>{icon}</p>
        <p className='shrink-0 flex-nowrap'>{nameBn}</p>
      </Link>
    </div>
  );
};

export default NavCategoryTab;