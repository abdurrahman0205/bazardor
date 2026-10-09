import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SignInPage = () => {
  return (
    <div className='container max-w-5xl mx-auto min-h-screen justify-center flex'>
      <div className='mt-10'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>সাইন ইন করুন</h1>
          <p className='text-[14px] mt-3 text-[#5C655E] font-medium'>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
        </div>
        <fieldset className="fieldset bg-white border-base-300 rounded-box w-[70vw] md:w-fit border p-4 mt-4 text-[15px]">


          <label className="label text-black mt-3">ইমেইল</label>
          <input type="email" className="input w-full" placeholder="you@example.com" />

          <label className="label text-black mt-3">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর"

          />


          <button className='bg-[#05893E] text-white font-semibold py-2 px-5 rounded-md shadow-md shadow-[#05893E]/50 mt-5 cursor-pointer'>সাইন ইন</button>

          <div className="divider">অথবা</div>

          <div className='flex flex-col md:flex-row gap-1 font-bold'>
            <button className='btn '>
              <FcGoogle /> Google দিয়ে চালিয়ে যান</button>
            <button className='btn'>
              <FaGithub /> GitHub দিয়ে চালিয়ে যান</button>
          </div>
          <span className='mt-3 text-center'>অ্যাকাউন্ট নেই? <Link href='/sign-in' className='text-[#299A5A]'>সাইন আপ করুন</Link></span>
        </fieldset>
        <div className='text-center mt-10'>
          <Link href='/'><span className='text-[#717973]'>← হোম পেজে ফিরে যান</span></Link>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;