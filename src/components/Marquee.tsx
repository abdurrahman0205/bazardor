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


          const bnUnit = ["কেজি", "লিটার", "টি", "ডজন"]


          return (<Link href='#' key={id} className=''>
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