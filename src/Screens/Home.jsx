import React from 'react'
import './Style.scss'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Products from '../Components/Products'

function Home() {
  return (
    <div className='home-constainer'>
        <Header/>
        <Hero/>
        <Products />
    </div>
  )
}

export default Home