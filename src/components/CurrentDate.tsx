import React from 'react';


const cachedDate = async () => {
  'use cache'

  return new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka"
  })
}

const CurrentDate = async () => {

  // const date = new Date().toLocaleDateString("bn-BD", {
  //   dateStyle: "full",
  //   timeZone: "Asia/Dhaka"
  // })
  const date = await cachedDate()
  return (
    <p className='text-sm'>
      {date}
    </p>
  );
};

export default CurrentDate;