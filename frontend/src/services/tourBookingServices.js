import http from "./httpService";

const tourBookingGet = "/tours/booking/fetch";
const tourBookingPost = "/tours/booking/addInfo";
const tourBookingPut = "/tours/booking/update";

export const gettourBooking = async (userId) => {
	return http.get(`${tourBookingGet}/${userId}`);
};

export const createtourBooking = async (bookingInfo) => {
	return http.post(`${tourBookingPost}`, bookingInfo);
};

export const updatetourBooking = async (bookingInfo) => {
	return http.put(`${tourBookingPut}`, bookingInfo);
};
