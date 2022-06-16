import cards from "../../../assets/data/cards";
import Card from "./Card";
import React, { useState } from "react";
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

const PaymentCardList = () => {
  const [highlight, setHighLight] = useState("");
  const [selectedCardDetails, setSelectedCard] = useState(
    "You have not selected any card."
  );
  const [selectionStatus, setSelectionStatus] = useState("info");

  const backgrounds = [BG1, BG2, BG3, BG4, BG5, BG6];
  const iterator = backgrounds.values();

  let getSelectedCard = (id) => {
    let details = {};
    cards.map((card) => {
      if (card.id === id) {
        details = "You have selected card ending with " + card.digit + ".";
        setSelectionStatus("success");
      }
    });

    return details;
  };

  const handleSelectedCard = (id) => () => {
    setHighLight(id);
    setSelectedCard(getSelectedCard(id));
  };

  return (
    <Box>
      <Stack direction={["row"]} className="overflow">
        {cards.map((card) => (
          <Card
            card={card}
            bg={iterator.next().value}
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
