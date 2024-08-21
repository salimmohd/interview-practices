import React from 'react'
import './ProductCard.css'

const ProductCard = ({product}) => {
  return (
      <div>
          <div className="product-card">
              <img src={product.image} alt={product.title} className='product-image' />
              <div className="product-details">
                  <h3 className="product-title">{product.title }</h3>
                  <p className="product-price">${product.price.toFixed(2) }</p>
                  <p className="product-description">{product.description }</p>
              </div>
          </div>
    </div>
  )
}

export default ProductCard