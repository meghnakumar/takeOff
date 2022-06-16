import React from "react";
import PropTypes from "prop-types";
import "./Cart.scss";
import CartHeader from "./CartHeader/CartHeader";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";

const Cart = () => (
  <div className="Cart">
    <CartHeader />
    <CartTotal />
    <CartList />
  </div>
);

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
