import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ProductContainer = () => {
  const products = useSelector(state => state.allProducts.products)
  const renderList = products.map(product => {
    const { id, country_of_origin, description, image, name, price } = product
    return (
      <div key={id}>
        <Link to={`/product/${id}`}>
          <div>{country_of_origin}</div>
          <div>{name}</div>
          <div>{description}</div>
          <div>₹ {price}</div>
          <img src={image} alt="asd" />
        </Link>
      </div>
    )
  })

  return <>{renderList}</>
}

export default ProductContainer
