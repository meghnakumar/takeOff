import http from "./httpService";

const tourBookingGet = "/tours/booking/fetch";
const tourBookingPost = "/tours/booking/addInfo";
const tourBookingPut = "/tours/booking/update";

export const gettourBooking = async (id) => {
	return http.get(`${tourBookingGet}/${id}`);
};

export const createtourBooking = async (bookingInfo) => {
	return http.post(`${tourBookingPost}`, bookingInfo);
};

export const updatetourBooking = async (bookingInfo, id) => {
	return http.put(`${tourBookingPut}/${id}`, bookingInfo);
};
