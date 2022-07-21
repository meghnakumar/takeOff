import http from "./httpService";
import {addInitialBalance} from "./walletServices";
import {addInitialUser} from "./paymentService";


const apiEndpoint = "/auth/jwt/create/";
const apiUserEndpoint = "/users/login";
const apiUserSignupEndpoint = "/users/addUser";
const apiUserFetchEndpoint = "/users/fetch";




const tokenKey = "token";

function login(email, password) {

  return http.post(apiUserEndpoint, { email, password })

}

function setUserToken(email){
    let url=apiUserFetchEndpoint+"/"+email;
            return http.get(url).then((user)=>{
                localStorage.setItem("userDetails", JSON.stringify(user.data[0]));
                addInitialBalance(JSON.parse(localStorage.getItem("userDetails"))._id)
                addInitialUser(JSON.parse(localStorage.getItem("userDetails"))._id);
            })
}

async function signup(firstName,lastName, userName,email,password,confirmPassword) {

  http.post(apiUserSignupEndpoint, { firstName,lastName, userName,email,password,confirmPassword })
  .then((res) => {
             setUserToken(email);
             localStorage.setItem("token", res.data.token);
             }).catch((err)=>{
             console.log("data "+err);
             });

}


function logout() {
  localStorage.clear();
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}



export  {
  login,
  signup,
  logout,
  setUserToken
};
