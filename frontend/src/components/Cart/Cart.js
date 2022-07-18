// @author: Kalpit Machhi
// @description: This file is the parent component for the cart management feature.
// @feature: Cart Management

import React, { useState } from "react";
import "./Cart.scss";
import CartHeader from "./CartHeader/CartHeader";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import { useEffect } from "react";

const Cart = () => {
  const userid = JSON.parse(localStorage.getItem("userDetails"))._id;

  const [userId, setUserId] = useState(
    JSON.parse(localStorage.getItem("userDetails"))._id
  );

  useEffect(() => {
    // set userid
  });
  return (
    <div className="Cart">
      <CartHeader />
      <CartTotal userid={userid} />
      <CartList userid={userid} />
    </div>
  );
};

Cart.propTypes = {};

Cart.defaultProps = {};

export default Cart;
