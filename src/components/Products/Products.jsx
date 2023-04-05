import React from "react"
import { Product } from "../Product"
import "./styles.css"

const Products = ({ products = [] }) => {
  return (
    <div className="products-grid">
      {products.map(product => (
        <Product
          key={product.id + product.price + product.title}
          price={product.price}
          title={product.title}
          text={product.description.slice(0, 40) + "..."}
          imageLink={product.image}
        />
      ))}
    </div>
  )
}

export default Products
