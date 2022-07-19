// @author: Kalpit Machhi
// @description: This file calculates and displays the total amount for all the cart items.
// @feature: Cart Management

import React from "react";
import "./CartTotal.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../../services/httpService";

const CartTotal = (props) => {
  const [cartTotal, setCartTotal] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const res = axios.get(baseURL + `/cart/` + props.userid).then((result) => {
      let sum = 0;
      for (let i = 0; i < result.data.length; i++) {
        sum += result.data[i].price;
      }
      setCartTotal(sum);
    });
  }, []);

  return (
    <div className="CartTotal">
      <div className="cart-total-bg">
        <div className="container cart-total-container res-p">
          <div className="row">
            <div className="col-lg-12 history-title div-10">Cart Total</div>
          </div>
          <div className="row">
            <div className="cart-total div-10">
              ${Math.round(cartTotal + Math.round(cartTotal * 0.15))}
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
