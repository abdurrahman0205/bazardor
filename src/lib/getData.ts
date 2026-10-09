
export const getData = async (url: string) => {

  try {
    const response = await fetch(`${process.env.PRODUCT_DATA_API_URL}/${url}`)

    // const response = await fetch(`${process.env.API_URL}/${url}`)
    // const response = await fetch(`https://api.abcz.workers.dev/api/bazardor/${url}`)

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json();
  } catch (error) {
    console.log('Error fetching data', error);
    return []
  }
}



//   , {
//     next: { revalidate: 30 }
// }
// const response = await fetch(`${process.env.API_URL}/${url}`)