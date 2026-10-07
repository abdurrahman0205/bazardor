import React, { Suspense } from 'react';
import NavCategories from './NavCategories';
import CurrentDate from './CurrentDate';
import NavProfile from './NavProfile';
import Marquee from './Marquee';
import Link from 'next/link';
import GLoading from '@/app/loading';

const NavBar = () => {
  return (
    <header>
      <div className='border-b border-[#F0F5F0]'>
      <nav className='container mx-auto max-w-5xl pt-3 pb-3'>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <Link href='/'><div className='bg-[#05893E] flex w-10 h-10 items-center justify-center text-xl rounded-xl'>🛒</div></Link>
            <div>
              <Link href='/' className='font-bold text-[22px]'>বাজার দর</Link>
                <Suspense fallback={<GLoading />}>
                  <CurrentDate />
              </Suspense>
            </div>
          </div>
          <NavProfile />
        </div>
      </nav>
      </div>

        <div className='container mx-auto max-w-5xl'>
          <NavCategories />
        </div>
      
      <div>
          <Marquee />
      </div>
    </header>
  );
};

export default NavBar;