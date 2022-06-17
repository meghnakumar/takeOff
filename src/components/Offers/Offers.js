import React from 'react';
import { ChakraProvider } from "@chakra-ui/react";
import "./Offers.scss";
import OffersHead from "./Header/OffersHead";
import OffersGrid from "./Grid/OffersGrid";

const Offers = () => {
  return (
    <ChakraProvider>
      <OffersHead />
      <OffersGrid />
    </ChakraProvider>
  );
};

Offers.propTypes = {};

Offers.defaultProps = {};

export default Offers;
