import http from "./httpService";

const getCardsEndpoint = "/payment/getcards";
const addCardEndpoint = "/payment/addcard";
const addInitialUserEndpoint = "/payment/addinitialuser/";

export const addInitialUser = async (id) => {

  return http.get(`${addInitialUserEndpoint}${id}`);
  
  };

export const getAllCards = async (id) => {
  return http.get(`${getCardsEndpoint}?id=${id}`);
};

export const addCard = async (body) => {
  return http.post(`${addCardEndpoint}`, body);
};
