import http from "./httpService";

const walletGetBalance = "/wallet/";
const walletAddMoney = "/wallet";
const walletGetHistory = "/wallet/history";
const walletAddTransaction = "/wallet/transaction";
const walletAddInitialBalance = "/wallet/initialbalance";
const walletUpdateMoney = "/wallet/update";

export const addInitialBalance = async (userId) => {
  return http.post(`${walletAddInitialBalance}/${userId}`);
};

export const addMoney = async (walletInfo) => {
  return http.post(`${walletAddMoney}`, walletInfo);
};

export const updateMoney = async (walletInfo) => {
  return http.post(`${walletUpdateMoney}`, walletInfo);
};

export const getWalletHistory = async (userId) => {
  return http.get(`${walletGetHistory}/${userId}`);
};

export const addTransaction = async (walletInfo) => {
  return http.post(`${walletAddTransaction}`, walletInfo);
};

export const getWalletBalance = async (userId) => {
  return http.get(`${walletGetBalance}/${userId}`);
};
