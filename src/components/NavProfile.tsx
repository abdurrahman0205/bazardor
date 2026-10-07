import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const NavProfile = () => {
  return (
    <div>

      <div className='flex gap-2 items-center'>
        <Link href='/sign-in' className='font-semibold py-2 px-5 rounded-md'>সাইন ইন</Link>
        <Link href='sign-up' className='bg-[#05893E] text-white font-semibold py-2 px-5 rounded-md shadow-md shadow-[#05893E]/50'>সাইন আপ</Link>
      </div>


      {/* NavProfile after sign in */}
                {/* <div className='flex items-center justify-between gap-2'>
                  <Image src='https://placehold.net/4.png' width={40} height={40} className='rounded-xl ring-1 ring-green-200' alt='Profile'></Image>
                  <h1 className='text-xl'>Abdur Rahma</h1>
                <MdOutlineArrowDropDown />
                </div> */}
    </div>
  );
};

export default NavProfile;