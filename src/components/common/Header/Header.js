import React from 'react';
import './Header.scss';
import { Link } from "react-router-dom";
import { Image, Text, ChakraProvider, Flex, Center, Box } from "@chakra-ui/react";
import Logo from "../../../assets/images/flight.png";
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
  const navigator = useNavigate();
  const handleHomeRedirection = () => {
    navigator("/");
  }
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
            {/* <li className="nav-item">
              <Link className="nav-link" to="/bus">
                Bus
              </Link>
            </li> */}
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
            <li className="nav-item dropdown">
              <a style={{color: "#fff"}} className="nav-link dropdown-toggle" role="button"  data-bs-toggle="dropdown" href="#"><AccountCircleOutlinedIcon />
                </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/profile" >My Profile</Link></li>
                <li><Link className="dropdown-item" to="/bookings" >Hotel bookings</Link></li>
                <li><Link className="dropdown-item" to="/flight-bookings" >Flight bookings</Link></li>
                {/* <li>
                  <a style={{color: "#000"}} className="dropdown-item">TEST
                  </a>
                  <ul className="submenu dropdown-menu">
                  <li><Link className="dropdown-item" to="/profile" >Flight booking</Link></li>
                  <li><Link className="dropdown-item" to="/bookings" >Hotel booking</Link></li>
                  </ul>
                </li> */}
                <li><Link className="dropdown-item" to="/cart" >Cart</Link></li>
                <li><Link className="dropdown-item" to="/wallet" >Wallet</Link></li>
              </ul>
            </li>
            <li className="nav-item ml-auto" >
              <Link className="nav-link" to="/login" >Login</Link>
            </li>
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
