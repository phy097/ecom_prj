import React, { useContext } from "react";
import { CartContext } from "../../context/cartContext";

const CartItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const qty = props.qty;
  const { addToCart, removeFromCart, updateCartItemCount } =
    useContext(CartContext);

  return (
    <>
      <tr>
        <td>
          <img
            src={productImage}
            style={{ widtd: 50, height: 50 }}
            alt={productName}
          />
          {productName}
        </td>
        <td>${price}</td>
        <td>
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={(e) => removeFromCart(id)}
          >
            -
          </button>
          {/* <input
                type="text"
                //   className="form-contdol"
                value={qty}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              /> */}
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={(e) => addToCart(id)}
          >
            +
          </button>
        </td>
        <td>{qty}</td>
      </tr>
    </>
  );
};

export default CartItem;
