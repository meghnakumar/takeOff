import http from "./httpService";

const eventsAPIEndpoint = "/events/get";

export const getEvents = () => {
	return http.get(`${eventsAPIEndpoint}`);
};
