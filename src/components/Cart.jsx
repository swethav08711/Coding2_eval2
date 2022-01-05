import React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { addCart, delCart } from "../redux/action"

export default function Cart() {
  const state = useSelector(state => state.handleCart)
  const dispatch = useDispatch()
  const handleAdd = item => {
    dispatch(addCart(item))
  }
  const handleDel = item => {
    dispatch(delCart(item))
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    )
  }
  const cartItems = cart => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <h3>{cart.name}</h3>
                <h4>{cart.country_of_origin}</h4>
                <h4>{cart.description}</h4>

                <p className="lead fw-bold">
                  {cart.qty} X ${cart.price} = $
                  {(cart.qty * cart.price).toFixed(2)}
                </p>
                <button
                  className="btn btn-outline-dark me-4"
                  onClick={() => handleDel(cart)}
                >
                  -
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(cart)}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
            <NavLink
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceed to Checkout
            </NavLink>
          </div>
        </div>
      </>
    )
  }
  return (
    <div>
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  )
}
