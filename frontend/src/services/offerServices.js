import http from "./httpService";

const offersEndPoint = "/offers/getoffers";
const mainOffersEndPoint = "offers/mainoffer";
const promoValidationEndPoint = "offers/validoffer";

export const getOffers = async () => {
  return http.get(`${offersEndPoint}`);
};

export const getMainOffer = async () => {
  return http.get(`${mainOffersEndPoint}`);
};

export const getPromoValidation = async (data) => {
  return http.post(`${promoValidationEndPoint}`, data);
};