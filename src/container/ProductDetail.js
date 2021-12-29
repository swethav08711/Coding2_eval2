import axios from "axios"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"

import { useParams } from "react-router-dom"
const ProductDetail = () => {
  const { productId } = useParams()
  const dispatch = useDispatch()
  console.log(productId)
  const fetchProductDetail = () => {
    const response = await axios
      .get(`http://localhost:2022/product/${productId}`)
      .catch(err => {
        console.log(err)
      })
    dispatch()
  }
  return <div>deatail</div>
}

export default ProductDetail
