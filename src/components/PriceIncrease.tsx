import React from 'react';
import ProductCard from './theproduct/ProductCard';
import { ProductInfoType } from '@/lib/type';

const PriceIncrease = ({ products }: { products:ProductInfoType[] }) => {
  return (
    <section className='mt-10'>
      <div className='container mx-auto max-w-5xl'>
        <div className='flex items-center gap-2 mb-5'>
          <span className='text-[#D03739]'>▲</span>
          <h2 className='text-[20px] font-bold'>আজ দাম বেড়েছে</h2>
        </div>
        <ProductCard increase='increase' products={products} />
        <div>

        </div>
      </div>
    </section>
  );
};

export default PriceIncrease;