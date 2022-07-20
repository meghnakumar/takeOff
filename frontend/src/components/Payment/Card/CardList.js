import Card from "./Card";
import React, { useEffect, useState } from "react";
import "../Payment.scss";
import {
  Stack,
  Box,
  Alert,
  AlertIcon,
  AlertDescription,
} from "@chakra-ui/react";

import BG1 from "../../../assets/images/CreditCard1.png";
import BG2 from "../../../assets/images/CreditCard2.png";
import BG3 from "../../../assets/images/CreditCard3.png";

import BG4 from "../../../assets/images/DebitCard1.png";
import BG5 from "../../../assets/images/DebitCard2.png";
import BG6 from "../../../assets/images/DebitCard3.png";

const PaymentCardList = ({ cards }) => {
  const [highlight, setHighLight] = useState("");
  const [selectedCardDetails, setSelectedCard] = useState(
    "You have not selected any card."
  );
  const [selectionStatus, setSelectionStatus] = useState("info");
  const backgrounds = [BG1, BG2, BG3, BG4, BG5, BG6];

  let getSelectedCard = (id) => {
    let details = {};
    cards.map((card, index) => {
      if (index === id) {
        details =
          "You have selected card ending with " +
          card.card_number.substr(-4) +
          ".";
        setSelectionStatus("success");
      }
    });

    return details;
  };

  const handleSelectedCard = (id) => () => {
    setHighLight(id);
    setSelectedCard(getSelectedCard(id));
  };

  const getCardBackground = (index) => {
    return backgrounds[index % 6];
  };

  return (
    <Box>
      <Stack direction={["row"]} className="overflow">
        {cards.map((card, index) => (
          <Card
            id={index}
            key={index}
            card={card}
            bg={getCardBackground(index)}
            highlight={highlight}
            handleSelectedCard={handleSelectedCard}
          />
        ))}
      </Stack>
      <Alert status={selectionStatus} variant="subtle" mt={3}>
        <AlertIcon />
        <AlertDescription fontSize="12px">
          {selectedCardDetails}
        </AlertDescription>
      </Alert>
    </Box>
  );
};
export default PaymentCardList;
