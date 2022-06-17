import { Box, Image, Stack } from "@chakra-ui/react";
import MasterCard from "../../../assets/images/MasterCard.png";
import Visa from "../../../assets/images/Visa.png";

import "../Payment.scss";

const PaymentCard = ({ card, bg, highlight, handleSelectedCard }) => {

  return (
    <Box>
      <Stack>
        <Box minW="220px" className="payBackground">
          <Image
            borderRadius="12px"
            src={bg}
            alt="Segun Adebayo"
            className={card.id === highlight ? "highlight" : "non-highlight"}
            onClick={handleSelectedCard(card.id)}
          ></Image>
          <div>
            <p className="cardType">{card.type}</p>
            <Image
              className="cardLogo"
              src={card.company === "visa" ? Visa : MasterCard}
            ></Image>
            <p className="cardName">{card.name}</p>
            <p className="cardNumber">✕✕✕✕ - ✕✕✕✕ - ✕✕✕✕ - {card.digit}</p>
          </div>
        </Box>
      </Stack>
    </Box>
  );
};
export default PaymentCard;
