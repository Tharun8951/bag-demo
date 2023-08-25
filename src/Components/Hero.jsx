import React from 'react'
import './Style.scss'

export default function Hero() {
  return (
    <div className='hero-container'>
        <div className="left-text">
            <h2>
                Grab upto 50% off on <br/>latest Bag-packs
            </h2>
            <button>Buy Now</button>
        </div>
        <div className="right-img">
            <img src="https://www.pngmart.com/files/14/School-Bag-Black-Transparent-PNG.png" alt="bag-pack img" />
        </div>
    </div>
  )
}
