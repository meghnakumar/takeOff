import http from "./httpService";

/* Author: Created by Meghna Kumar
exports functions that create a connection with the backend and make the API calls
 */

const addReviewHotelAPIEndpoint = 'hotels/addReview/'
export const addReviewHotel = (review,id) => {
    return http.put(`${addReviewHotelAPIEndpoint}${id}`, review)
}