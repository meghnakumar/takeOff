import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Cart.scss";
import CartHeader from "./CartHeader/CartHeader";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import { useEffect } from "react";

const Cart = () => {
  const [userId, setUserId] = useState("u1");
  useEffect(() => {
    // set userid
  });
  return (
    <div className="Cart">
      <CartHeader />
      <CartTotal userid={userId} />
      <CartList userid={userId} />
    </div>
  );
};

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
