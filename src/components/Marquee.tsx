import { getData } from '@/lib/getData';
import { ProductType } from '@/lib/type';
import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {

  const products = await getData('products');


  return (
    <div className='border-y border-[#E1E8E1]'>
      {/* #E1E8E1 */}

      <MarqueeText direction='right' className=''>

        {products.map((product: ProductType) => {

          const { nameBn, image, id, change: { pct, dir }, } = product;

          return ( <Link href='#' key={id} className=''>
              <div className='px-4 py-1.5 flex items-center gap-2 border-r border-[#E1E8E1]'>
                <span>{image}</span>
                <span>{nameBn}</span>
                {dir === 'up' ? <>
                  <span className='text-[#1A9951]'>
                    {`▲ ${pct}%`}
                  </span></> : <>
                  <span className='text-[#D03739]'>
                    {`▼ ${pct}%`}
                  </span>

                </>}

              </div>

            </Link>
         );
        })}

      </MarqueeText>

    </div>
  );


};

export default Marquee;