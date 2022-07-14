import http from "./httpService";

const usersAPIEndpoint = "/users/get";

export const getHotels = () => {
    return http.get(`${usersAPIEndpoint}`);
};