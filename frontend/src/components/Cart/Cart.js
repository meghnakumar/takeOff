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
  // get userId using Redux

  const [userId, setUserId] = useState("user1");
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
