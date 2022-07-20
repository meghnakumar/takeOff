import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './Registration.scss'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Snackbox from '../common/Snackbox/Snackbox';
import {updateUser} from '../../services/userServices';
const bcrypt = require("bcryptjs");

//references
//https://mui.com/material-ui/api/text-field/
//https://www.tutlane.com/example/angularjs/angularjs-ng-pattern-email-validation-example
//https://mui.com/material-ui/material-icons/?query=account

export default function SignupForm() {

  let flag = "y";

  const handleUserDetails = (e) => {

    const {name, value} = e.target;
    const PersonalList = {...PersonalDetailsList};
    PersonalList[name] = value;
    UpdatePersonalDetailsList(PersonalList);
  }

  const [snackBox, showSnackBox] = React.useState();

  const [errorMessage,updateErrorMessage] = useState({
    otp : "",
    password: "",
    confirmpassword: ""
  });

  const passwordRest = () => {
    showSnackBox(true);
    let email=localStorage.getItem("email");
    
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(PersonalDetailsList.Password, salt, (err, hash) => {
        if (err) throw err;
        PersonalDetailsList.Password = hash;
        
      });
    });

    setTimeout(() => {
      showSnackBox(false);
      updateUser({email:email, password:PersonalDetailsList.Password});
      navigate('/login', {state:null})
    }, 2000);
  }

const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

  const [PersonalDetailsList, UpdatePersonalDetailsList] = useState({
    Otp:"",
    Password : "",
    ConfirmPassword : "",
    
  });

const [buttonPopup, setButtonPopup]=useState(false);

  const SaveUserDetails = () => {   
    const result = validationscheck();
    if(result !== "noerror"){
      updateErrorMessage(result);
    }else{
      passwordRest();
    }   
  }

  const validationscheck = () => {

    
    const errorlist = {};
    let otp=localStorage.getItem("OTP");
    
    if(PersonalDetailsList.Email===''){
      errorlist.email="Otp field is empty!";
      flag = "n";
    }
    else if(otp!==PersonalDetailsList.Email)
    {
        errorlist.email = "Incorrect OTP entered"
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

    if(PersonalDetailsList.ConfirmPassword===''){
        errorlist.confirmpassword="Confirm Password is required!";
        flag = "n";
      }
      else if(PersonalDetailsList.ConfirmPassword.length<5){
        errorlist.confirmpassword="Please enter a confirm password having atleast 5 characters"
        flag = "n";
      }
      else if(PersonalDetailsList.ConfirmPassword.length>15){
        errorlist.confirmpassword="Please enter a confirm password having less than 15 characters"
        flag = "n";
      }else if(PersonalDetailsList.ConfirmPassword!==PersonalDetailsList.Password){
        errorlist.confirmpassword="password and confirm password should match"
        flag = "n";
      }


    if(flag === "n")
        return errorlist;
    else
        return "noerror";
  }

  const navigate = useNavigate();


  return (
    <div class="div-1">
          

          <form class="col-md-3 col-10" className='resetform' >

            <div class="mb-2 mt-3" className='reg-text'>
                <h2>
                    Reset Password
                </h2>
                
            </div>
            
            
              <br></br>
              <div class="mb-12 mt-12">
            <TextField id="email" fullWidth='100%' label="OTP" variant="outlined" name="Email" onChange={(e) => handleUserDetails(e)}/>
            {errorMessage.email && <div> {errorMessage.email} </div>}
            </div>

              <br></br>
              <div class="mb-12 mt-12">
              <TextField fullWidth='100%' size='small' id="password" label="password" variant="outlined" name="Password" type='password' onChange={(e) => handleUserDetails(e) }/>
              {errorMessage.password && <div> {errorMessage.password} </div>}
              </div>
              <br></br>
              <div class="mb-12 mt-12">
              <TextField fullWidth='100%' size='small' id="confirm password" label="confirm password" variant="outlined" name="ConfirmPassword" type='password' onChange={(e) => handleUserDetails(e) }/>
              {errorMessage.con && <div> {errorMessage.password} </div>}
              </div>
              <br></br>

              <div class="mb-12 mt-12">
              <Button id="submit" size='small' variant="contained" className="registrationbutton" onClick={SaveUserDetails}>Submit</Button>
              </div>

              <br></br>
              
              {snackBox ?
              <Snackbox message="Password updated succesfully" severity="success" /> : null
              }

              <div className='reg-text'>
                Already have account? 
                <Link  to="/login"> Login</Link>
              </div>
          </form>


    </div>
        
    
  );
}