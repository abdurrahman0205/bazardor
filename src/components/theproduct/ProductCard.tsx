import { getData } from '@/lib/getData';
import { ProductType } from '@/lib/type';


const ProductCard = async ({ increase, decrease, all }: { increase?: string, decrease?: string, all?: string }) => {

  const data = await getData('products');

  //sort data
  // if (increase) {

  // }

  const products = all ? data : increase ? [...(data ?? [])].filter(item => {
    const { change: { dir } } = item
    return dir === 'up';
  }).sort((a, b) => b?.change?.pct - a?.change?.pct).slice(0, 6) : decrease ? [...(data ?? [])].filter(item => {
    const { change: { dir } } = item;
    return dir === 'down';
  }).sort((a,b)=> a?.change?.pct - b?.change?.pct).slice(0, 6) : data;

  console.log(products);

  const bn = new Intl.NumberFormat("bn-BD");


  return (
    <div className='grid grid-cols-3 gap-3'>


      {

        products.map((product: ProductType) => {
          const { nameBn, id, image, today, unit, change: { dir, pct } } = product;

          const bnUnit = ["কেজি", "লিটার", "টি", "ডজন"];


          return <div key={id} className='px-3 py-2 bg-white w-full rounded-2xl border border-[#E1E8E1] flex flex-col'>


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
          </div>
        })
      }

    </div>
  );
};

export default ProductCard;