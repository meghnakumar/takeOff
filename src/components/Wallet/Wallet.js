import React from "react";
import "./Wallet.scss";
import WalletBalance from "./WalletBalance/WalletBalance";
import WalletHistory from "./WalletHistory/WalletHistory";

const Wallet = () => {
  return (
    <>
      <WalletBalance />
      <WalletHistory />
    </>
  );
};

Wallet.propTypes = {};

Wallet.defaultProps = {};

export default Wallet;
