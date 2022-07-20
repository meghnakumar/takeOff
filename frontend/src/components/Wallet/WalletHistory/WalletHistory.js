import React from "react";
import "./WalletHistory.scss";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
import ClearSharpIcon from "@mui/icons-material/ClearSharp";
import AccountBalanceWalletSharpIcon from "@mui/icons-material/AccountBalanceWalletSharp";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { baseURL } from "../../../services/httpService";
import CelebrationSharpIcon from "@mui/icons-material/CelebrationSharp";

//references
//https://mui.com/material-ui/

const WalletHistory = (props) => {
  const [history, setHistory] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    const res = axios
      .get(baseURL + `/wallet/history/` + props.userId)
      .then((result) => {
        setHistory(result.data);
      });
  }, []);

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

          {history &&
            history.map((item) => {
              if (
                item["type"] === "booking" &&
                item["status"] === "successful"
              ) {
                return (
                  <div className="card">
                    <div className="card-body">
                      <div className="row flex-center">
                        <div className="row">
                          <div className="col-lg-1 icon div-v">
                            <CelebrationSharpIcon fontSize="large"></CelebrationSharpIcon>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="row div-v1  div-10">
                              {item.message}
                            </div>
                            <div className="div-v2 div-10">{item.date}</div>
                          </div>
                          <div className="col-lg-3 col-md-3 div-v  div-10">
                            <div>{item._id.substring(10)}</div>
                          </div>
                          <div className="col-lg-2 col-md-2 div-v">
                            - ${item.price}
                          </div>
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
                );
              } else if (
                item["type"] === "booking" &&
                item["status"] === "unsuccessful"
              ) {
                return (
                  <div className="card">
                    <div className="card-body">
                      <div className="row flex-center">
                        <div className="row">
                          <div className="col-lg-1 icon div-v">
                            <CelebrationSharpIcon fontSize="large"></CelebrationSharpIcon>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="row div-v1  div-10">
                              {item.message}
                            </div>
                            <div className="div-v2 div-10">{item.date}</div>
                          </div>
                          <div className="col-lg-3 col-md-3 div-v  div-10">
                            <div>{item._id.substring(10)}</div>
                          </div>
                          <div className="col-lg-2 col-md-2 div-v">
                            - ${item.price}
                          </div>
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
                );
              } else if (
                item["type"] === "add" &&
                item["status"] === "successful"
              ) {
                return (
                  <div className="card">
                    <div className="card-body">
                      <div className="row flex-center">
                        <div className="row">
                          <div className="col-lg-1 icon div-v">
                            <AccountBalanceWalletSharpIcon fontSize="large"></AccountBalanceWalletSharpIcon>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="row div-v1  div-10">
                              {item.message}
                            </div>
                            <div className="div-v2 div-10">{item.date}</div>
                          </div>
                          <div className="col-lg-3 col-md-3 div-v  div-10">
                            <div>{item._id.substring(10)}</div>
                          </div>
                          <div className="col-lg-2 col-md-2 div-v">
                            + ${item.price}
                          </div>
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
                );
              } else if (
                item["type"] === "add" &&
                item["status"] === "unsuccessful"
              ) {
                return (
                  <div className="card">
                    <div className="card-body">
                      <div className="row flex-center">
                        <div className="row">
                          <div className="col-lg-1 icon div-v">
                            <AccountBalanceWalletSharpIcon fontSize="large"></AccountBalanceWalletSharpIcon>
                          </div>
                          <div className="col-lg-3 col-md-3">
                            <div className="row div-v1  div-10">
                              {item.message}
                            </div>
                            <div className="div-v2 div-10">{item.date}</div>
                          </div>
                          <div className="col-lg-3 col-md-3 div-v  div-10">
                            <div>{item._id.substring(10)}</div>
                          </div>
                          <div className="col-lg-2 col-md-2 div-v">
                            - ${item.price}
                          </div>
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
                );
              }
            })}
        </div>
      </div>
    </div>
  );
};

export default WalletHistory;
