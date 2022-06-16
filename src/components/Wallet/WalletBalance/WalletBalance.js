import React from "react";
import { Button } from "@mui/material";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import "./WalletBalance.scss";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";

const WalletBalance = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="WalletBalance">
      <div className="wallet-balance-bg">
        <div className="container balance-container res-p balance-card">
          <div className="row flex-center">
            <div className="row">
              <div className="col-lg-12 title">MyWallet</div>
            </div>

            <div className="row">
              <div className="col-lg-4">
                <div className="balance">7,450</div>
                <hr />
                <div className="small-txt">Reward Points</div>
              </div>
              <div className="col-lg-4">
                <div className="balance">$450.75</div>
                <hr />
                <div className="small-txt">Current Balance</div>
              </div>

              <div className="col-lg-4 col-12 m-top-16 add-money-btn">
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleClickOpen}
                  style={{
                    borderRadius: 15,
                    backgroundColor: "#0081a7",
                    padding: "15px 20px",
                    fontSize: "16px",
                    color: "white",
                    fontWeight: 700,
                  }}
                  className="add-btn"
                >
                  <AddSharpIcon /> &nbsp; Add Money to Wallet
                </Button>
                <Dialog open={open} onClose={handleClose}>
                  <div className="dialog-box">
                    <DialogTitle>
                      <p className="dialog-title">Add Money</p>
                    </DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Add money to wallet using Debit or Credit card.
                      </DialogContentText>
                      <br />
                      <FormControl sx={{ m: 1 }} variant="standard">
                        <InputLabel htmlFor="standard-adornment-amount">
                          Amount
                        </InputLabel>
                        <Input
                          id="standard-adornment-amount"
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                        />
                      </FormControl>
                      <FormControl sx={{ m: 1 }} variant="standard">
                        <div className="row">
                          <div className="row">
                            <div className="col-lg-12">
                              <TextField
                                className="col-lg-6"
                                margin="dense"
                                id="name"
                                label="Enter Name"
                                type="text"
                                fullWidth
                                variant="standard"
                              />
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-lg-8 col-md-8">
                              <TextField
                                margin="dense"
                                id="card-number"
                                label="Card Number"
                                type="text"
                                fullWidth
                                variant="standard"
                              />
                            </div>
                            <div className="col-lg-4 col-md-4">
                              <TextField
                                margin="dense"
                                id="cvv"
                                label="CVV"
                                type="password"
                                fullWidth
                                variant="standard"
                              />
                            </div>
                          </div>
                        </div>
                      </FormControl>
                    </DialogContent>
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
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        style={{
                          borderRadius: 5,
                          backgroundColor: "#0081a7",

                          color: "white",
                        }}
                        onClick={handleClose}
                      >
                        Add
                      </Button>
                    </DialogActions>
                  </div>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletBalance;
