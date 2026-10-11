'use client'
import { BazarDorContext } from '@/lib/context/BazarDorContext';
import React, { useContext } from 'react';

const SortBy = () => {

  const {sortBy, setSortBy} = useContext(BazarDorContext)


  return (
    <div className='pr-5 flex items-center gap-2 text-[14px]'>
      <span className='md:block hidden text-[#5F6761]'>সাজান</span>
      <select value={sortBy}
        onChange={(e)=> setSortBy(e.target.value as 'default'|'HighToLow'|'LowToHigh')}
        className="select select-ghost  cursor-pointer text-[14px] border border-base-300 rounded-md ">
        <option disabled={true}>সাজান</option>
        <option value='default'>ডিফল্ট</option>
        <option value='LowToHigh'>দাম: কম থেকে বেশি</option>
        <option value='HighToLow'>দাম: বেশি থেকে কম</option>
      </select>
    </div>
  );
};

export default SortBy;