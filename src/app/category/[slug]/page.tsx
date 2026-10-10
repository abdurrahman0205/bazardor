import SortBy from '@/components/SortBy';
import ProductCard from '@/components/theproduct/ProductCard';
import { bn } from '@/lib/exportNeed';
import { getData } from '@/lib/getData';
import { CategoriesType } from '@/lib/type';
import Link from 'next/link';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

const CategorieDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params
  const categoriesData = await getData('categories')
  const products = await getData('products')
  

  const category = categoriesData.find((item: CategoriesType) => {
    return slug === item.slug

  })

  //API error
  if (category === undefined) {
    return <div className="flex flex-col items-center justify-center rounded-2xl border border-[#E1E8E1] bg-gray-50/60 p-8 text-center shadow-sm mt-5">
      {/* Icon Indicator */}
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        <IoWarningOutline className='text-xl' />

      </div>
      <h3 className="text-base font-semibold text-gray-900">Unable to load data</h3>
      <p className="mt-1 max-w-sm text-xs text-gray-500">
        Something went wrong while fetching this information. Please check your connection and try again.
      </p>

      <div className="mt-5">
        <Link
          href="/"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50 active:scale-95"
        >
          Go Home
        </Link>
      </div>
    </div>
  }
  const { icon, nameBn, slug: currentPage } = category;

  //to count total item in a single category
  const categoryItem = await getData(`products?category=${currentPage}`)
  const count = bn.format(categoryItem.length)


  return (
    <div className='mt-5 container max-w-5xl mx-auto'>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-start gap-2 bg-white rounded-2xl px-5 py-2'>
          <div className='text-[35px]'>{icon}</div>
          <div>
            <h1 className='text-2xl font-bold'>{nameBn}</h1>
            <p className='text-[14px] text-[#727974]'>{`${count} টি পণ্যের আজকের দাম ও পরিবর্তন`}</p>
          </div>
        </div>

        <div className='flex justify-between items-center bg-white rounded-2xl px-3 py-5'>
          <p className='text-[14px] text-[#727974]'>{`মোট ${count}টি পণ্য দেখানো হচ্ছে`}</p>
          <SortBy />
        </div>

        <div>
          <ProductCard products={products} currentPage={currentPage} />
        </div>
      </div>
    </div>
  );
};

export default CategorieDetailsPage;