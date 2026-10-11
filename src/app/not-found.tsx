import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div className='min-h-full flex justify-center'>
      <div className=''>
        <div className='py-10 px-5 flex flex-col items-center gap-3'>
          <figure className='text-6xl'>
            🧺</figure>
          <h1 className='text-4xl font-bold'>পাতাটি খুঁজে পাওয়া যায়নি
          </h1>
          <p className='text-[14px]'>আপনি যে পণ্য বা পাতাটি খুঁজছেন সেটি সরানো হয়েছে বা কখনো ছিল না।
          </p>
          <Link href='/' className='bg-[#05893E] text-white font-semibold py-2 px-5 rounded-md shadow-md shadow-[#05893E]/50 cursor-pointer w-fit mt-10'>হোম পেজে ফিরে যান</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;