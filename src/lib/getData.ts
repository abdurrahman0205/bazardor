
export const getData = async(url: string) => {

  try {
    const response = await fetch(`${process.env.PRODUCT_DATA_API_URL}/${url}`)

    if (!response.ok) {
      return []
    }

    return response.json();
    
  } catch (error) {
    console.error('Error fetching data', error);
    return []
  }
}



//   , {
//     next: { revalidate: 30 }
// }
// const response = await fetch(`${process.env.API_URL}/${url}`)