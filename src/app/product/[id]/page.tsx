import ProductRoute from '@/components/productdetails/ProductRoute';
import { bn } from '@/lib/exportNeed';
import { getData } from '@/lib/getData';
import { ProductInfoType, Market } from '@/lib/type';
import Link from 'next/link';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

const CardDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {

  const { id } = await params

  const data = await getData(`products`)

  const products = data.find((product: ProductInfoType) => {
    const { id: productID } = product
    return id.toString() === productID.toString();
  })


  if (products === undefined) {
    return <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E1E8E1] bg-gray-50/60 p-8 text-center shadow-sm mt-5">
      {/* Icon Indicator */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        <IoWarningOutline className='text-xl' />

      </div>
      <h3 className="text-base font-semibold text-gray-900">Unable to load data</h3>
      <p className="mt-1 max-w-sm text-xs text-gray-500">
        Something went wrong while fetching this information. Please check your connection and try again.
      </p>

      <div className="mt-5">
        <Link
          href="/"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 active:scale-95"
        >
          Go Home
        </Link>
      </div>
    </div>
  }

  const { nameBn, markets, category, categoryIcon, categoryNameBn, image, today, unit, change: { dir, pct }, yesterday } = products;

  const bnUnit = ["কেজি", "লিটার", "টি", "ডজন"];
  const unitBn = <>{`${unit === 'kg' ? `${bnUnit[0]}`
    : unit === 'litre' ? `${bnUnit[1]}`
      : unit === 'piece' ? `${bnUnit[2]}`
        : unit === 'dozen' ? `${bnUnit[3]}`
          : `${unit}`}`}</>

  const sortByMin = [...markets.sort((a: Market, b: Market) => a?.min - b?.min)]
  const sortByMax = [...markets.sort((a: Market, b: Market) => b?.max - a?.max)]


  const { max: maxPrice } = sortByMax[0]
  const { min: minPrice } = sortByMin[0]
  const average = (maxPrice + minPrice) / 2;




  return (
    <div>

      <div className='container mx-auto max-w-5xl flex flex-col gap-5'>



        {/* This div is for path */}
        <div className=''>
          <ProductRoute />
        </div>

        {/* This div is for big board */}
        <div className='flex justify-between items-center rounded-2xl py-10 px-6 bg-white border border-[#E1E8E1]'>

          <div className='flex gap-2 items-center'>
            <div className='text-5xl bg-[#F0F5F0] p-4 rounded-2xl'>{image}</div>
            <div className='w-full'>
              <h1 className='text-3xl font-bold'>{nameBn}</h1>
              <p className='text-[13px] mt-1 text-black/70'>প্রতি {unitBn} · {categoryNameBn}</p>
              <p className='mt-2 text-[14px]'>গতকালের তুলনায় আজ দাম <strong>{today > yesterday ? `বেড়েছে` : today < yesterday ? 'কমেছে' : 'অপরিবর্তিত'}</strong>{yesterday === today ? <></> : <> · {Math.abs(yesterday - today)} টাকা</>}</p>
            </div>
          </div>

          <div className='bg-[#F0F5F0] flex flex-col justify-center items-center py-5 px-6 rounded-2xl
          text-[14px] text-black/60'>

            <p>আজকের দাম</p>
            <h1 className='text-4xl font-bold text-black'>{bn.format(today)}</h1>
            <p>টাকা / {unitBn}</p>
            <p>
              <span className={`${dir === 'down' ? 'text-[#1A9951]' : dir === 'up' ? 'text-[#D03739]' : 'text-black px-2'}`}>
                {dir === 'up' ?
                  `▲` : dir === 'down' ? `▼` : '-'} {bn.format(pct)}%</span>
            </p>

          </div>

        </div>

        {/* This div is for table and other */}
        <div className='bg-white border border-[#E1E8E1] px-5 py-6 rounded-2xl'>

          <div>
            <h2 className='text-[23px] font-bold mb-4'>দামের সারসংক্ষেপ</h2>

            <div className='grid grid-cols-3 gap-4'>
              <div className='border border-[#E1E8E1] rounded-2xl px-7 py-5 text-[13px]'>
                <p>সর্বনিম্ন দাম</p>
                <p className='text-[#1A9951]'><span className='text-3xl font-bold'>{bn.format(minPrice)}</span> টাকা</p>
                <p>সবচেয়ে কম দামের বাজার</p>
              </div>

              <div className='border border-[#E1E8E1] rounded-2xl px-7 py-5 text-[13px]'>
                <p>সর্বাধিক দাম</p>
                <p className='text-[#D03739]'><span className='text-3xl font-bold'>{bn.format(maxPrice)}</span> টাকা</p>
                <p>সবচেয়ে বেশি দামের বাজার</p>
              </div>

              <div className='border border-[#E1E8E1] rounded-2xl px-7 py-5 text-[13px]'>
                <p>গড় দাম</p>
                <p className='text-[#1A9951]'><span className='text-3xl font-bold'>{bn.format(average)}</span> টাকা</p>
                <p>প্রতি {unitBn}-এর হিসাবে</p>
              </div>

            </div>

          </div>

          {/* table */}
          <div>
            <h2 className='text-[23px] font-bold my-4'>বাজারভিত্তিক আজকের দাম</h2>
            <table className='border border-[#E1E8E1] w-full rounded-2xl border-separate border-spacing-y-0 overflow-hidden'>
              <thead>
                <tr className='text-[15px] text-[#757C77] font-bold'>
                  <th className='text-left py-2 pl-7 border-b border-[#E2E4E2]'>বাজার</th>
                  <th className='text-left py-2 border-b border-[#E2E4E2]'>বিভাগ</th>
                  <th className='text-right py-2 border-b border-[#E2E4E2]'>সর্বনিম্ন</th>
                  <th className='text-right py-2 border-b border-[#E2E4E2]'>সর্বাধিক</th>
                  <th className='text-right py-2 pr-7 border-b border-[#E2E4E2]'>গড়</th>
                </tr>
              </thead>
              <tbody className=''>
                {
                  markets.map((market: Market, index: number) => {

                    const { market: marketName, division, min, max } = market

                    return (

                      <tr key={index} className={`text-[14px] ${index % 2 !== 0 ? 'bg-[#F0F5F0]' : ''}`}>
                        <td className={`py-2 pl-7 text-left font-semibold border-t border-black ${index === 0 && 'border-t-0'}`}>{marketName}</td>
                        <td className={`text-left border-t border-black ${index === 0 && 'border-t-0'}`}>{division}</td>
                        <td className={`text-right border-t border-black ${index === 0 && 'border-t-0'}`}>{`${bn.format(min)} টাকা`}</td>
                        <td className={`text-right border-t border-black ${index === 0 && 'border-t-0'}`}>{`${bn.format(max)} টাকা`}</td>
                        <td className={`pr-8 text-right font-semibold border-t border-black ${index === 0 && 'border-t-0'}`}>{`${bn.format((max + min) / 2)} টাকা`}</td>
                      </tr>

                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>

        {/* This div all category */}
        <div>
          <Link href={`/category/${category}`} className='bg-white border border-[#E1E8E1] px-3 py-2 rounded-md text-center'>
            {`${categoryIcon} ${categoryNameBn}`}
          </Link>
        </div>

      </div>

    </div>
  );
};

export default CardDetailsPage;