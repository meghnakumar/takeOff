import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState ,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { send } from 'emailjs-com';
import Snackbox from '../common/Snackbox/Snackbox';
import {login, setUserToken} from '../../services/authService';
import './Registration.scss'

//references
//https://mui.com/material-ui/api/text-field/
//https://www.tutlane.com/example/angularjs/angularjs-ng-pattern-email-validation-example
//https://mui.com/material-ui/material-icons/?query=account

export default function SignupForm(props) {

  let flag = "y";

  const handleUserDetails = (e) => {

    const {name, value} = e.target;

    setToSend({ ...toSend, [e.target.name]: e.target.value });
    console.log("email sent : ",toSend)
    const PersonalList = {...PersonalDetailsList};
    PersonalList[name] = value;
    console.log(PersonalList);
    UpdatePersonalDetailsList(PersonalList);
    
  }

  const [toSend, setToSend] = useState({
      from_name: "team@takeoff.com",
      to_name: "",
      reply_to:"",
      Email:"",
      message: "You are logged in! Welcome to the takeoff",
    });

  const [errorMessage,updateErrorMessage] = useState({
    email : "",
    userName:"",
    phoneNumber: "",
    firstName: "",
    lastName : "",
    DOB: "",
    password: "",
    confirmpassword: ""
  });

  const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
  const namepattern = /^[a-z]+$/i;

  const [PersonalDetailsList, UpdatePersonalDetailsList] = useState({
    UserID : "1",
    UserName:"",
    FirstName: "",
    LastName : "",
    Email : "",
    Password : "",
    ConfirmPassword : ""
  });

  const validationscheck = () => {

    console.log(PersonalDetailsList);
    const errorlist = {};

    if(PersonalDetailsList.Email===''){
      errorlist.email="Email is required!";
      flag = "n";
    }
    else if(!emailpattern.test(PersonalDetailsList.Email))
    {
        errorlist.email = "Incorrect Email entered"
        flag = "n"; 
    }


    if(PersonalDetailsList.Password===''){
      errorlist.password="Password is required!";
      flag = "n";
    }
    else if(PersonalDetailsList.Password.length<5){
      errorlist.password="Please enter a password having atleast 5 characters"
      flag = "n";
    }
    else if(PersonalDetailsList.Password.length>15){
      errorlist.password="Please enter a password having less than 15 characters"
      flag = "n";
    }

    console.log(errorlist);
    if(flag === "n")
        return errorlist;
    else
        return "noerror";
  }

  const [success, showSuccess] = React.useState();
  const [error, showError] = React.useState();

  const loginSuccessful = () => {
    showSuccess(true);
    setTimeout(() => {
        send(
              'service_aks72nt',
              'template_j2fcgeg',
              toSend,
              'BbOaPQawKNmE3FZf4'
            )
              .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                props.setIsLoggedIn(true);
              })
              .catch((err) => {
                console.log('FAILED...', err);
              });
              showSuccess(false);
        navigate('/', {state:null})
    }, 500);
  }


  const loginFailed = () => {
    showError(true);
      setTimeout(() => {
        showError(false);
      }, 500);
    }

  const SaveUserDetails = () => {   
    const result = validationscheck();
    if(result !== "noerror"){
      updateErrorMessage(result);
    } else{

        login(PersonalDetailsList.Email,PersonalDetailsList.Password).then( res=>{
          if(res){
            setUserToken(PersonalDetailsList.Email);
            localStorage.setItem("token",res.data.token);
            loginSuccessful();
          }else{
            loginFailed();
          }
          
          

          });
    } 
  }
  
  const navigate = useNavigate();

  return (
    <div class="div-1"  >
        
        <form class="col-sm-3 col-md col-10"  className='loginform'>

            <div class="mb-3 mt-3" className='reg-text'>
                <h3>
                    Login
                </h3>
                
            </div>
            
            
            <div class="mb-3 mt-3">
            <TextField id="email" fullWidth='100%' label="email" variant="outlined" name="Email" onChange={(e) => handleUserDetails(e)}/>
            {errorMessage.email && <div> {errorMessage.email} </div>}
            </div>

            <div class="mb-3 mt-3">
            <TextField id="password" fullWidth='100%' label="password" variant="outlined" name="Password" type='password' onChange={(e) => handleUserDetails(e)  }/>
            {errorMessage.password && <div> {errorMessage.password} </div>}
            </div>

            <div class="mb-3 mt-3">
            <Button id="submit" variant="contained" className="registrationbutton" onClick={SaveUserDetails}>Submit</Button>
            </div>
            <br></br>

            {
            success ?
              <Snackbox message="User logged in succesfully" severity="success" /> : null
            }
            {
              error ? 
              <Snackbox message="Wrong credential!" severity="error" /> : null
            }

            <div className='reg-text'>
                
                <Link  to="/signup">or Signup</Link>
            </div>

            <div className='reg-text'>
                <a href="/generateReset">Forgot password?</a>
            </div>
        </form>
        
        
    </div>
        
    
  );
}