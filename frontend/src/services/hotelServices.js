import http from "./httpService";

const hotelsAPIEndpoint = "/hotels/get";
const hotelbyIdAPIEndpoint = "/hotels/get/:id"
const hotelBookingByUserAPIEndpoint = "/hotels/get/hotelBookings/"
const createHotelBookingAPIEndpoint = "/hotels/create/hotelBookings"
const modifyHotelBookingAPIEndpoint = "hotels/modify/hotelBookings/"
const cancelHotelBookingAPIEndpoint = "hotels/cancel/hotelBookings/"

export const getHotels = () => {
    return http.get(`${hotelsAPIEndpoint}`);
};

export const getHotelById = () => {
    return http.get(`${hotelbyIdAPIEndpoint}`)
}

export const getHotelBookingByUserId = (userId) =>{
    return http.get(`${hotelBookingByUserAPIEndpoint}${userId}`)
}

export const createHotelBooking = (hotelBookingSummary) =>{
    return http.post(`${createHotelBookingAPIEndpoint}`,hotelBookingSummary)
}

export const modifyHotelBooking = (modifyBookingSummary,id) => {
    return http.put(`${modifyHotelBookingAPIEndpoint}${id}`, modifyBookingSummary)
}

export const cancelHotelBooking = (id) => {
    return http.get(`${cancelHotelBookingAPIEndpoint}${id}`)
}