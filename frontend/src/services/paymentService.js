import http from "./httpService";

const getCardsEndpoint = "/payment/getcards/";
const addCardEndpoint = "/payment/addcard/";

export const getAllCards = async () => {
  return http.get(`${getCardsEndpoint}`);
};

export const addCard = async () => {
  return http.post(`${addCardEndpoint}`);
};
