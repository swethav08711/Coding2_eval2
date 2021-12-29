import React from "react"
import { useSelector } from "react-redux"

const ProductContainer = () => {
  const product = useSelector(state => state.allProducts.product)

  const { id, name, price } = product[0]
  console.log(product)
  return (
    <div>
      <div>{name}</div>
    </div>
  )
}

export default ProductContainer
