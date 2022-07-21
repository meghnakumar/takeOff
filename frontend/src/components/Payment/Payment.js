import { Box, Heading, ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import WalletCard from "./WalletCard/WalletCard";
import AddCard from "./Card/AddCard";
import Cart from "./Cart/Cart";

import wallet from "../../assets/data/wallet.js";
import { getCartItems } from "../../services/cartServices";
import { getAllCards } from "../../services/paymentService";
import { getWalletBalance } from "../../services/walletServices";
import { addMoney } from "../../services/walletServices";
import { useState, useEffect } from "react";

import "./Payment.scss";

const Payment = () => {
  const [cart, setCart] = useState([]);
  const [price, setNewPrice] = useState(0);
  const [cards, setCards] = useState("");
  const [balance, setBalance] = useState(0);
  const userid = JSON.parse(localStorage.getItem("userDetails"))._id;

  const getData = () => {
    const fetchCartPromise = getCartItems(userid);
    const fetchCardPromise = getAllCards(userid);
    const fetchBalance = getWalletBalance(userid);

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
        setNewPrice(Math.round(total + total * 0.15));
      });

    fetchCardPromise
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setCards(data);
      });

    fetchBalance
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setBalance(data);
      });
  };

  const handleWalletRecharge = (rechargeAmount) => {
    addMoney({ userId: userid, amount: parseInt(rechargeAmount) });
    setBalance(balance + parseInt(rechargeAmount));
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
              balance={balance}
              handleWalletRecharge={handleWalletRecharge}
            />
            <AddCard />
          </Box>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
};
export default Payment;
