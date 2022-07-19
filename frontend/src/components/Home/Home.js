import React from 'react';
import {
  ChakraProvider,
  Box,
  Image,
  Text,
  Flex,
  Center,
  Grid,
  GridItem,
  SimpleGrid,
  Badge,
  Heading,
} from "@chakra-ui/react";
import Logo from "../../assets/images/flight.png";
import "./Home.scss";
import HomeSearch from "./HomeSearch";
import { MdFlight, MdLogin } from "react-icons/md";
import { RiHotelFill } from "react-icons/ri";
import { GiPartyPopper } from "react-icons/gi";
import { BiTrip } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

import { useNavigate } from "react-router-dom";

//references
//https://mui.com/material-ui/

const Home = ({ isLoggedIn }) => {
  const navigator = useNavigate("/home");

  const handleNavigation = (value) => {
    if (value === "flight") {
      navigator("/flights");
    } else if (value === "login") {
      navigator("/login");
    } else if (value === "hotels") {
      navigator("/hotels");
    } else if (value === "event") {
      navigator("/events");
    } else if (value === "offers") {
      navigator("/offers");
    } else if (value == "profile") {
      navigator("/profile");
    } else {
      navigator("/home");
    }
  };

  return (
    <ChakraProvider>
      <Box
        className="background"
        pt={10}
        pb={10}
        w="100%"
        h={{ base: "100%", md: "100vh" }}
        bgGradient="linear(to-r, #63a4ff, #83c2f1)"
      >
        <Grid
          templateRows={{ base: "repeat(6, 0.2fr)", md: "repeat(3, 1fr)" }}
          templateColumns={{ base: "repeat(10, 1fr)", md: "repeat(10, 1fr)" }}
          gap={4}
        >
          <GridItem
            rowSpan={{ base: 1, md: 1 }}
            colStart={{ base: 2, md: 4 }}
            colEnd={{ base: 10, md: 8 }}
          >
            <Flex justifyContent="center" mt={10}>
              <Center>
                <Image src={Logo} w="55px" h="55px" />
                <Text ml={2} color="white" fontSize="50px" fontWeight="bold">
                  Takeoff
                </Text>
              </Center>
            </Flex>
            {/* <HomeSearch /> */}
          </GridItem>

          <GridItem
            rowSpan={{ base: 4, md: 2 }}
            colStart={{ base: 2, md: 2 }}
            colEnd={{ base: 10, md: 10 }}
          >
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
              <Box
                p="5"
                minW="280px"
                borderRadius={5}
                bg="white"
                onClick={() => handleNavigation("flight")}
                style={{ cursor: "pointer" }}
              >
                <Badge variant="subtle" colorScheme="blue">
                  Flights
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <MdFlight size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Book Flights
                  </Heading>
                </Flex>
                <Text mt={3} noOfLines={2} fontSize="sm" opacity={0.5}>
                  Get best flight deals at cheaper rates with assurance of
                  takeoff.
                </Text>
              </Box>
              <Box
                p="5"
                minW="280px"
                borderRadius={5}
                bg="white"
                onClick={() => handleNavigation("hotels")}
                style={{ cursor: "pointer" }}
              >
                <Badge variant="subtle" colorScheme="blue">
                  Hotels
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <RiHotelFill size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Book Hotels
                  </Heading>
                </Flex>
                <Text mt={3} noOfLines={2} fontSize="sm" opacity={0.5}>
                  Get best hotel deals at cheaper rates with assurance of
                  takeoff.
                </Text>
              </Box>
              <Box
                p="5"
                minW="280px"
                borderRadius={5}
                bg="white"
                onClick={() => handleNavigation("login")}
                style={{ cursor: "pointer" }}
                display={!isLoggedIn ? "block" : "none"}
              >
                <Badge variant="subtle" colorScheme="blue">
                  Login
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <MdLogin size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Login
                  </Heading>
                </Flex>
                <Text mt={3} noOfLines={2} fontSize="sm" opacity={0.5}>
                  Login into your account for faster checkout.
                </Text>
              </Box>

              <Box
                p="5"
                minW="280px"
                borderRadius={5}
                bg="white"
                onClick={() => handleNavigation("profile")}
                style={{ cursor: "pointer" }}
                display={isLoggedIn ? "block" : "none"}
              >
                <Badge variant="subtle" colorScheme="blue">
                  Profile
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <CgProfile size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Profile
                  </Heading>
                </Flex>
                <Text mt={3} noOfLines={2} fontSize="sm" opacity={0.5}>
                  Check Your profile details.
                </Text>
              </Box>

              <Box
                p="5"
                minW="280px"
                borderRadius={5}
                bg="white"
                onClick={() => handleNavigation("event")}
                style={{ cursor: "pointer" }}
              >
                <Badge variant="subtle" colorScheme="blue">
                  Events
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <GiPartyPopper size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Book Events
                  </Heading>
                </Flex>
                <Text mt={3} noOfLines={2} fontSize="sm" opacity={0.5}>
                  We are here to help you book a near by event.
                </Text>
              </Box>
              <Box
                p="5"
                minW="280px"
                borderRadius={5}
                bg="white"
                onClick={() => handleNavigation("tours")}
                style={{ cursor: "pointer" }}
              >
                <Badge variant="subtle" colorScheme="blue">
                  Tour Packages
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <BiTrip size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Book Tours
                  </Heading>
                </Flex>
                <Text mt={3} noOfLines={2} fontSize="sm" opacity={0.5}>
                  Get more than 1000 tour packges to choose from.
                </Text>
              </Box>
              <Box
                p="5"
                minW="280px"
                borderRadius={5}
                bg="white"
                onClick={() => handleNavigation("offers")}
                style={{ cursor: "pointer" }}
              >
                <Badge variant="subtle" colorScheme="blue">
                  Offers
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <TbDiscount2 size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Get Best Deals
                  </Heading>
                </Flex>
                <Text mt={3} noOfLines={2} fontSize="sm" opacity={0.5}>
                  Get best deals at cheaper rates with assurance of takeoff.
                </Text>
              </Box>
            </SimpleGrid>
          </GridItem>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default Home;
