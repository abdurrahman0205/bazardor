'use client'
import { usePathname } from 'next/navigation';
import React from 'react';

const ProductRoute = () => {
  const path = usePathname()
  return (
    <div className='bg-white px-5 py-2 rounded-xl mt-5'>
      {`Product Path: ${path}`}
    </div>
  );
};

export default ProductRoute;