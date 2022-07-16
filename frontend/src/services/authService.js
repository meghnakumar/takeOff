import http from "./httpService";
import jwtDecode from "jwt-decode";


const apiEndpoint = "/auth/jwt/create/";
const apiUserEndpoint = "/users/login";
const apiUserSignupEndpoint = "/users/addUser";
const apiUserFetchEndpoint = "/users/fetch";



const tokenKey = "token";

async function login(email, password) {


  http.post(apiUserEndpoint, { email, password }).then((res) => {
      console.log("data "+res.data.success);

       setUserToken(email);
      localStorage.setItem("token",res.data.token);


  }).catch((err)=>{
  console.log("data "+err);
  });

}

function setUserToken(email){
    let url=apiUserFetchEndpoint+"/"+email;
           console.log(url);
            http.get(url).then((user)=>{
                console.log("user data : "+user.data[0].lastName);
                localStorage.setItem("userDetails", JSON.stringify(user.data[0]));
            })
}

async function signup(firstName,lastName, userName,email,password,confirmPassword) {

  http.post(apiUserSignupEndpoint, { firstName,lastName, userName,email,password,confirmPassword })
  .then((res) => {
             console.log("data "+res.data);
             setUserToken(email);
             localStorage.setItem("token",res.data.token);
             }).catch((err)=>{
             console.log("data "+err);
             });

}


function logout() {
  console.log("deleting token");
  localStorage.removeItem("token");
  localStorage.removeItem("userDetails")
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
    const data  = await http.get(apiUserEndpoint);

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
