import React from "react"
import { useSelector } from "react-redux"

const ProductContainer = () => {
  const products = useSelector(state => state.allProducts.products)
  const renderList = products.map(product => {
    const { id, country_of_origin, description, image, name, price } = product
    return (
      <div key={id}>
        <div>{country_of_origin}</div>
        <div>{name}</div>
        <div>{description}</div>
        <div>₹ {price}</div>
        <img src={image} alt="asd" />
      </div>
    )
  })

  return <>{renderList}</>
}

export default ProductContainer
