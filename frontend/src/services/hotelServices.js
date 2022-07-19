import http from "./httpService";

/* Author: Created by Meghna Kumar
exports functions that create a connection with the backend and make the API calls
 */

const hotelsAPIEndpoint = "/hotels/get";
const hotelbyIdAPIEndpoint = "/hotels/get/:id"
const hotelBookingByUserAPIEndpoint = "/hotels/get/hotelBookings/"
const createHotelBookingAPIEndpoint = "/hotels/create/hotelBookings"
const modifyHotelBookingAPIEndpoint = "hotels/modify/hotelBookings/"
const cancelHotelBookingAPIEndpoint = "hotels/cancel/hotelBookings/"
const updateHotelBookingStatusAPIEndpoint = "hotels/updateBookingStatus/"

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

export const updateHotelBookingStatus = (body,id) =>{
    return http.put(`${updateHotelBookingStatusAPIEndpoint}${id}`, body)
}