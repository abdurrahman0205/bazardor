import React from 'react';


const CurrentDate = async() => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
    timeZone: "Asia/Dhaka"
  })

  return (
    <p className='text-sm'>
      {date}
    </p>
  );
};

export default CurrentDate;