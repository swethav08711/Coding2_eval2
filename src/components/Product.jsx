import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { useParams } from "react-router-dom"
import { addCart } from "../redux/action"
export default function Product() {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const addProduct = product => {
    dispatch(addCart(product))
  }
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(`http://localhost:2022/products/${id}`)
      setProduct(await response.json())
      setLoading(false)
    }
    getProduct()
  }, [])
  const Loading = () => {
    return <>..loding</>
  }
  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-3">
          <div className="card-body p-4" key={product.key}>
            <h5 className="card-title">{product.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">
              {product.country_of_origin}
            </h6>
            <img src={product.image} alt="" />
            <p className="card-text">{product.description}</p>
            <p className="card-text">₹{product.price}</p>
          </div>
          <button
            className="btn btn-outline-dark"
            onClick={() => addProduct(product)}
          >
            Add to cart
          </button>
          <NavLink to="/cart" className="btn btn-dark ms-2 px-3 py-2">
            Got to cart
          </NavLink>
        </div>
      </>
    )
  }
  return (
    <div>
      <div className="container py-5">
        <div className="row py-5">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  )
}
