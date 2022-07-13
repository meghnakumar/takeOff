import http from "./httpService";

const hotelsAPIEndpoint = "/hotels/get";

export const getHotels = () => {
    return http.get(`${hotelsAPIEndpoint}`);
};