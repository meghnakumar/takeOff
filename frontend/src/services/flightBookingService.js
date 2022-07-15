import http from "./httpService";

const getFlightBookingsAPI = "/flightbookings";
const createFlightBookingsAPI = "/flightbookings/add";
const updateFlightBookingsAPI = "/flightbookings/update";

export const getFlightBooking = async (userId) => {
	return http.get(`${getFlightBookingsAPI}/${userId}`);
};

export const createFlightBooking = async (bookingInfo) => {
	return http.post(`${createFlightBookingsAPI}`, bookingInfo);
};

export const updateFlightBooking = async (bookingInfo) => {
	return http.put(`${updateFlightBookingsAPI}`, bookingInfo);
};
