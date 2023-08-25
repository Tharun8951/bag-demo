import React from 'react'
import './Style.scss'
import { useLocation } from 'react-router-dom'
import Header from '../Header'

export default function CardDetails() {
  const location = useLocation()
  const myProps = location.state
  return (
    <>
      <Header />
      <div className="card-details-container">
        <div className="left-container">
            <img src={myProps.img} alt={myProps.name} />
        </div>
        <div className="right-container">
            <h1>{myProps.name}</h1>
            <hr />
            <h3>{myProps.desc}</h3>
            <hr />
            <h4>Price: {myProps.price}</h4>
            <div className="btns-container">
                 <button>Buy Now</button>
                 <button>Add To Cart</button>
            </div>
        </div>
      </div>
    </>
  )
}
