import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Input,
  FormControl,
  FormHelperText,
  FormErrorMessage,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { useState } from "react";
import CardList from "../Card/CardList";
import { FaCaretDown, FaMoneyBill } from "react-icons/fa";
import { DeductConfirm, Confirmation } from "./DeductConfirm";

const WalletCard = ({ wallet }) => {
  const {
    isOpen: AddMoneyisOpen,
    onOpen: AddMoneyonOpen,
    onClose: AddMoneyonClose,
  } = useDisclosure();

  const {
    isOpen: PayNowisOpen,
    onOpen: PayNowonOpen,
    onClose: PayNowonClose,
  } = useDisclosure();

  const [cvv, setCvv] = useState("");
  const [cvvError, setcvvError] = useState(false);

  const [paymentStatus, setPaymentStatus] = useState(false);

  const [rechargeAmount, setRechargeAmount] = useState("");
  const [rechargeAmountError, setRechargeAmountError] = useState(false);

  // regex copied for cvv
  // https://stackoverflow.com/questions/43067719/how-to-allow-only-numbers-in-textbox-in-reactjs
  const handleCVV = (e) => {
    const value = e.target.value;
    let pattern = /^[0-9\b]+$/;

    if (!((pattern.test(value) && value.length < 4) || value === "")) {
      setcvvError(true);
    } else {
      setcvvError(false);
    }
    setCvv(value);
  };

  // regex copied for recharge amount handling
  // https://stackoverflow.com/questions/43067719/how-to-allow-only-numbers-in-textbox-in-reactjs
  const handleAmount = (e) => {
    const value = e.target.value;
    let pattern = /^[0-9\b]+$/;

    if (!((pattern.test(value) && value.length < 6) || value === "")) {
      setRechargeAmountError(true);
    } else {
      setRechargeAmountError(false);
    }
    setRechargeAmount(value);
  };

  const handlePayNow = () => {
    setPaymentStatus(true);
  };

  return (
    <Box
      mt={5}
      p={5}
      minW="100%"
      borderRadius={10}
      borderWidth={1}
      bg="#e0faff"
    >
      <Badge variant="outline" colorScheme="green">
        Wallet
      </Badge>
      <Heading mt={2} as="h3" size="md" colorScheme="gray">
        Your Balance
      </Heading>
      <Text mt={5} fontWeight="bold" fontSize="28px">
        $ {wallet.balance}
      </Text>
      <Stack direction="row" mt={5} spacing="14px">
        <Button
          leftIcon={<FaCaretDown />}
          p={5}
          size="lg"
          fontSize="15px"
          colorScheme="purple"
          onClick={AddMoneyonOpen}
        >
          Add Money
        </Button>
        <Modal
          isOpen={AddMoneyisOpen}
          onClose={AddMoneyonClose}
          p={5}
          size={{ base: "xs", md: "md" }}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader fontSize="22px" fontWeight="bold" color="black">
              Add Money
            </ModalHeader>
            <ModalBody>
              <Text fontSize="16px" fontWeight="medium" color="gray" mb={3}>
                Select Card
              </Text>
              <Box>
                <CardList />
              </Box>
            </ModalBody>

            <ModalFooter>
              <Stack width="100%">
                <Text fontSize="16px" fontWeight="medium" color="gray">
                  Security Code
                </Text>
                <FormControl isInvalid={cvvError}>
                  <Input
                    value={cvv}
                    variant="filled"
                    placeholder="CVV"
                    _placeholder={{ fontSize: "15px" }}
                    size="lg"
                    onChange={handleCVV}
                  ></Input>
                  {cvvError ? (
                    <FormErrorMessage>Please enter right CVV.</FormErrorMessage>
                  ) : (
                    <FormHelperText></FormHelperText>
                  )}
                </FormControl>
                <Text fontSize="16px" fontWeight="medium" color="gray">
                  Recharge Amount
                </Text>

                <FormControl isInvalid={rechargeAmountError}>
                  <Input
                    value={rechargeAmount}
                    variant="filled"
                    placeholder="Amount in USD"
                    _placeholder={{ fontSize: "15px" }}
                    size="lg"
                    onChange={handleAmount}
                  ></Input>
                  {rechargeAmountError ? (
                    <FormErrorMessage>
                      The amount should be a number less than 100000
                    </FormErrorMessage>
                  ) : (
                    <FormHelperText></FormHelperText>
                  )}
                </FormControl>
                <Button
                  p={5}
                  size="lg"
                  fontSize="15px"
                  colorScheme="purple"
                  onClick={AddMoneyonClose}
                >
                  Recharge
                </Button>
                <Button
                  p={5}
                  size="lg"
                  fontSize="15px"
                  colorScheme="gray"
                  onClick={AddMoneyonClose}
                >
                  Cancle
                </Button>
              </Stack>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Button
          leftIcon={<FaMoneyBill />}
          p={5}
          size="lg"
          fontSize="15px"
          colorScheme="blue"
          onClick={PayNowonOpen}
        >
          Pay Now
        </Button>
        <Modal
          closeOnOverlayClick={false}
          isOpen={PayNowisOpen}
          onClose={PayNowonClose}
          p={5}
          size={{ base: "xs", md: "md" }}
          isCentered
        >
          <ModalOverlay />
          {paymentStatus ? (
            <Confirmation CloseModal={PayNowonClose} />
          ) : (
            <DeductConfirm
              PayNowonClose={PayNowonClose}
              handlePayNow={handlePayNow}
            />
          )}
        </Modal>
      </Stack>
    </Box>
  );
};

export default WalletCard;
