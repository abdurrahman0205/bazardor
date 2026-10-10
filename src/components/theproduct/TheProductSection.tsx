import React from 'react';
import PriceIncrease from '../PriceIncrease';
import PriceDecrease from '../PriceDecrease';
import AllProduct from './AllProduct';
import { getData } from '@/lib/getData';

const TheProductSection = async () => {

  const products = await getData('products');

  return (
    <section>
      <div className='container mx-auto max-w-5xl'>
        <PriceIncrease products={products} />
        <PriceDecrease products={products} />
        <AllProduct products={products} />
      </div>
      
    </section>
  );
};

export default TheProductSection;