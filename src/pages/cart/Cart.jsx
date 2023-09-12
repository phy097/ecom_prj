import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { PRODUCTS } from "../../products";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(CartContext);
  const totalAmount = getTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="my-3 text-center">Shopping Cart</h1>
      <table className="table">
        <thead>
          <tr>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>TOTAL </th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            const product = PRODUCTS.find((product) => product.id === item.id);
            return (
              <CartItem data={product} qty={item.count} key={product.id} />
            );
          })}
        </tbody>
      </table>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <h4>Subtotal: ${totalAmount}</h4>
           
      </div>
      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button className="btn btn-dark me-md-2" type="button">
          Checkout
        </button>
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};
