import React from 'react'
import './Style.scss'
import CardDetails from './CardDetails'
import { Link } from 'react-router-dom'


export default function ({ name, img, desc, price }) {
    const cardData = { name, img, desc, price };
  return (
    <div className='card-container'>
        <div className="img-container">
            <img src={img} alt={name} />
        </div>
        <div className="text-wrapper">
            <p><b>name:</b> {name}</p>
            <span><b>price: rs </b>{price}</span>
            <Link to='/card-details' state={cardData} className='view-btn'>view</Link>
        </div>
    </div>
  )
}


