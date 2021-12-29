import axios from "axios"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"

import { useParams } from "react-router-dom"
import { selectedProduct } from "../redux/actions/productActions"
const ProductDetail = () => {
  const product = useSelector(state => state.product)
  const { productId } = useParams()
  const dispatch = useDispatch()
  console.log(product)
  const fetchProductDetail = async () => {
    const response = await axios
      .get(`http://localhost:2022/product/${productId}`)
      .catch(err => {
        console.log(err)
      })
    dispatch(selectedProduct(response.data))
  }
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail()
  }, [productId])
  const { id, country_of_origin, description, image, name, price } = product
  return (
    <>
      <div>{country_of_origin}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>₹ {price}</div>
      <img src={image} alt="asd" />
    </>
  )
}

export default ProductDetail
