import React from "react";
import Product from "../Products/Product";

const Products = ({ products }) => {
  return (
    <div>
      {products.map((product) => {
        return <Product product={product}/>
      })}
    </div>
  )
}

export default Products




