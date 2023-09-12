import React, { useContext } from "react";
import "./Product.css";
import { CartContext } from "../../context/cartContext";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart } = useContext(CartContext);
  const cartItem = cartItems.find((item) => item.id === id);
  return (
    <>
      <div className="card ms-5 my-3">
        <img
          src={productImage}
          style={{ width: 300, height: 250 }}
          className="card-img-top"
          alt={productName}
        />
        <div className="card-body">
          <h5 className="card-title">{productName}</h5>
          <p className="card-text">${price}</p>
          <button
            type="button"
            className="btn btn-dark position-relative"
            onClick={() => addToCart(id)}
          >
            Add To Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {cartItem?.count}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
