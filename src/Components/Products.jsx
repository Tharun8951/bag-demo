import React from 'react';
import './Style.scss';
import Card from './Cards/Card';
import ProductData from '../../../ProductData';

export default function Products() {
  return (
    <div className='products-container'>
      <h1>Bag-packs For You!</h1>
      <div className="card-holder">
        {ProductData.map(product => (
          <Card
            key={product.id}
            name={product.name}
            img={product.img}
            desc={product.desc}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

