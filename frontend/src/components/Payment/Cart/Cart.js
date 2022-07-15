import {
  Box,
  Heading,
  Text,
  Badge,
  Button,
  Input,
  Stack,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import {getCartItems} from "../../../services/cartServices/"

const Cart = ({ payment }) => {
  const [amountTotal, setAmountTotal] = useState([]);

  const getData = () => {
    const fetchPromise = getCartItems();
    fetchPromise
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setAmountTotal(data);
      });
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
        $ {payment.amount}
      </Text>
      <Stack direction="row" mt={5}>
        <Input
          size="lg"
          width="50%"
          variant="filled"
          placeholder="PROMOCODE"
          _placeholder={{ fontSize: "15px", opacity: 0.5 }}
        />
        <Button colorScheme="green" p={5} size="lg" fontSize="15px">
          Apply Promo
        </Button>
      </Stack>
    </Box>
  );
};

export default Cart;
