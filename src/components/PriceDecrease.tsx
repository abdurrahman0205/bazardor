import React from 'react';
import ProductCard from './theproduct/ProductCard';
import { ProductInfoType } from '@/lib/type';

const PriceDecrease = ({ products }: { products:ProductInfoType[] }) => {

  return (
    <div className='mt-10'>
      <div className=''>
        <div className='flex items-center gap-2 mb-5'>
          <span className='text-[#1A9951]'>▼</span>
          <h2 className='text-[20px] font-bold'>আজ দাম কমেছে</h2>
        </div>
        <ProductCard products={products} decrease='decrease'/>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default PriceDecrease;