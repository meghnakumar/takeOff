// @author: Kalpit Machhi
// @description: This file contains the header for the cart feature.
// @feature: Cart Management

import React from "react";
import "./CartHeader.scss";

const CartHeader = () => {
  return (
    <div className="CartHeader">
      <div className="cart-header-bg">
        <div className="container cart-header-container res-p">
          <div className="row flex-center">
            <div className="row">
              <div className="col-lg-12 div-10">MyCart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
