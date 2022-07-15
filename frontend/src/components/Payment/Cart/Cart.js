import {
  Box,
  Heading,
  Text,
  Badge,
  Button,
  Input,
  Stack,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { getCartItems } from "../../../services/cartServices";
import { getPromoValidation } from "../../../services/offerServices";

const Cart = ({ payment }) => {
  const [cart, setCart] = useState([]);
  const [promocode, setPromo] = useState("");
  const [price, setNewPrice] = useState(0);
  const [promoError, setPromoError] = useState(false);

  const getData = () => {
    const fetchPromise = getCartItems("u3");
    fetchPromise
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
  };

  const handlePromoValue = (e) => {
    let value = e.target.value;
    setPromo(value);
  };

  const handlePromoValidation = () => {
    let mySet = new Set();
    let total = 0;

    cart.map((item) => {
      mySet.add(item.type);
      total += item.price;
    });

    if (mySet.size > 1) {
      let data = JSON.parse(
        JSON.stringify({ promocode: promocode, price: total, type: "Mix" })
      );
      getPromoValidation(data).then((response) => {
        if (response.data.status == 200) {
          setNewPrice(response.data.amount);
          setPromoError(false);
        } else {
          setPromoError(true);
        }
      });
    } else {
      let data = JSON.parse(
        JSON.stringify({
          promocode: promocode,
          price: total,
          type: mySet.values().next().value,
        })
      );
      getPromoValidation(data).then((response) => {
        if (response.data.status == 200) {
          setNewPrice(response.data.amount);
          setPromoError(false);
        } else {
          setPromoError(true);
        }
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box mt={5} p={5} minW="100%" borderRadius={10} borderWidth={1}>
      <Badge variant="outline" colorScheme="gray">
        Your Purchase
      </Badge>
      <Heading mt={2} as="h3" size="md" colorScheme="gray">
        Payment Amount
      </Heading>
      <Text mt={5} fontWeight="bold" fontSize="28px">
        $ {price}
      </Text>
      <Stack direction={{ base: "column", md: "row" }} mt={5}>
        <FormControl isInvalid={promoError}>
          <Input
            value={promocode}
            size="lg"
            width="50%"
            variant="filled"
            placeholder="PROMOCODE"
            _placeholder={{ fontSize: "15px", opacity: 0.5 }}
            onChange={handlePromoValue}
            width={{ base: "100%", md: "70%" }}
          />
          {!promoError ? (
            <></>
          ) : (
            <FormErrorMessage>Promocode is Invalid</FormErrorMessage>
          )}
        </FormControl>
        <Button
          colorScheme="green"
          p={5}
          size="lg"
          fontSize="15px"
          onClick={handlePromoValidation}
        >
          Apply Promo
        </Button>
      </Stack>
    </Box>
  );
};

export default Cart;
