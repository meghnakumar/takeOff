import http from "./httpService";
import jwtDecode from "jwt-decode";

const apiEndpoint = "/auth/jwt/create/";
const apiUserEndpoint = "/users/login";
const apiUserSignupEndpoint = "/users/addUser";


const tokenKey = "dms_token";

async function login(email, password) {

  const { data } = await http.post(apiUserEndpoint, { email, password });
  console.log("data "+data.access);
  localStorage.setItem(tokenKey, data.access);
}

async function signup(firstName,lastName, userName,email,password,confirmPassword) {

  const { data } = await http.post(apiUserSignupEndpoint, { firstName,lastName, userName,email,password,confirmPassword });
  console.log("signup data "+data.access);
  localStorage.setItem(tokenKey, data.access);
}


function logout() {
  localStorage.removeItem(tokenKey);
}

function getJwt() {
  return localStorage.getItem(tokenKey);
}

function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

async function getCurrentUser() {
  try {
    const jwt = getJwt();
    if (jwt === null) return null;
    jwtDecode(jwt);

    http.setJwt(jwt);
    const { data } = await http.get(apiUserEndpoint);

  } catch (ex) {
    return null;
  }
}

export  {
  login,
  signup,
  logout,
  getCurrentUser,
  loginWithJwt,
  getJwt,
};
