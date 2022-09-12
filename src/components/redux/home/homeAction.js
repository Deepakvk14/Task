import axios from "axios"

export  const ProductsApi = async()=>{
    const apiData = await axios.get("https://fakestoreapi.com/products")
    console.log(apiData)
    return apiData
}