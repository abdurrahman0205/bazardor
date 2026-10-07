import { getData } from '@/lib/getData';
import { CategoriesType } from '@/lib/type';
import React from 'react';

const CategorieDetailsPage = async ({params,}:{params: Promise<{slug:string}>}) => {

  const { slug } = await params
  
  const data = await getData('categories')

  const categoroy = data.find((item: CategoriesType) => {
    return slug === item.slug
  })

  const { slug: CurrentPage } = categoroy;
  
  return (
    <div className='mt-5 container max-w-5xl mx-auto'>
      <h1 className='text-2xl font-bold mt-2'>This is {CurrentPage} Category Page</h1>
    </div>
  );
};

export default CategorieDetailsPage;