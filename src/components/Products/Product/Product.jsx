import axios from "axios";
import React, { useEffect, useState } from "react";

const Product = () => {

  const [products,setProducts] = useState([])
 



  useEffect(()=>{
    axios.get("http://localhost:8080/products").then((res)=>setProducts(res.data))
  },[])


  

  return (
    <div>
      {products.map((product)=>(

    <div data-cy={`product-${product.id}`} key = {product.id}>
      <h3 data-cy="product-name">{product.name}</h3>
      <h6 data-cy="product-description">{product.description}</h6>
      <button data-cy="product-add-item-to-cart-button">Add to cart</button>
      <div>
        <button data-cy="product-increment-cart-item-count-button">+</button>
        <span data-cy="product-count">
 
        </span>
        <button data-cy="product-decrement-cart-item-count-button">-</button>
        <button data-cy="product-remove-cart-item-button">Remove</button>
      </div>
    </div>
      ))}

    </div>
  );
};

export default Product;
