import http from "./httpService";

const usersGetAllAPIEndpoint = "/users/getall";
const usersFetchAPIEndpoint = "/users/fetch";
const usersAddAPIEndpoint = "/users/addUser";
const usersUpdateAPIEndpoint = "/users/update";

export const getAllUsers = () => {
    return http.get(`${usersGetAllAPIEndpoint}`);
};

export const fetchUser = async(emailId) => {
    return http.get(`${usersFetchAPIEndpoint}/${emailId}`);
};

export const addUser = async(userInfo) => {
    return http.post(`${usersAddAPIEndpoint}`,userInfo);
};

export const updateUser = async(userInfo) => {
    var emailId=userInfo.email
    return http.put(`${usersUpdateAPIEndpoint}/${emailId}`,userInfo);
};



