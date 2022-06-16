import { Box, Heading, Text, Badge } from "@chakra-ui/react";

const Cart = ({ payment }) => {
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
    </Box>
  );
};

export default Cart;
