import React from "react";
import FlightTakeoffSharpIcon from "@mui/icons-material/FlightTakeoffSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import { Button } from "@mui/material";
import "./CartList.scss";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import BedSharpIcon from "@mui/icons-material/BedSharp";
import TheaterComedySharpIcon from "@mui/icons-material/TheaterComedySharp";
import TravelExploreSharpIcon from "@mui/icons-material/TravelExploreSharp";
import { useEffect, useState } from "react";
import axios from "axios";

const CartList = (props) => {
  const [userId, setUserId] = useState();
  const [items, setItems] = useState([]);
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // listCartItems();
    setUserId(props.userid);
    const res = axios
      .get(`http://localhost:5001/cart/` + props.userid)
      .then((result) => {
        setItems(result.data);
        console.log(result.data);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="CartList">
      <div className="cart-list-bg">
        <div className="container cart-list-container res-p">
          <div className="row">
            <div className="col-lg-12 history-title">Cart Items </div>
          </div>

          {items &&
            items.map((item) => {
              if (item.type === "flight") {
                return (
                  <div className="card c1">
                    <div className="card-body">
                      <div className="row flex-center">
                        <div className="row">
                          <div className="col-lg-1 icon div-v7">
                            <div className="col">
                              <div className="row div-v">
                                <div className="col-lg-12  div-10">
                                  <FlightTakeoffSharpIcon fontSize="large"></FlightTakeoffSharpIcon>
                                </div>
                              </div>
                              <div className="row cart-space"></div>
                              <div className="row remove-cart-item">
                                <div className="col-lg-12 div-10">
                                  <Button
                                    variant="contained"
                                    onClick={() => {
                                      setOpen(true);
                                      const id = item._id;

                                      const res = axios
                                        .delete(
                                          `http://localhost:5001/cart/` + id
                                        )
                                        .then((result) => {
                                          const response = axios
                                            .get(
                                              `http://localhost:5001/cart/` +
                                                userId
                                            )
                                            .then((result) => {
                                              setItems(result.data);
                                            });
                                        });
                                    }}
                                    key={item}
                                    style={{
                                      borderRadius: 5,
                                      backgroundColor: "#0081a7",

                                      color: "white",
                                    }}
                                  >
                                    Remove
                                  </Button>
                                  <Dialog open={open} onClose={handleClose}>
                                    <div className="dialog-box">
                                      <DialogTitle>
                                        <p className="dialog-title">
                                          Item Deleted from Cart.
                                        </p>
                                      </DialogTitle>

                                      <DialogActions>
                                        <Button
                                          variant="contained"
                                          style={{
                                            borderRadius: 5,
                                            backgroundColor: "#0081a7",

                                            color: "white",
                                          }}
                                          onClick={handleClose}
                                        >
                                          Close
                                        </Button>
                                      </DialogActions>
                                    </div>
                                  </Dialog>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 div-v5">
                            <div>
                              <div className="row div-v1">
                                <div className="col-lg-5 col-md-5 div-10">
                                  Toronto
                                </div>
                                <div className="col-lg-2 col-md-2 div-10">
                                  <ArrowForwardSharpIcon />
                                </div>
                                <div className="col-lg-5 col-md-5 div-10">
                                  Halifax
                                </div>
                              </div>
                              <div className="div-v2 div-10">Flight</div>
                              <div className="div-v2 div-10">
                                10:00 AM - 13:00 PM
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 div-v">
                            Air Canada
                          </div>
                          <div className="col-lg-2 col-md-2 div-v div-10">
                            July 11, 2022
                          </div>
                          <div className="col-lg-1 col-md-1 div-v"></div>
                          <div className="col-lg-3 col-md-3">
                            <div className="row">
                              <div className="col-lg-6 ">Cost</div>
                              <div className="col-lg-6 ">${item.price}</div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 ">Tax</div>
                              <div className="col-lg-6 ">
                                ${Math.round(item.price * 0.15)}
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 "></div>
                              <div className="col-lg-6 ">
                                <hr />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 div-v6">Total</div>
                              <div className="col-lg-6 div-v6">
                                ${Math.round(item.price * 1.15)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (item.type === "hotel") {
                return (
                  <div className="card c1">
                    <div className="card-body">
                      <div className="row flex-center">
                        <div className="row">
                          <div className="col-lg-1 icon div-v7">
                            <div className="col">
                              <div className="row div-v">
                                <div className="col-lg-12  div-10">
                                  <BedSharpIcon fontSize="large"></BedSharpIcon>
                                </div>
                              </div>
                              <div className="row cart-space"></div>
                              <div className="row remove-cart-item">
                                <div className="col-lg-12 div-10">
                                  <Button
                                    variant="contained"
                                    onClick={() => {
                                      setOpen(true);
                                      const id = item._id;

                                      const res = axios
                                        .delete(
                                          `http://localhost:5001/cart/` + id
                                        )
                                        .then((result) => {
                                          const response = axios
                                            .get(
                                              `http://localhost:5001/cart/` +
                                                userId
                                            )
                                            .then((result) => {
                                              setItems(result.data);
                                            });
                                        });
                                    }}
                                    style={{
                                      borderRadius: 5,
                                      backgroundColor: "#0081a7",

                                      color: "white",
                                    }}
                                  >
                                    Remove
                                  </Button>
                                  <Dialog open={open} onClose={handleClose}>
                                    <div className="dialog-box">
                                      <DialogTitle>
                                        <p className="dialog-title">
                                          Item Deleted from Cart.
                                        </p>
                                      </DialogTitle>

                                      <DialogActions>
                                        <Button
                                          variant="contained"
                                          style={{
                                            borderRadius: 5,
                                            backgroundColor: "#0081a7",

                                            color: "white",
                                          }}
                                          onClick={handleClose}
                                        >
                                          Close
                                        </Button>
                                      </DialogActions>
                                    </div>
                                  </Dialog>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 div-v5">
                            <div>
                              <div className="row div-v1">Hotel Name</div>
                              <div className="div-v2 div-10">Hotel</div>
                              <div className="div-v2 div-10">2 x Rooms</div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 div-v">Halifax</div>
                          <div className="col-lg-2 col-md-2 div-v div-10">
                            July 11, 2022
                          </div>
                          <div className="col-lg-1 col-md-1 div-v">
                            {/* <FavoriteBorderSharpIcon /> */}
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="row">
                              <div className="col-lg-6 ">Cost</div>
                              <div className="col-lg-6 ">${item.price}</div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 ">Tax</div>
                              <div className="col-lg-6 ">
                                ${Math.round(item.price * 0.15)}
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 "></div>
                              <div className="col-lg-6 ">
                                <hr />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 div-v6">Total</div>
                              <div className="col-lg-6 div-v6">
                                ${Math.round(item.price * 1.15)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (item.type === "event") {
                return (
                  <div className="card c1">
                    <div className="card-body">
                      <div className="row flex-center">
                        <div className="row">
                          <div className="col-lg-1 icon div-v7">
                            <div className="col">
                              <div className="row div-v">
                                <div className="col-lg-12  div-10">
                                  <TheaterComedySharpIcon fontSize="large"></TheaterComedySharpIcon>
                                </div>
                              </div>
                              <div className="row cart-space"></div>
                              <div className="row remove-cart-item">
                                <div className="col-lg-12 div-10">
                                  <Button
                                    variant="contained"
                                    onClick={() => {
                                      setOpen(true);
                                      const id = item._id;

                                      const res = axios
                                        .delete(
                                          `http://localhost:5001/cart/` + id
                                        )
                                        .then((result) => {
                                          const response = axios
                                            .get(
                                              `http://localhost:5001/cart/` +
                                                userId
                                            )
                                            .then((result) => {
                                              setItems(result.data);
                                            });
                                        });
                                    }}
                                    style={{
                                      borderRadius: 5,
                                      backgroundColor: "#0081a7",

                                      color: "white",
                                    }}
                                  >
                                    Remove
                                  </Button>
                                  <Dialog open={open} onClose={handleClose}>
                                    <div className="dialog-box">
                                      <DialogTitle>
                                        <p className="dialog-title">
                                          Item Deleted from Cart.
                                        </p>
                                      </DialogTitle>

                                      <DialogActions>
                                        <Button
                                          variant="contained"
                                          style={{
                                            borderRadius: 5,
                                            backgroundColor: "#0081a7",

                                            color: "white",
                                          }}
                                          onClick={handleClose}
                                        >
                                          Close
                                        </Button>
                                      </DialogActions>
                                    </div>
                                  </Dialog>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 div-v5">
                            <div>
                              <div className="row div-v1">Event Name</div>
                              <div className="div-v2 div-10">Event</div>
                              <div className="div-v2 div-10">2 x Tickets</div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 div-v">Halifax</div>
                          <div className="col-lg-2 col-md-2 div-v div-10">
                            July 11, 2022
                          </div>
                          <div className="col-lg-1 col-md-1 div-v">
                            {/* <FavoriteBorderSharpIcon /> */}
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="row">
                              <div className="col-lg-6 ">Cost</div>
                              <div className="col-lg-6 ">${item.price}</div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 ">Tax</div>
                              <div className="col-lg-6 ">
                                ${Math.round(item.price * 0.15)}
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 "></div>
                              <div className="col-lg-6 ">
                                <hr />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 div-v6">Total</div>
                              <div className="col-lg-6 div-v6">
                                ${Math.round(item.price * 1.15)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (item.type === "tour") {
                return (
                  <div className="card c1">
                    <div className="card-body">
                      <div className="row flex-center">
                        <div className="row">
                          <div className="col-lg-1 icon div-v7">
                            <div className="col">
                              <div className="row div-v">
                                <div className="col-lg-12 div-10 ">
                                  <TravelExploreSharpIcon fontSize="large"></TravelExploreSharpIcon>
                                </div>
                              </div>
                              <div className="row cart-space"></div>
                              <div className="row remove-cart-item">
                                <div className="col-lg-12  div-10">
                                  <Button
                                    variant="contained"
                                    onClick={() => {
                                      setOpen(true);
                                      const id = item._id;

                                      const res = axios
                                        .delete(
                                          `http://localhost:5001/cart/` + id
                                        )
                                        .then((result) => {
                                          const response = axios
                                            .get(
                                              `http://localhost:5001/cart/` +
                                                userId
                                            )
                                            .then((result) => {
                                              setItems(result.data);
                                            });
                                        });
                                    }}
                                    style={{
                                      borderRadius: 5,
                                      backgroundColor: "#0081a7",

                                      color: "white",
                                    }}
                                  >
                                    Remove
                                  </Button>
                                  <Dialog open={open} onClose={handleClose}>
                                    <div className="dialog-box">
                                      <DialogTitle>
                                        <p className="dialog-title">
                                          Item Deleted from Cart.
                                        </p>
                                      </DialogTitle>

                                      <DialogActions>
                                        <Button
                                          variant="contained"
                                          style={{
                                            borderRadius: 5,
                                            backgroundColor: "#0081a7",

                                            color: "white",
                                          }}
                                          onClick={handleClose}
                                        >
                                          Close
                                        </Button>
                                      </DialogActions>
                                    </div>
                                  </Dialog>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-3 col-md-3 div-v5">
                            <div>
                              <div className="row div-v1">
                                <div className="col-lg-12 col-md-12  div-10">
                                  Tour Package Name
                                </div>
                              </div>
                              <div className="div-v2  div-10">Tour</div>
                              <div className="div-v2  div-10">2 People</div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 div-v5">
                            <div>
                              <div className="row div-v1">
                                <div className="col-lg-12 col-md-12  div-10">
                                  Halifax
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-md-2 div-v  div-10">
                            July 11, 2022
                          </div>
                          <div className="col-lg-1 col-md-1 div-v">
                            {/* <FavoriteBorderSharpIcon /> */}
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="row">
                              <div className="col-lg-6 ">Cost</div>
                              <div className="col-lg-6 ">${item.price}</div>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 ">Tax</div>
                              <div className="col-lg-6 ">
                                ${Math.round(item.price * 0.15)}
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 "></div>
                              <div className="col-lg-6 ">
                                <hr />
                              </div>
                            </div>

                            <div className="row">
                              <div className="col-lg-6 div-v6">Total</div>
                              <div className="col-lg-6 div-v6">
                                ${Math.round(item.price * 1.15)}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}

          {/* ------------- */}

          {/* ------------- */}

          {/* ------------- */}

          {/* ------------- */}

          {/* ---------------- */}
        </div>
      </div>
    </div>
  );
};

export default CartList;
