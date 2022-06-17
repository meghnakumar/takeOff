import React from "react";
import "./CartTotal.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartTotal = () => {
  const navigate = useNavigate();
  return (
    <div className="CartTotal">
      <div className="cart-total-bg">
        <div className="container cart-total-container res-p">
          <div className="row">
            <div className="col-lg-12 history-title div-10">Cart Total</div>
          </div>
          <div className="row">
            <div className="cart-total div-10">$767.25</div>
          </div>
          <div className="div-10">
            <Button
              variant="contained"
              onClick={() => {
                navigate("/payment");
              }}
              style={{
                borderRadius: 5,
                backgroundColor: "#0081a7",
                marginTop: 10,
                color: "white",
                fontSize: "16px",
                color: "white",
                fontWeight: 700,
              }}
            >
              Checkout
            </Button>
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
