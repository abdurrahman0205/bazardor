'use client'
import { signOut, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdOutlineArrowDropDown } from 'react-icons/md';
import ProfileSkeleton from './ProfileSkeleton';

const NavProfile = () => {


  const { data: session, isPending } = useSession()



  const handleSignOut = async () => {
    const { data, error } = await signOut();
  }
  // const profileLink = '';

  const profileImageLink = session?.user?.image ? `${session.user.image}` : `https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original`;

  return (
    <div>




      {isPending ? (<ProfileSkeleton />) : session?.user ? <>
        <div className='dropdown'>
          <div className='flex items-center justify-between gap-2 cursor-pointer hover:bg-base-300 px-2 py-1 transition delay-70 ease-in rounded-xl' role='button' tabIndex={0}>
            <Image src={profileImageLink} width={300} height={300} className='rounded-xl ring-1 ring-base-300 w-9 h-9' alt='Profile'></Image>
            <h2 className='text-[15px] hidden md:block'>{session?.user?.name}</h2>

            <MdOutlineArrowDropDown />

          </div>
          <ul className='dropdown-content bg-white py-1 px-3 border border-black/30 w-60 rounded-2xl mt-2 justify-self-end' tabIndex={-1}>
            <li className='menu-title'>
              <span className='block truncate text-[17px] font-semibold'>{session?.user?.name}</span>
              <span className='block truncate text-xs opacity-80'>{session?.user?.email}</span>
            </li>
            <li className='mt-3'><Link href='/profile' className='block text-black font-semibold py-2 px-2 rounded-md w-full cursor-pointer hover:bg-gray-400/30 text-left'>👤 আমার প্রোফাইল</Link></li>
            <li><button onClick={handleSignOut} className=' text-black font-semibold py-2 px-2 rounded-md w-full cursor-pointer hover:bg-gray-400/30 text-left'><span className='text-red-600 '>↩︎</span>সাইন আউট</button></li>

          </ul>
        </div></> : <><div className='flex gap-2 items-center'>
          <Link href='/sign-in' className='font-semibold py-2 px-5 rounded-md whitespace-nowrap'>সাইন ইন</Link>
          <Link href='sign-up' className='bg-[#05893E] text-white font-semibold py-2 px-5 rounded-md shadow-md shadow-[#05893E]/50 whitespace-nowrap'>সাইন আপ</Link>
        </div></>}


    </div>
  );
};

export default NavProfile;