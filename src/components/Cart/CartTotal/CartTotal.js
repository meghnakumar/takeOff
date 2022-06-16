import React from "react";
import "./CartTotal.scss";

const CartTotal = () => {
  return (
    <div className="CartTotal">
      <div className="cart-total-bg">
        <div className="container cart-total-container res-p">
          <div className="row">
            <div className="col-lg-12 history-title">Cart Total</div>
          </div>
          <div className="row">
            <div className="cart-total">$767.25</div>
          </div>

          {/* <div className="card">
            <div className="card-body">
              <div className="row flex-center">
                <div className="row"></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
