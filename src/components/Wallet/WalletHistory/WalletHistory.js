import React from "react";
import "./WalletHistory.scss";
import FlightTakeoffSharpIcon from "@mui/icons-material/FlightTakeoffSharp";
import ArrowForwardSharpIcon from "@mui/icons-material/ArrowForwardSharp";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import BedSharpIcon from "@mui/icons-material/BedSharp";
import AccountBalanceWalletSharpIcon from "@mui/icons-material/AccountBalanceWalletSharp";

const WalletHistory = () => {
  return (
    <div className="WalletHistory">
      <div className="wallet-history-bg">
        <div className="container balance-container history-container">
          <div className="row">
            <div className="col-lg-12 history-title">Wallet History</div>
          </div>
          <div className="card history-header">
            <div className="card-body">
              <div className="row flex-center">
                <div className="row">
                  <div className="col-lg-1 col-md-4 div-10"></div>
                  <div className="col-lg-3 col-md-3 div-10">Details</div>
                  <div className="col-lg-3 col-md-3 div-10">Transaction ID</div>
                  <div className="col-lg-2 col-md-2 div-10">Amount</div>
                  <div className="col-lg-3 col-md-3 div-10">Status</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <div className="row flex-center">
                <div className="row">
                  <div className="col-lg-1 icon div-v">
                    <FlightTakeoffSharpIcon fontSize="large"></FlightTakeoffSharpIcon>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="row div-v1">
                      <div className="col-lg-5 col-md-5 div-10">Toronto</div>
                      <div className="col-lg-2 col-md-2 div-10">
                        <ArrowForwardSharpIcon />
                      </div>
                      <div className="col-lg-5 col-md-5 div-10">Halifax</div>
                    </div>
                    <div className="div-v2 div-10">Air Canada, IS 555</div>
                    <div className="div-v2 div-10">July 11, 2022</div>
                  </div>
                  <div className="col-lg-3 col-md-3 div-v">
                    <div>964266273648</div>
                  </div>
                  <div className="col-lg-2 col-md-2 div-v">- $115.87</div>
                  <div className="col-lg-3 col-md-3 div-v">
                    <div className="row transaction-successful">
                      <div className="col-lg-2">
                        <CheckSharpIcon />{" "}
                      </div>
                      <div className="col-lg-10">Successful</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------- */}

          <div className="card">
            <div className="card-body">
              <div className="row flex-center">
                <div className="row">
                  <div className="col-lg-1 icon div-v">
                    <BedSharpIcon fontSize="large"></BedSharpIcon>
                  </div>
                  <div className="col-lg-3 col-md-3">
                    <div className="row div-v1  div-10">Radisson Blu Hotel</div>
                    <div className="div-v2 div-10">
                      249 Queen's Quay West, Toronto
                    </div>
                    <div className="div-v2 div-10">July 11-15, 2022</div>
                  </div>
                  <div className="col-lg-3 col-md-3 div-v  div-10">
                    <div>374266835696</div>
                  </div>
                  <div className="col-lg-2 col-md-2 div-v">- $256.87</div>
                  <div className="col-lg-3 col-md-3 div-v">
                    <div className="row transaction-unsuccessful">
                      <div className="col-lg-2">
                        <ClearSharpIcon />{" "}
                      </div>
                      <div className="col-lg-10">Unsuccessful</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* -------------------------------- */}

          <div className="card">
            <div className="card-body">
              <div className="row flex-center">
                <div className="row">
                  <div className="col-lg-1 icon div-v">
                    <AccountBalanceWalletSharpIcon fontSize="large"></AccountBalanceWalletSharpIcon>
                  </div>
                  <div className="col-lg-3 col-md-3 div-v">
                    Adding Money to Wallet
                  </div>
                  <div className="col-lg-3 col-md-3 div-v">
                    <div>563856374958</div>
                  </div>
                  <div className="col-lg-2 col-md-2 div-v">+ $400.00</div>
                  <div className="col-lg-3 col-md-3 div-v">
                    <div className="row transaction-successful">
                      <div className="col-lg-2">
                        <CheckSharpIcon />{" "}
                      </div>
                      <div className="col-lg-10">Successful</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;
