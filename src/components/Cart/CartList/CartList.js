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

const CartList = () => {
  const [open, setOpen] = React.useState(false);

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
            <div className="col-lg-12 history-title">Cart Items</div>
          </div>
          <div className="card">
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
                            onClick={handleClickOpen}
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
                        <div className="col-lg-5 col-md-5 div-10">Toronto</div>
                        <div className="col-lg-2 col-md-2 div-10">
                          <ArrowForwardSharpIcon />
                        </div>
                        <div className="col-lg-5 col-md-5 div-10">Halifax</div>
                      </div>
                      <div className="div-v2 div-10">10:00 AM - 13:00 PM</div>
                      <div className="div-v2 div-10">Air Canada, IS 555</div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 div-v">2h 00m</div>
                  <div className="col-lg-2 col-md-2 div-v div-10">
                    July 11, 2022
                  </div>
                  <div className="col-lg-1 col-md-1 div-v">
                    <FavoriteBorderSharpIcon />
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="row">
                      <div className="col-lg-6 ">Cost</div>
                      <div className="col-lg-6 ">$220.00</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ">Tax</div>
                      <div className="col-lg-6 ">$35.75</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 "></div>
                      <div className="col-lg-6 ">
                        <hr />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 div-v6">Total</div>
                      <div className="col-lg-6 div-v6">$255.75</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ------------- */}
          <div className="card">
            <div className="card-body">
              <div className="row flex-center">
                <div className="row">
                  <div className="col-lg-1 icon div-v7">
                    <div className="col">
                      <div className="row div-v">
                        <div className="col-lg-12 div-10 ">
                          <BedSharpIcon fontSize="large"></BedSharpIcon>
                        </div>
                      </div>
                      <div className="row cart-space"></div>
                      <div className="row remove-cart-item">
                        <div className="col-lg-12  div-10">
                          <Button
                            variant="contained"
                            onClick={handleClickOpen}
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
                          Radisson Blu Hotel
                        </div>
                      </div>
                      <div className="div-v2  div-10">
                        249 Queen's Quay West, Toronto
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 div-v5">
                    <div>
                      <div className="row div-v1">
                        <div className="col-lg-12 col-md-12  div-10">
                          4 People
                        </div>
                      </div>
                      <div className="div-v2  div-10">2 x Queen Bedrooms</div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 div-v  div-10">
                    July 11-15, 2022
                  </div>
                  <div className="col-lg-1 col-md-1 div-v">
                    <FavoriteBorderSharpIcon />
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="row">
                      <div className="col-lg-6 ">Cost</div>
                      <div className="col-lg-6 ">$220.00</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ">Tax</div>
                      <div className="col-lg-6 ">$35.75</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 "></div>
                      <div className="col-lg-6 ">
                        <hr />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 div-v6">Total</div>
                      <div className="col-lg-6 div-v6">$255.75</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ---------------- */}
          <div className="card">
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
                        <div className="col-lg-12  div-10">
                          <Button
                            variant="contained"
                            onClick={handleClickOpen}
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
                        <div className="col-lg-5 col-md-5  div-10">Toronto</div>
                        <div className="col-lg-2 col-md-2  div-10">
                          <ArrowForwardSharpIcon />
                        </div>
                        <div className="col-lg-5 col-md-5  div-10">Halifax</div>
                      </div>
                      <div className="div-v2  div-10">10:00 AM - 13:00 PM</div>
                      <div className="div-v2  div-10 ">Air Canada, IS 555</div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-2 div-v">2h 00m</div>
                  <div className="col-lg-2 col-md-2 div-v  div-10">
                    July 11, 2022
                  </div>
                  <div className="col-lg-1 col-md-1 div-v">
                    <FavoriteBorderSharpIcon />
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="row">
                      <div className="col-lg-6 ">Cost</div>
                      <div className="col-lg-6 ">$220.00</div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6 ">Tax</div>
                      <div className="col-lg-6 ">$35.75</div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 "></div>
                      <div className="col-lg-6 ">
                        <hr />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6 div-v6">Total</div>
                      <div className="col-lg-6 div-v6">$255.75</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ----------------- */}
        </div>
      </div>
    </div>
  );
};

export default CartList;
