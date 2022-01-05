import React, { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

export const Products = () => {
  const [data, setData] = useState([])
  const [filter, setFilter] = useState(data)
  const [loading, setLoading] = useState(false)
  let componentMounted = true

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true)
      const response = await fetch("http://localhost:2022/products")
      if (componentMounted) {
        setData(await response.clone().json())
        setFilter(await response.json())
        setLoading(false)
        console.log(filter)
      }
      return {
        componentMounted: false,
      }
    }
    getProducts()
  }, [])

  const Loading = () => {
    return <>loading...</>
  }
  const ShowProducts = () => {
    return (
      <>
        {filter.map(pro => {
          return (
            <>
              <div className="col-md-3">
                <div className="card-body p-4" key={pro.key}>
                  <h5 className="card-title">{pro.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {pro.country_of_origin}
                  </h6>
                  <img src={pro.image} alt="" />
                  <p className="card-text">{pro.description}</p>
                  <p className="card-text">₹{pro.price}</p>
                  <NavLink
                    to={`products/${pro.id}`}
                    className="btn btn-outline-dark"
                  >
                    {" "}
                    Buy Now
                  </NavLink>
                </div>
              </div>
            </>
          )
        })}
      </>
    )
  }
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1>Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-context-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  )
}
