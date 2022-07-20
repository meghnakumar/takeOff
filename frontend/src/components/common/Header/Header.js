/**
 * @author ${Bhavesh Lalwani}
 */

import React,  { useState, useEffect} from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { Image, Text, ChakraProvider, Flex, Center, Box } from "@chakra-ui/react";
import Logo from "../../../assets/images/flight.png";
import { useNavigate } from "react-router-dom";
import {logout} from '../../../services/authService'
import Snackbox from '../Snackbox/Snackbox';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = (props) => {

  const [userName, setUserName] = useState();
  const navigator = useNavigate();
  const handleHomeRedirection = () => {
    navigator("/");
  }

  useEffect(() => {
    getUserName();
  }, [props.isLoggedIn]);

  const getUserName = () => {
    let fullName = "";
    if(localStorage.getItem("userDetails")) {
      let firstName = JSON.parse(localStorage.getItem("userDetails")).firstName;
      let lastName = JSON.parse(localStorage.getItem("userDetails")).lastName;
      fullName = firstName + " " + lastName;
    }
    setUserName(fullName);
    return fullName;
  };

  const logouts = () => {
    setUserName("");
    localStorage.clear();
    props.setIsLoggedIn(false);
    LogOutUser();
  };


  const LogOutUser = () => {
    logout();
    logoutSuccessful();
  }
  
  const [snackBox, showSnackBox] = React.useState();

  const logoutSuccessful = () => {
    showSnackBox(true);
    setTimeout(() => {
      showSnackBox(false);
      navigate('/logout', {state:null})
    }, 1000);
  }

  const navigate = useNavigate();

return (
  <div className="fixed-top">
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <ChakraProvider>
          <Box onClick={handleHomeRedirection}>
            <Flex justifyContent="center">
              <Center>
                
                <Image src={Logo} w="35px" h="35px" />
                <Text ml={2} color="white" fontSize="22px" fontWeight="bold">
                {/* <Link className="nav-link" to="/home"> */}
                  Takeoff
                  {/* </Link> */}
                </Text>
               
              </Center>
            </Flex>
            </Box>
          </ChakraProvider>
        </a>
        <img src="../../../assets/images/flight.png" alt="" />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flights">
                Flights
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hotels">
                Hotels
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/tour-packages">
                Tour Packages
              </Link>
            </li>
            <li className="nav-item ml-auto">
              <Link className="nav-link" to="/offers">
                Offers
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav" style={{marginRight: "60px"}}>
          {userName ? 
            <li className="nav-item dropdown">
              <a style={{color: "#fff"}} className="nav-link dropdown-toggle" role="button"  data-bs-toggle="dropdown" href="#"><AccountCircleOutlinedIcon /> {userName}
                </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/profile" >My Profile</Link></li>
                <li><Link className="dropdown-item" to="/bookings" >Hotel bookings</Link></li>
                <li><Link className="dropdown-item" to="/flight-bookings" >Flight bookings</Link></li>
                <li><Link className="dropdown-item" to="/cart" >Cart</Link></li>
                <li><Link className="dropdown-item" to="/wallet" >Wallet</Link></li>
                <li className="dropdown-item logout" onClick={() => { logouts() }}>Logout</li>
              </ul>
            </li>
             : 
            <li className="nav-item ml-auto" >
              <Link className="nav-link" to="/login" ><AccountCircleOutlinedIcon /> Login</Link>
            </li>
            }
            {snackBox ?
                <Snackbox message="User logged out succesfully" severity="success" /> : null
              }
          </ul>
        </div>
      </div>
    </nav>
  </div>
)
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
