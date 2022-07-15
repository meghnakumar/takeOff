import http from "./httpService";

const toursAPIEndpoint = "/tours/get";

export const getTours = () => {
	return http.get(`${toursAPIEndpoint}`);
};
