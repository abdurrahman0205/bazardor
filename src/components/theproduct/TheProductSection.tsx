import React from 'react';
import PriceIncrease from '../PriceIncrease';
import PriceDecrease from '../PriceDecrease';
import AllProduct from './AllProduct';

const TheProductSection = () => {
  return (
    <section>
      <div className='container mx-auto max-w-5xl'>
        <PriceIncrease />
        <PriceDecrease />
        <AllProduct />
      </div>
      
    </section>
  );
};

export default TheProductSection;