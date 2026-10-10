import { getData } from '@/lib/getData';
import { ProductInfoType } from '@/lib/type';
import Link from 'next/link';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"


const Marquee = async () => {

  const products = await getData('products');
  const bn = new Intl.NumberFormat("bn-BD");

  if (products.length === 0) {
    return <div className="flex flex-col items-center justify-center rounded-b-2xl border border-[#E1E8E1] bg-gray-50/60 p-8 text-center shadow-sm">
      {/* Icon Indicator */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        <IoWarningOutline className='text-xl' />

      </div>
      <h3 className="text-base font-semibold text-gray-900">Unable to load data</h3>
      <p className="mt-1 max-w-sm text-xs text-gray-500">
        Something went wrong while fetching this information. Please check your connection and try again.
      </p>
    </div>
  }
  return (
    <div className={`border-b border-[#E1E8E1]`}>

      <MarqueeText direction='right' className=''>

        {products?.map((product: ProductInfoType) => {

          const { nameBn, image, id, change: { pct, dir }, today, unit } = product;


          const bnUnit = ["কেজি", "লিটার", "টি", "ডজন"]


          return (<Link href={`/product/${id}`} key={id} className=''>
            <div className='px-4 py-1.5 flex items-center gap-2 border-r border-[#E1E8E1]'>
              <span>{image}</span>
              <span>{nameBn}</span>
              <span>{`${bn.format(today)} টাকা/${unit === 'kg' ? `${bnUnit[0]}`
                : unit === 'litre' ? `${bnUnit[1]}`
                  : unit === 'piece' ? `${bnUnit[2]}`
                    : unit === 'dozen' ? `${bnUnit[3]}`
                      : `${unit}`}`}</span>

              <span className={`${dir === 'down' ? 'text-[#1A9951]' : dir === 'up'? 'text-[#D03739]':'text-black'}`}>
                {dir === 'up' ?
                  `▲` : dir === 'down'? `▼`:'-'} {bn.format(pct)}%</span>

            </div>

          </Link>
          );
        })}

      </MarqueeText>

    </div>
  );


};

export default Marquee;