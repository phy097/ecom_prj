import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { CartContext } from "../context/cartContext";

const Navbar = (props) => {
  const location = useLocation();
  const pathname = location.pathname;
  const { cartItems } = useContext(CartContext);
  const totalItemCount = cartItems.reduce((sum, item) => {
    return sum + item.count;
  }, 0);
  return (
    <>
      <nav className="navbar bg-body-primary">
        <div className="container-fluid">
          <Link className="navbar-brand " to="/">
            My Shopping
          </Link>
          <Link className="nav-link" to="/cart">
            <FontAwesomeIcon icon={faCartShopping} size="2x" />
            {totalItemCount > 0 && <span className="badge bg-danger">{totalItemCount}</span>}

          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
