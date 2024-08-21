import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'

const ProductList = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
            const response = await fetch('https://fakestoreapi.com/products')
                const data = await response.json()
                setProducts(data)
            } catch (error) {
               console.log(error) 
            }
        }
        fetchData()
    },[])
  return (
      <div>
          <div className="product-list">
              {products.map((product)=><ProductCard key={product.id} product={product}/>)}
          </div>
    </div>
  )
}

export default ProductList