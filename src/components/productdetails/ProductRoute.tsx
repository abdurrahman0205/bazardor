'use client'
import { usePathname } from 'next/navigation';
import React from 'react';

const ProductRoute = () => {
  const path = usePathname()
  return (
    <div>
      {`Product Path: ${path}`}
    </div>
  );
};

export default ProductRoute;