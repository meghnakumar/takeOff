import http from "./httpService";

const eventBookingGet = "/events/booking/fetch";
const eventBookingPost = "/events/booking/addInfo";
const eventBookingPut = "/events/booking/update";

export const getEventBooking = async (userId) => {
	return http.get(`${eventBookingGet}/${userId}`);
};

export const createEventBooking = async (bookingInfo) => {
	return http.post(`${eventBookingPost}`, bookingInfo);
};

export const updateEventBooking = async (bookingInfo, id) => {
	return http.put(`${eventBookingPut}/${id}`, bookingInfo);
};
