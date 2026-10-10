import React from 'react';
import ProductCard from './ProductCard';
import { getData } from '@/lib/getData';
import { ProductInfoType } from '@/lib/type';

const AllProduct = async ({ products }: { products:ProductInfoType[] }) => {

  const bn = new Intl.NumberFormat("bn-BD");
  // const products = await getData('products');
  const totalProduct = bn.format(products.length)

  return (
    <div className='mt-11'>
      <h2 className='text-[20px] font-bold'>সব পণ্য</h2>
      <p className='text-[#5C655E] text-[15px]'>মোট {totalProduct}টি পণ্য দেখানো হচ্ছে</p>
      <div className='mt-5'>
        <ProductCard products={products} all='all'/>
      </div>
    </div>
  );
};

export default AllProduct;