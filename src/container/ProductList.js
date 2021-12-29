import React from "react"
import { useSelector } from "react-redux"
import ProductContainer from "./ProductContainer"

const ProductList = () => {
  const product = useSelector(state => state)
  console.log(product)
  return (
    <>
      <ProductContainer />
    </>
  )
}

export default ProductList
