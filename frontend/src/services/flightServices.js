import http from "./httpService";

const flightsAPIEndpoint = "/flights";

export const getAllFlights = () => {
	return http.get(`${flightsAPIEndpoint}`);
};
