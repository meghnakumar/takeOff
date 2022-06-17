import { Box, Heading, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import WalletCard from "./WalletCard/WalletCard";
import AddCard from "./Card/AddCard";
import Cart from "./Cart/Cart";

import wallet from "../../assets/data/wallet.js";
import payment from "../../assets/data/payment.js";

import "./Payment.scss";

const Payment = () => {
  return (
    <ChakraProvider>
      <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns={{ base: "repeat(10, 1fr)", md: "repeat(10, 1fr)" }}
        gap={4}
      >
        <GridItem
          rowSpan={1}
          colStart={{ base: 2, md: 4 }}
          colEnd={{ base: 10, md: 8 }}
        >
          <Box>
            <Cart payment={payment} />
            <WalletCard wallet={wallet} />
            <AddCard />
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
export default Payment;
