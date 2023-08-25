import React from 'react'
import './Style.scss'

export default function Header() {
  return (
    <div className='header-container'>
        <div className="left-logo">
            <h1>The Bags Store</h1>
        </div>
        <div className="right-links">
            <ul>
                <li>Home</li>
                <li>Account</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
  )
}
