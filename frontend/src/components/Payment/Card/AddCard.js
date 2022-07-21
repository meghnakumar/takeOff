import {
  Box,
  Input,
  Text,
  Select,
  Button,
  Heading,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import validator from "validator";
import { FaCcVisa } from "react-icons/fa";
import { addCard } from "../../../services/paymentService";

const AddBankCard = () => {
  const toast = useToast();
  const [cardinput, setCardInput] = useState("");
  const [expiryinput, setCardExpiry] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardType, setCardType] = useState("");
  const [cardCompany, setCardCompany] = useState("");

  const [isCardNumberError, setCardNumberError] = useState(false);
  const [isCardExpiryError, setCardExpiryError] = useState(false);
  const [cardNameError, setcardNameError] = useState(false);

  // event handler for adding a new card
  const handleAddCard = () => {
    if (
      !isCardNumberError &&
      !isCardExpiryError &&
      !cardNameError &&
      cardinput !== "" &&
      expiryinput !== "" &&
      cardName !== "" &&
      cardType !== "" &&
      cardCompany !== ""
    ) {
      let card = {
        userId: JSON.parse(localStorage.getItem("userDetails"))._id,
        card_name: cardName,
        card_number: cardinput,
        card_type: cardType,
        card_company: cardCompany,
      };
      // let cardFinal = JSON.parse(JSON.stringify());
      addCard(card).then((response) => {
        if (response.status === 200) {
          toast({
            title: "Card Added",
            description: "",
            status: "success",
            duration: 9000,
            isClosable: true,
          });

          setCardInput("");
          setCardName("");
          setCardCompany("");
          setCardExpiry("");
        } else {
          toast({
            title: "Invalid Card Information",
            description: "",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }
      });
    } else {
      toast({
        title: "Invalid Card Information",
        description: "",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  // regex cpied for card name validation
  // https://www.codegrepper.com/profile/david-diamant
  const handleCardName = (e) => {
    const value = e.target.value;
    const pattern = /^[a-zA-Z\s]*$/g;

    if (!(pattern.test(value) && value.length < 25)) {
      setcardNameError(true);
    } else {
      setcardNameError(false);
    }
    setCardName(value);
  };

  const handleCardInput = (e) => {
    const value = e.target.value;
    if (validator.isCreditCard(value) || value === "") {
      setCardNumberError(false);
    } else {
      setCardNumberError(true);
    }
    setCardInput(value);
  };

  // regex copied for credit card expiry
  // https://regex101.com/r/gN5wH2/365
  const handleExpiryInput = (e) => {
    const value = e.target.value;
    let pattern = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    if (!(pattern.test(value) || value.includes(" "))) {
      setCardExpiryError(true);
    } else {
      setCardExpiryError(false);
    }
    setCardExpiry(value);
  };

  const handleTypeSelector = (e) => {
    let value = e.target.value;
    setCardType(value.split("-")[0].toLowerCase());
    setCardCompany(value.split("-")[1].toLowerCase());
  };

  return (
    <Box mt={5} p={5} minW="100%" borderRadius={10} borderWidth={1}>
      <Heading as="h5" size="md">
        Add New Card
      </Heading>
      <Text fontSize="16px" fontWeight="medium" mt={10} mb={3}>
        Card Number
      </Text>
      <Select
        placeholder="Select option"
        size="lg"
        onChange={handleTypeSelector}
      >
        <option value="Credit - Visa">
          <FaCcVisa />
          Credit - Visa
        </option>
        <option value="Debit-Visa">Debit-Visa</option>
        <option value="Credit-MasterCard">Credit-MasterCard</option>
        <option value="Debit-MasterCard">Debit-MasterCard</option>
      </Select>

      <Text fontSize="16px" fontWeight="medium" mt={5} mb={3}>
        Card Name
      </Text>
      <FormControl isInvalid={cardNameError}>
        <Input
          value={cardName}
          variant="filled"
          placeholder="Card Name"
          _placeholder={{ fontSize: "15px", opacity: 0.5 }}
          size="lg"
          onChange={handleCardName}
        />
        {cardNameError ? (
          <FormErrorMessage>
            Please enter right cardholder name
          </FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>
      <Text fontSize="16px" fontWeight="medium" mb={3}>
        Card Number
      </Text>
      <FormControl isInvalid={isCardNumberError}>
        <Input
          variant="filled"
          placeholder="XXXX XXXX XXXX XXXX"
          _placeholder={{ fontSize: "15px", opacity: 0.5 }}
          size="lg"
          value={cardinput}
          onChange={handleCardInput}
        ></Input>
        {isCardNumberError ? (
          <FormErrorMessage>Please enter right card number</FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>
      <Text fontSize="16px" fontWeight="medium" mb={3}>
        Expiry Date
      </Text>
      <FormControl isInvalid={isCardExpiryError}>
        <Input
          value={expiryinput}
          variant="filled"
          placeholder="MM YYYY"
          _placeholder={{ fontSize: "15px", opacity: 0.5 }}
          size="lg"
          onChange={handleExpiryInput}
        ></Input>
        {isCardExpiryError ? (
          <FormErrorMessage>Please enter right expiry date</FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>
      <Button
        p={5}
        size="lg"
        fontSize="15px"
        colorScheme="purple"
        width="100%"
        mt={15}
        onClick={handleAddCard}
      >
        Add Card
      </Button>
    </Box>
  );
};;

export default AddBankCard;
