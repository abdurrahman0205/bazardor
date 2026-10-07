export const getData = async(url:string) => {
  
  const response = await fetch(`${process.env.API_URL}/${url}`, {
    next: { revalidate: 30 }
  })

  return response.json()
}