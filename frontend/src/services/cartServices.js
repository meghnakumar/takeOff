import http from "./httpService";

const cartItemsget = "/cart";
const cartAddItem = "/cart";
const cartItemDelete = "/cart";

export const getCartItems = async (userId) => {
  return http.get(`${cartItemsget}/${userId}`);
};

export const addCartItem = async (cartItem) => {
  return http.post(`${cartAddItem}`, cartItem);
};

export const deleteCartItem = async (cartId) => {
  return http.delete(`${cartItemDelete}/${cartId}`);
};
