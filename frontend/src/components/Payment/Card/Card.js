import { Box, Image, Stack } from "@chakra-ui/react";
import MasterCard from "../../../assets/images/MasterCard.png";
import Visa from "../../../assets/images/Visa.png";

import "../Payment.scss";

const PaymentCard = ({ id, card, bg, highlight, handleSelectedCard }) => {
  return (
    <Box>
      <Stack>
        <Box minW="220px" className="payBackground">
          <Image
            borderRadius="12px"
            src={bg}
            alt="Segun Adebayo"
            className={id === highlight ? "highlight" : "non-highlight"}
            onClick={handleSelectedCard(id)}
          ></Image>
          <div>
            <p className="cardType">{card.card_type}</p>
            <Image
              className="cardLogo"
              src={card.card_company === "visa" ? Visa : MasterCard}
            ></Image>
            <p className="cardName">{card.card_name}</p>
            <p className="cardNumber">
              ✕✕✕✕ - ✕✕✕✕ - ✕✕✕✕ - {card.card_number.substr(-4)}
            </p>
          </div>
        </Box>
      </Stack>
    </Box>
  );
};
export default PaymentCard;
