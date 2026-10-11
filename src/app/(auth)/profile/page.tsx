'use client'
import { changeEmail, signOut, updateUser, useSession } from '@/lib/auth-client';
import Image from 'next/image';
import React, { SubmitEvent, useState } from 'react';

const Profile = () => {

  const { data: session } = useSession();

  const handleSignOut = async () => {
    const { data, error } = await signOut();
  }

  const handleUpdateUser = async (e: SubmitEvent<HTMLElement>) => {
    e.preventDefault()
    const formData = new FormData(e.target);
    const updateData = Object.fromEntries(formData.entries()) as { name: string, image: string, email: string };

    console.log('User provied updated info', updateData);


    if (updateData.name !== '') {
      await updateUser({
        name: updateData.name
      })

    }

    if (updateData.image !== '') {
      await updateUser({
      image: updateData.image
      })
    }

    if (updateData.email !== '') {
      await changeEmail({
        newEmail: updateData.email
      })
    }
    setEdit(false)
    e.target.reset()
  }

  const [edit, setEdit] = useState(false);

  

  return (
    <div className='mt-[3%]'>
      <div className='container mx-auto max-w-5xl px-30 flex flex-col gap-8'>
        <div className=''>
          <h1 className='text-3xl font-bold'>আমার প্রোফাইল</h1>
          <p className='text-[14px] text-black/70 mt-2'>আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।</p>
        </div>
        <div className='flex justify-between items-center bg-white py-4 px-5 rounded-3xl'>
          <div className='flex items-center justify-start gap-3'>
            <figure className='overflow-hidden rounded-2xl bg-gray-400 w-20 h-20'>
              <Image src={session?.user?.image ?? 'https://upload.wikimedia.org/wikipedia/commons/f/f8/Profile_photo_placeholder_square.svg?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=origina'} width={300} height={300} alt='Profile' className='w-full h-auto' />
              {/*  */}
            </figure>
            <div>
              <h2 className='text-2xl font-bold'>{session?.user?.name}</h2>
              <p className='text-[14px] text-black/80'>{session?.user?.email}</p>
            </div>
          </div>
          <div><button onClick={handleSignOut} className=' text-[#D03739] font-semibold py-2 px-2 rounded-md w-full cursor-pointer shadow-xs shadow-[#D03739] border border-[#D03739] text-left '><span className=''>↩︎</span> সাইন আউট</button></div>
        </div>
        <div className='bg-white py-3 px-5 rounded-3xl'>
          <div>
            <h3 className='font-bold text-2xl'>তথ্য</h3>
            <div className='mt-5 ml-5 mb-10 flex flex-col gap-2'>
              <form id='profileUpdate' onSubmit={handleUpdateUser}>

                <fieldset className='flex flex-row flex-wrap gap-2 justify-start items-center'>
                  <div>
                    <label className="label text-black">নাম</label>
                    <input type="text" name='name'
                      disabled={!edit}
                      className="input w-full" placeholder="যেমন: রহিম উদ্দিন" />
                  </div>

                  <div>
                    <label className="label text-black">ইমেইল</label>
                    <input type="email" name='email'
                      disabled={!edit}
                      className="input w-full" placeholder="you@example.com" />
                  </div>

                  <div>
                    <label className="label text-black">Image</label>
                    <input type="text" name='image'
                      disabled={!edit}
                      className="input w-full" placeholder="image link" />
                  </div>
                </fieldset>

              </form>
              <div className='flex gap-2 mt-4'>
                <button
                  onClick={()=> setEdit(!edit)}
                  className='btn'>
                  {!edit ? 'Edit':'Cancel Edit'}
                </button>
                <button 
                  type='submit'
                  form='profileUpdate' className='btn'
                disabled={!edit}>
                  আপডেট
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;