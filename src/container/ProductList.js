import React from "react"
import { useSelector, useDispatch } from "react-redux"
import ProductContainer from "./ProductContainer"
import axios from "axios"
import { setProducts } from "../redux/actions/productActions"
const ProductList = () => {
  const product = useSelector(state => state)
  const dispatch = useDispatch()
  const fetchProduct = async () => {
    const response = await axios
      .get("http://localhost:2022/product")
      .catch(err => {
        console.log("Err", err)
      })
    dispatch(setProducts(response.data))
  }
  React.useEffect(() => {
    fetchProduct()
  }, [])
  console.log(product)
  return (
    <>
      <ProductContainer />
    </>
  )
}

export default ProductList
