import { getData } from '@/lib/getData';
import { ProductType } from '@/lib/type';
import Link from 'next/link';
import { IoWarningOutline } from 'react-icons/io5';


const ProductCard = async ({ increase, decrease, all, currentPage }: { increase?: string, decrease?: string, all?: string, currentPage?:string }) => {

  const data = await getData('products');

  const increasedProduct = [...(data ?? [])].filter(item => {
    const { change: { dir } } = item
    return dir === 'up';
  }).sort((a, b) => b?.change?.pct - a?.change?.pct).slice(0, 6)

  const decreasedProduct = [...(data ?? [])].filter(item => {
    const { change: { dir } } = item;
    return dir === 'down';
  }).sort((a, b) => a?.change?.pct - b?.change?.pct).slice(0, 6);

  const categoryProduct = [...(data ?? [])].filter(item => {
    const { category } = item;
    return currentPage === category;
  })

 

  const products = all ? data : increase ? increasedProduct : decrease ? decreasedProduct : currentPage ? categoryProduct: data ;


  const bn = new Intl.NumberFormat("bn-BD");

  //API error
  //issue in vercel deploy. Still showing error ui, after api error solved in vercel. But okay in local dev.
  if (data.length === undefined) {
    return <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E1E8E1] bg-gray-50/60 p-8 text-center shadow-sm">
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
    <div className='grid grid-cols-3 gap-3'>

    
      {

        products?.map((product: ProductType) => {

          const { nameBn, id, image, today, unit, change: { dir, pct } } = product;

          const bnUnit = ["কেজি", "লিটার", "টি", "ডজন"];


          return <div key={id} className='px-3 py-2 bg-white w-full rounded-2xl border border-[#E1E8E1] flex flex-col hover:border-[#00800096] hover:shadow-sm/20'>
            <Link href={`/product/${id}`}>

            <div className='flex justify-start gap-2'>
              <div className='px-3 py-2 bg-[#E3E8E3] rounded-xl text-[18px]'>{image}</div>

              <div>
                <h2>{nameBn}</h2>
                <p className='text-[12px] text-[]'>{`প্রতি ${unit === 'kg' ? `${bnUnit[0]}`
                  : unit === 'litre' ? `${bnUnit[1]}`
                    : unit === 'piece' ? `${bnUnit[2]}`
                      : unit === 'dozen' ? `${bnUnit[3]}`
                        : `${unit}`}`}</p>
              </div>
            </div>


            <h2 className='mt-3 text-[13px]'>আজকের দাম</h2>
            <div className='flex justify-between'>
              <div className='flex gap-1 items-center'>
                <h1 className='text-2xl font-bold'>{bn.format(today)}</h1> <span className='text-[15px]'>টাকা</span>
              </div>

              <div className={`${dir === 'down' ? 'bg-[#1A9951]/15' : dir === 'up' ? 'bg-[#D03739]/15' : 'bg-[#9CA3AF]/15'} rounded-2xl py-1 px-2 text-[14px] flex justify-center items-center`}><span className={`${dir === 'down' ? 'text-[#1A9951]' : dir === 'up' ? 'text-[#D03739]' : 'text-black px-2'}`}>
                {dir === 'up' ?
                  `▲` : dir === 'down' ? `▼` : '-'} {bn.format(pct)}%</span></div>
              </div>
            </Link>
          </div>
        })
      }
    
    </div>

  );
};

export default ProductCard;