export const getData = async(url:string) => {
  
  const response = await fetch(`${process.env.API_URL}/${url}`)

  return response.json()
}