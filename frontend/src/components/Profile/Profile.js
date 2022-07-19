import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState ,useEffect} from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Snackbox from '../common/Snackbox/Snackbox';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useNavigate } from "react-router-dom";
import {logout} from '../../services/authService';
import './Profile.scss'

//references
//https://mui.com/material-ui/api/text-field/
//https://www.tutlane.com/example/angularjs/angularjs-ng-pattern-email-validation-example
//https://mui.com/material-ui/material-icons/?query=account

export default function ProfileScreen(props) {
    const [userFullName, setFullName] = React.useState();
    const [userEmail, setEmail] = React.useState();
    const [userName, setUserName] = React.useState();
      useEffect(() => {
        getFullName();
        getEmail();
        getUserName();
      }, []);


      const getFullName = () => {
        let fullName = "";
        if(localStorage.getItem("userDetails")) {
          let firstName = JSON.parse(localStorage.getItem("userDetails")).firstName;
          let lastName = JSON.parse(localStorage.getItem("userDetails")).lastName;
          fullName = firstName + " " + lastName;
        }
        setFullName(fullName);
        return fullName;
      };

      const getEmail = () => {
              let email = "";
              if(localStorage.getItem("userDetails")) {
                email = JSON.parse(localStorage.getItem("userDetails")).email;

              }
              setEmail(email);
              return email;
            };

       const getUserName = () => {
                     let userName = "";
                     if(localStorage.getItem("userDetails")) {
                       userName = JSON.parse(localStorage.getItem("userDetails")).userName;
                     }
                     setUserName(userName);
                     return userName;
                   };



  const LogOutUser = () => {
    logout();
    logoutSuccessful();
    props.setIsLoggedIn(false);
  }
  
  const [snackBox, showSnackBox] = React.useState();

  const logoutSuccessful = () => {
    showSnackBox(true);
    setTimeout(() => {
      showSnackBox(false);
      navigate('/logout', {state:null})
    }, 500);
  }

  const navigate = useNavigate();

  return (
    <div class="div-1">
        
        <Grid container className='profileContainer' xs={6}>
        <Grid item xs={3} >
            <AccountBoxIcon sx={{ fontSize: 200 }}/>
        </Grid>
        <Grid item xs={9} align = "center">
                <div class="mb-3 mt-3 col-12 col-md-6">
                <TableContainer component={Paper}>
                    <Table  size="small" aria-label="a dense table">
                      
                      <TableBody>
                          <TableRow key="Name" >
                            
                            <TableCell align="center">{userFullName}</TableCell>
                            
                          </TableRow>
                          <TableRow key="Email" >
                            
                            <TableCell align="center"> {userEmail} </TableCell>
                            
                          </TableRow>
                          <TableRow key="Gender" >
                            
                            <TableCell align="center">{userName}</TableCell>
                            
                          </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
                

                <div class="mb-2 mt-2 col-12 col-md-6">
                    <Button id="submit" variant="contained" className="registrationbutton" onClick={LogOutUser} >Logout</Button>
                </div>  
                
              {snackBox ?
                <Snackbox message="User logged out succesfully" severity="success" /> : null
              }

          
        </Grid>
      </Grid>
        
        
    </div>
        
    
  );
}