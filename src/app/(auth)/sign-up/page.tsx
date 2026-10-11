'use client'
import { signIn, signUp } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { SubmitEvent, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Bounce, toast } from 'react-toastify';

const SignUpPage = () => {

  const onSubmit = async(e: SubmitEvent<HTMLElement>) => {
    e.preventDefault()

    if (password !== confirmPassword) {
      setValidationError(`পাসওয়ার্ড দুটি মিলছে না।`)
      return;
    }

    const formData = new FormData(e.target);
    const newUser = Object.fromEntries(formData.entries()) as {name:string, email: string, password: string} 

    const { data, error } = await signUp.email({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
      callbackURL:'/',
    }, {
      
      onError: (ctx) => {
        toast.error(ctx.error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        })
      },
      onSuccess: () => {
        toast.success('Sign in successfully.', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        })
      }
    })
    
    if (data?.user) {

      redirect('/')
    }
 

  }

  //Social Sign In
  const handleGoogleSignIn = async() => {
      const data = await signIn.social({
        provider: "google",
      }, )
    }
  
    const handleGitHubSignIn = async() => {
      const data = await signIn.social({
        provider: "github",
      }, )
    }

  //Sign Up input validation
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [validationError, setValidationError ] = useState('')

  return (
    <div className='container max-w-5xl mx-auto min-h-screen justify-center flex'>
      <div className='mt-10'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold'>অ্যাকাউন্ট তৈরি করুন</h1>
          <p className='text-[14px] mt-3 text-[#5C655E] font-medium'>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
        </div>
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset bg-white border-base-300 rounded-box w-[70vw] md:w-fit border p-4 mt-4 text-[15px]">

            <label className="label text-black">নাম</label>
            <input type="text" name='name' className="input w-full" placeholder="যেমন: রহিম উদ্দিন" />

            <label className="label text-black mt-3">ইমেইল</label>
            <input type="email" name='email' required className="input w-full" placeholder="you@example.com" />

            <label className="label text-black mt-3">পাসওয়ার্ড</label>
            <input
              name="password"
              type="password"
              required minLength={8}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className="input w-full" placeholder="কমপক্ষে ৮ অক্ষর"

            />

            <label className="label text-black mt-3 md:w-full">পাসওয়ার্ড নিশ্চিত করুন</label>
            <input type="password"
              required minLength={8}
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value)
                
              }}
              className="input w-full" placeholder="আবার লিখুন" />
            {validationError && <p className='text-error'>{validationError}</p>} 
            <button className='bg-[#05893E] text-white font-semibold py-2 px-5 rounded-md shadow-md shadow-[#05893E]/50 mt-5 cursor-pointer'>অ্যাকাউন্ট তৈরি করুন</button>

            <div className="divider">অথবা</div>

            <div className='flex flex-col md:flex-row gap-1 font-bold'>
              <button
                onClick={handleGoogleSignIn}
                className='btn '>
                <FcGoogle /> Google দিয়ে চালিয়ে যান</button>
              <button
                onClick={handleGitHubSignIn}
                className='btn'>
                <FaGithub /> GitHub দিয়ে চালিয়ে যান</button>
            </div>
            <span className='mt-3 text-center'>অ্যাকাউন্ট আছে? <Link href='/sign-in' className='text-[#299A5A]'>সাইন ইন করুন</Link></span>
          </fieldset>
        </form>
        <div className='text-center mt-10'>
          <Link href='/'><span className='text-[#717973]'>← হোম পেজে ফিরে যান</span></Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;