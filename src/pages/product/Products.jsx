import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./Product";
import "./Product.css";

const Products = () => {
  return (
    <>
      <div className="products">
        <h1 className="title my-3 fw-bolder">Techno Shop</h1>
      </div>
      <div className="products-list d-flex flex-wrap gap-2">
        {PRODUCTS.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
      
    </>
  );
};

export default Products;
