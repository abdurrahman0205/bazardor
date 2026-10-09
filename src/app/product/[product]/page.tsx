import React from 'react';

const CardDetailsPage = async ({ params }: { params: Promise<{ product: string }> }) => {
  
  const {product} = await params




  return (
    <div>

      {/* This div is for path */}
      <div></div>

      {/* This div is for big board */}
      <div></div>

      {/* This div is for table and other */}
      <div></div>

      {/* This div all category */}
      <div></div>

    </div>
  );
};

export default CardDetailsPage;