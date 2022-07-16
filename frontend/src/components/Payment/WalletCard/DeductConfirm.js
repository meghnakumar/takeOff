import {
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Alert,
  AlertDescription,
  Heading,
  Stack,
  Button,
  Text,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";


import { useNavigate } from "react-router-dom";

const Confirmation = ({ CloseModal }) => {
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("../home");
  };

  return (
    <ModalContent>
      <ModalHeader fontSize="22px" fontWeight="bold" color="black">
        Payment Confirmation
      </ModalHeader>
      <ModalBody>
        <Alert
          status="success"
          align="center"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle>Payment successfull</AlertTitle>
          <AlertDescription>
            We have sent an email with order invoice.
          </AlertDescription>
        </Alert>
      </ModalBody>

      <ModalFooter mt={10}>
        <Stack width="100%">
          <Button
            p={5}
            size="lg"
            fontSize="15px"
            colorScheme="gray"
            onClick={handleRedirect}
          >
            close
          </Button>
        </Stack>
      </ModalFooter>
    </ModalContent>
  );
};

const DeductConfirm = ({ PayNowonClose, handlePayNow, price, cart }) => {
  return (
    <ModalContent align="center">
      <ModalHeader fontSize="22px" fontWeight="bold" color="black">
        Payment Confirmation
      </ModalHeader>
      <ModalBody>
        <Alert
          status="info"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          p={3}
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertDescription maxWidth="sm" fontSize="sm" mt={3}>
            You are going to be charged for below given amount from the wallet.
          </AlertDescription>
        </Alert>
        <Heading as="h4" size="lg" m={10}>
          {price}
        </Heading>
      </ModalBody>

      <ModalFooter>
        <Stack width="100%">
          <Button
            p={5}
            size="lg"
            fontSize="15px"
            colorScheme="blue"
            onClick={handlePayNow}
          >
            Pay
          </Button>
          <Button
            p={5}
            size="lg"
            fontSize="15px"
            colorScheme="gray"
            onClick={PayNowonClose}
          >
            Cancle
          </Button>
        </Stack>
      </ModalFooter>
    </ModalContent>
  );
};

export { DeductConfirm, Confirmation };
