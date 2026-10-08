import React from 'react';
import BannerImage from '@/assets/bazar-hero.png'
import Image from 'next/image';
import CurrentDate from './CurrentDate';

const Banner = () => {
  return (
    <section className='mt-10'>
      <div className='container mx-auto max-w-5xl'>
        <div className='flex flex-col lg:flex-row justify-between px-1.5 py-2 rounded-3xl bg-white'>
          <div className='text-left pl-3'>
            <span className='block bg-[#E1F0E7] rounded-2xl px-4 py-1 text-[#05893E]  w-fit text-center font-semibold'><CurrentDate /></span>
            <h1 className='text-3xl font-bold mt-3'>আজকের বাজারের দাম এক নজরে</h1>
            <p className='text-[15px] my-6  max-w-150'>চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।</p>
            <a href="#"><button className='bg-[#05893E] text-white font-semibold py-2 px-5 rounded-md shadow-md shadow-[#05893E]/50'>সব পণ্য দেখুন</button></a>

          </div>
          <div className='flex items-center justify-center'>
            <Image src={BannerImage} alt='Banner Image' width={290} height={290} className='mt-10' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;