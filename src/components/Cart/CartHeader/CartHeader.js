import React from "react";
import "./CartHeader.scss";

const CartHeader = () => {
  return (
    <div className="CartHeader">
      <div className="cart-header-bg">
        <div className="container cart-header-container res-p">
          <div className="row flex-center">
            <div className="row">
              <div className="col-lg-12">MyCart</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
