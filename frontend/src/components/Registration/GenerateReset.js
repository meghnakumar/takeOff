import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import './Registration.scss'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { send } from 'emailjs-com';
import Snackbox from '../common/Snackbox/Snackbox';

//references
//https://mui.com/material-ui/api/text-field/
//https://www.tutlane.com/example/angularjs/angularjs-ng-pattern-email-validation-example
//https://mui.com/material-ui/material-icons/?query=account

export default function ResetGenerateForm() {

  let flag = "y";

  const [userOTP, setOTP] = React.useState();
  
    useEffect(() => {
      getOTP();
    }, []);

    //random rumber generator logic
    //https://bobbyhadz.com/blog/react-generate-random-number
    function randomNumberInRange(min, max) {
        // get number between min (inclusive) and max (inclusive)
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    const getOTP = () => {
      let otp =randomNumberInRange(1000, 10000);
      setOTP(otp);
      localStorage.setItem("OTP",otp);
      setToSend({
        from_name: "team@takeoff.com",
        to_name: "",
        reply_to:"",
        Email:"",
        message: otp,
      })
      return otp;
    };
  
  const handleUserDetails = (e) => {

    setToSend({ ...toSend, [e.target.name]: e.target.value });
    const {name, value} = e.target;
    const PersonalList = {...PersonalDetailsList};
    PersonalList[name] = value;
    UpdatePersonalDetailsList(PersonalList);
  }

  const [toSend, setToSend] = useState();

  const [snackBox, showSnackBox] = React.useState();

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

  const passwordRest = () => {
    showSnackBox(true);
    localStorage.setItem("email",PersonalDetailsList.Email);
    
    setTimeout(() => {
        send(
            'service_ejay0zu',
            'template_5izzbqf',
            toSend,
            'xWpzSTTLJH2QppF1G'
          )
            .then((response) => {
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
      showSnackBox(false);
      navigate('/reset', {state:null})
    }, 1000);
  }

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
      passwordRest();
    }   
  }

  const validationscheck = () => {

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
                    Enter your verified Email
                </h2>
                
            </div>
            
            
              <br></br>
              <div class="mb-12 mt-12">
              <TextField fullWidth='100%' size='small' id="email" label="email" variant="outlined"  name="Email" type='email' onChange={(e) => handleUserDetails(e)}/>
              {errorMessage.email && <div> {errorMessage.email} </div>}
              </div>
              <br></br>
              
              
              <br></br>

              <div class="mb-12 mt-12">
              <Button id="submit" size='small' variant="contained" className="registrationbutton" onClick={SaveUserDetails}>Submit</Button>
              </div>

              <br></br>
              
              {snackBox ?
              <Snackbox message="An otp has been sent to your verified email address" severity="success" /> : null
              }

              <div className='reg-text'>
                Already have account? 
                <Link  to="/login"> Login</Link>
              </div>
          </form>


    </div>
        
    
  );
}