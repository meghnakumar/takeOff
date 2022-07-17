import { Box, Heading, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import WalletCard from "./WalletCard/WalletCard";
import AddCard from "./Card/AddCard";
import Cart from "./Cart/Cart";

import wallet from "../../assets/data/wallet.js";
import { getCartItems } from "../../services/cartServices";
import { getAllCards } from "../../services/paymentService";

import { useState, useEffect } from "react";

import "./Payment.scss";

const Payment = () => {
  const [cart, setCart] = useState([]);
  const [price, setNewPrice] = useState(0);
  const [cards, setCards] = useState("");

  const getData = () => {
    const fetchCartPromise = getCartItems("user1");
    const fetchCardPromise = getAllCards("user1");

    fetchCartPromise
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        let total = 0;
        setCart(data);
        data.map((item) => {
          total += item.price;
        });
        setNewPrice(total);
      });

    fetchCardPromise
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        console.log(data);
        setCards(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
            <Cart price={price} setNewPrice={setNewPrice} cart={cart} />
            <WalletCard
              price={price}
              wallet={wallet}
              cart={cart}
              cards={cards}
            />
            <AddCard />
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
export default Payment;
