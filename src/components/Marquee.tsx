import { getData } from '@/lib/getData';
import { ProductType } from '@/lib/type';
import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

const Marquee = async () => {

  const products = await getData('products');
  const bn = new Intl.NumberFormat("bn-BD");

  // const { kg, litre, piece, dozen } = {
  //   kg: "কেজি",
  //   litre: "লিটার",
  //   piece: "টি",
  //   dozen: "ডজন",
  // };


  return (
    <div className='border-b border-[#E1E8E1]'>
      {/* #E1E8E1 */}

      <MarqueeText direction='right' className=''>

        {products.map((product: ProductType) => {

          const { nameBn, image, id, change: { pct, dir }, today, unit } = product;

          // let bnUnit = {
          //   kg: "কেজি",
          //   litre: "লিটার",
          //   piece: "টি",
          //   dozen: "ডজন",
          // };

          const bnUnit = ["কেজি", "লিটার", "টি", "ডজন"]
          // const Unit = '';
          // if (unit === 'kg') {
          //   const Unit = bnUnit[0];
          // } else if (unit === 'litre') {
          //   const Unit = bnUnit[1];
          // } else if (unit === 'piece') {
          //   const Unit = bnUnit[2];
          // } else if (unit === 'dozen') {
          //   const Unit = bnUnit[3];
          // } 
          
          

          return ( <Link href='#' key={id} className=''>
              <div className='px-4 py-1.5 flex items-center gap-2 border-r border-[#E1E8E1]'>
                <span>{image}</span>
                <span>{nameBn}</span>
              <span>{`${bn.format(today)} টাকা/${unit === 'kg' ? `${bnUnit[0]}`
                : unit === 'litre' ? `${bnUnit[1]}`
                  : unit === 'piece' ? `${bnUnit[2]}`
                    : unit === 'dozen' ? `${bnUnit[3]}`
                  :`${unit}`}`}</span>

              <span className={`${dir === 'up' ? 'text-[#1A9951]' :'text-[#D03739]'}`}>
                {dir === 'up' ?
                  `▲`:`▼`} {bn.format(pct)}%</span>

              </div>

            </Link>
         );
        })}

      </MarqueeText>

    </div>
  );


};

export default Marquee;