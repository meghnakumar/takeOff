import http from "./httpService";

const getCardsEndpoint = "/payment/getcards";
const addCardEndpoint = "/payment/addcard";

export const getAllCards = async (id) => {
  return http.get(`${getCardsEndpoint}?id=${id}`);
};

export const addCard = async (body) => {
  return http.post(`${addCardEndpoint}`, body);
};
