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
import Logo from "../../assets/images/building.png";
import "./Home.scss";
import HomeSearch from "./HomeSearch";
import { MdFlight } from "react-icons/md";
import { FaBusAlt } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";
import { GiPartyPopper } from "react-icons/gi";
import { BiTrip } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigator = useNavigate("/home");

  const handleNavigation = (value) => {
    if (value === "flight") {
      navigator("/flights");
    } else if (value === "bus") {
      navigator("/bus");
    } else if (value === "hotels") {
      navigator("/hotels");
    } else if (value === "event") {
      navigator("/events");
    } else if (value === "offers") {
      navigator("/offers");
    } else {
      navigator("/tour-packages");
    }
  };

  return (
    <ChakraProvider>
      <Box
        className="background"
        pt={10}
        pb={10}
        w="100%"
        h="100vh"
        bgGradient="linear(to-r, #F36084, #FF9090)"
      >
        <Grid
          templateRows="repeat(3, 1fr)"
          templateColumns={{ base: "repeat(10, 1fr)", md: "repeat(10, 1fr)" }}
          gap={4}
        >
          <GridItem
            rowSpan={1}
            colStart={{ base: 2, md: 4 }}
            colEnd={{ base: 10, md: 8 }}
          >
            <Flex justifyContent="center">
              <Center>
                <Image src={Logo} w="35px" h="35px" />
                <Text ml={2} color="white" fontSize="22px" fontWeight="bold">
                  Takeoff
                </Text>
              </Center>
            </Flex>
            <HomeSearch />
          </GridItem>

          <GridItem
            rowSpan={2}
            colStart={{ base: 2, md: 2 }}
            colEnd={{ base: 10, md: 10 }}
          >
            <SimpleGrid columns={3} spacing={10}>
              <Box
                p="5"
                minW="280px"
                borderRadius={5}
                bg="white"
                onClick={() => handleNavigation("flight")}
              >
                <Badge variant="subtle" colorScheme="green">
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
              >
                <Badge variant="subtle" colorScheme="green">
                  Hotels
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <RiHotelFill size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Book Hotels
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
                onClick={() => handleNavigation("bus")}
              >
                <Badge variant="subtle" colorScheme="green">
                  Bus
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <FaBusAlt size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Book Buses
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
                onClick={() => handleNavigation("event")}
              >
                <Badge variant="subtle" colorScheme="green">
                  Events
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <GiPartyPopper size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Book Events
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
                onClick={() => handleNavigation("tours")}
              >
                <Badge variant="subtle" colorScheme="green">
                  Tour Packages
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <BiTrip size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Book Tours
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
                onClick={() => handleNavigation("offers")}
              >
                <Badge variant="subtle" colorScheme="green">
                  Offers
                </Badge>
                <Flex mt={3} justifyContent="left">
                  <TbDiscount2 size="40px" />
                  <Heading mt={2} ml={2} as="h4" size="md">
                    Get Best Deals
                  </Heading>
                </Flex>
                <Text mt={3} noOfLines={2} fontSize="sm" opacity={0.5}>
                  Get best flight deals at cheaper rates with assurance of
                  takeoff.
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
