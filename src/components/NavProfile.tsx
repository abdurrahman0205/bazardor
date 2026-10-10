'use client'
import { signOut, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';

const NavProfile = () => {


  const { data: session } = useSession()
  
  const handleSignOut = async () => {
    const { data, error } = await signOut();
  }
  // const profileLink = '';

  const profileImageLink = session?.user?.image ? `${session.user.image}` : `https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original`;

  return (
    <div>

      
    

      {session?.user ? <>
        <div className='dropdown'>
          <div className='flex items-center justify-between gap-2 cursor-pointer' role='button' tabIndex={0}>
            <Image src={profileImageLink} width={30} height={30} className='rounded-xl ring-1 ring-green-200 w-9 h-9' alt='Profile'></Image>
            <h1 className='text-[15px]'>{session?.user?.name}</h1>
           
            <MdOutlineArrowDropDown />

          </div>
          <ul className='dropdown-content bg-white py-1 px-3 border border-black w-60 rounded-2xl mt-2' tabIndex={-1}>
            <li className='menu-title'>
              <span className='block truncate text-[20px] font-semibold'>{session?.user?.name}</span>
              <span className='block truncate text-xs opacity-70'>{session?.user?.email}</span>
            </li>
            <li className='mt-3'><Link href='#' className='block text-black font-semibold py-2 px-2 rounded-md w-full cursor-pointer hover:bg-gray-400/30 text-left'>👤 আমার প্রোফাইল</Link></li>
            <li><button onClick={handleSignOut} className=' text-black font-semibold py-2 px-2 rounded-md w-full cursor-pointer hover:bg-gray-400/30 text-left'><span className='text-red-600 '>↩︎</span> সাইন আউট</button></li>
            
        </ul>
        </div></> : <><div className='flex gap-2 items-center'>
          <Link href='/sign-in' className='font-semibold py-2 px-5 rounded-md'>সাইন ইন</Link>
          <Link href='sign-up' className='bg-[#05893E] text-white font-semibold py-2 px-5 rounded-md shadow-md shadow-[#05893E]/50'>সাইন আপ</Link>
        </div></>}

                
    </div>
  );
};

export default NavProfile;