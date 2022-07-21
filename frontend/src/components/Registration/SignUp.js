import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import './Registration.scss'
import { send } from 'emailjs-com';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Snackbox from '../common/Snackbox/Snackbox';
import {signup} from '../../services/authService';

//references
//https://mui.com/material-ui/api/text-field/
//https://www.tutlane.com/example/angularjs/angularjs-ng-pattern-email-validation-example
//https://mui.com/material-ui/material-icons/?query=account

export default function SignupForm() {

  let flag = "y";

  const [snackBox, showSnackBox] = React.useState();
  
  const signupSuccessful = () => {
    showSnackBox(true);
    setTimeout(() => {
        send(
              'service_ejay0zu',
              'template_0x2ieie',
              toSend,
              'xWpzSTTLJH2QppF1G'
            )
              .then((response) => {
              })
              .catch((err) => {
                console.log('FAILED...', err);
              });
      showSnackBox(false);
      navigate('/login', {state:null})
    }, 1000);
  }


  const handleUserDetails = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
    const {name, value} = e.target;
    const PersonalList = {...PersonalDetailsList};
    PersonalList[name] = value;
    UpdatePersonalDetailsList(PersonalList);
  }

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

    const [toSend, setToSend] = useState({
          from_name: "team@takeoff.com",
          to_name: "",
          reply_to:"",
          Email:"",
          message: "You are successfully registered! Welcome to the takeoff application",
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


const [buttonPopup, setButtonPopup]=useState(false);

  const SaveUserDetails = () => {   
    const result = validationscheck();
    if(result !== "noerror"){
      updateErrorMessage(result);
    }else{
       signup(PersonalDetailsList.FirstName,PersonalDetailsList.LastName,PersonalDetailsList.UserName,PersonalDetailsList.Email,PersonalDetailsList.Password,PersonalDetailsList.ConfirmPassword).then(()=>{
            
            signupSuccessful();

       });

    }   
  }

  const validationscheck = () => {

    const errorlist = {};

    
    if(PersonalDetailsList.FirstName===''){
      errorlist.firstName="First name is required!";
      flag = "n";
    }
    else if(!namepattern.test(PersonalDetailsList.FirstName))
    {
        errorlist.firstName = "Please enter first name correctly"
        flag = "n";
    }

    if(PersonalDetailsList.LastName===''){
      errorlist.lastName="Last name is required!";
      flag = "n";
    }
    else if(!namepattern.test(PersonalDetailsList.LastName))
    {
        errorlist.lastName = "Please enter last name correctly"
        flag = "n";
    }

    if(PersonalDetailsList.UserName===''){
      errorlist.userName="User name is required!";
      flag = "n";
    }
    
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
          

          <form class="col-md-3 col-10"  className='signupform'>

            <div className='row reg-text'>
              <div className='col-lg-12'>
              {/* <div class="mb-2 mt-3" > */}
                <h2>
                    SignUp
                </h2>
                
            {/* </div> */}
              </div>
            </div>
            
            

            <div class="row">
                <div class="mb-3 mt-3 col-12 col-md-6">
                    <TextField id="first-name" size='small' label="first name" name="FirstName" variant="outlined" onChange={(e) => handleUserDetails(e)} />
                    {errorMessage.firstName && <div> {errorMessage.firstName} </div>}
                </div>

                <div class="mb-3 mt-3 col-12 col-md-6">
                    <TextField id="last-name" size='small' label="last name" name="LastName" variant="outlined" onChange={(e) => handleUserDetails(e) }/>
                    {errorMessage.lastName && <div> {errorMessage.lastName} </div>}
                </div>  
            </div>
              

              <div class="mb-12 mt-12" >
              <TextField fullWidth='100%' size='small' id="user-name" label="user name" variant="outlined" name="UserName" onChange={(e) => handleUserDetails(e) }/>
              {errorMessage.userName && <div> {errorMessage.userName} </div>}
              </div>
                
              <br></br>
              <div class="mb-12 mt-12">
              <TextField fullWidth='100%' size='small' id="email" label="email" variant="outlined"  name="Email" type='email' onChange={(e) => handleUserDetails(e)}/>
              {errorMessage.email && <div> {errorMessage.email} </div>}
              </div>
              
              
              

              <div class="row">
                <div class="mb-3 mt-3 col-12 col-md-6">
                <TextField fullWidth='100%' size='small' id="password" label="password" variant="outlined" name="Password" type='password' onChange={(e) => handleUserDetails(e) }/>
                {errorMessage.password && <div> {errorMessage.password} </div>}
                </div>
                
                

                <div class="mb-3 mt-3 col-12 col-md-6">
                <TextField fullWidth='100%' size='small' id="confirmpassword" label="confirm password" variant="outlined" name="ConfirmPassword" type='password' onChange={(e) => handleUserDetails(e) }/>
                {errorMessage.con && <div> {errorMessage.password} </div>}
                </div>
                
                
            </div>

              

              <div class="mb-12 mt-12">
              <Button id="submit" size='small' variant="contained" className="registrationbutton" onClick={SaveUserDetails}>Submit</Button>
              </div>

              <br></br>
              
              {snackBox ?
              <Snackbox message="Account created succesfully" severity="success" /> : null
              }

              <div className='reg-text'>
                Already have account? 
                <Link  to="/login"> Login</Link>
              </div>
          </form>


    </div>
        
    
  );
}