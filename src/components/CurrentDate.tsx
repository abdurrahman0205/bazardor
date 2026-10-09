'use client'
// import React, { useEffect, useState } from 'react';


// const cachedDate = async () => { ////cached date method, still not working properly

//   'use cache'
//   return new Date().toLocaleDateString("bn-BD", {
//     dateStyle: "full",
//     timeZone: "Asia/Dhaka"
//   })
// }

const CurrentDate = () => {

  // const [date, setDate] = useState('Loading time...')

  // useEffect(() => {   ////useEffect hook method, still problem

  //   setDate(
  //     new Date().toLocaleDateString("bn-BD", {
  //     dateStyle: "full",
  //     timeZone: "Asia/Dhaka"
  //     })
  //   )
  // },[])

  

  const date = new Date().toLocaleDateString("bn-BD", { ////normal method, first tried. Error for new Date and fetch date.
    dateStyle: "full",
    timeZone: "Asia/Dhaka"
  })

  // const data = cachedDate();


  // const date = new Date()



  return (
    <p className='text-sm'>
      {/* {date.toLocaleDateString("bn-BD", {
        dateStyle: "full",
        timeZone: "Asia/Dhaka"
      })} */}
      {date}
    </p>
  );
};

export default CurrentDate;