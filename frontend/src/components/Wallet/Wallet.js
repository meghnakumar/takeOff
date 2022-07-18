import React from "react";
import "./Wallet.scss";
import WalletBalance from "./WalletBalance/WalletBalance";
import WalletHistory from "./WalletHistory/WalletHistory";

const Wallet = () => {
  const userid = JSON.parse(localStorage.getItem("userDetails"))._id;
  return (
    <>
      <WalletBalance userId={userid} />
      <WalletHistory userId={userid} />
    </>
  );
};

Wallet.propTypes = {};

Wallet.defaultProps = {};

export default Wallet;
