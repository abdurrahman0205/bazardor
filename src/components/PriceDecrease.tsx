import React from 'react';

const PriceDecrease = () => {

  const bn = "আজ দাম কমেছে";
  return (
    <section className='mt-10'>
      <div className='container mx-auto max-w-5xl'>
        <div className='flex items-center gap-2 mb-5'>
          <span className='text-[#1A9951]'>▼</span>
          <h2 className='text-[20px] font-bold'>আজ দাম কমেছে</h2>
          <h2 className='text-[20px] font-bold'>{bn}</h2>
        </div>
        <div>
          
        </div>
      </div>
    </section>
  );
};

export default PriceDecrease;