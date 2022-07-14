import http from "./httpService";

const hotelsAPIEndpoint = "/hotels/get";
const hotelbyIdAPIEndpoint = "/hotels/get/:id"
const hotelBookingByUserAPIEndpoint = "/hotels/get/hotelBookings/"
const createHotelBookingAPIEndpoint = "/hotels/create/hotelBookings"
const modifyHotelBookingAPIEndpoint = "/modify/hotelBookings/"

export const getHotels = () => {
    return http.get(`${hotelsAPIEndpoint}`);
};

export const getHotelById = () => {
    return http.get(`${hotelbyIdAPIEndpoint}`)
}

export const getHotelBookingByUserId = (userId) =>{
    return http.get(`${hotelBookingByUserAPIEndpoint}${userId}`)
}

export const createBooking = (hotelBookingSummary) =>{
    return http.post(`${createHotelBookingAPIEndpoint}`)
}

export const modifyBooking = (modifyBookingSummary,id) => {
    return http.post(`${modifyHotelBookingAPIEndpoint}${id}`, modifyBookingSummary)
}