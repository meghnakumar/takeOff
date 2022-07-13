import http from "./httpService";

const offersEndPoint = "/offers/getoffers";
const mainOffersEndPoint = "offers/mainoffer";

export const getOffers = () => {
  return http.get(`${offersEndPoint}`);
};

export const getMainOffer = () => {
  return http.get(`${mainOffersEndPoint}`);
};
