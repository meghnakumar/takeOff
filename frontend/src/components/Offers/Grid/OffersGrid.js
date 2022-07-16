import React, { useEffect, useState } from "react";
import offers from "../../../assets/data/offers";
import "../Offers.scss";

import {
  Grid,
  GridItem,
  Box,
  Heading,
  Image,
  Badge,
  Text,
  Stack,
  useDisclosure,
  Button,
  useToast,
} from "@chakra-ui/react";
import { getOffers } from "../../../services/offerServices";
import { MdContentCopy } from "react-icons/md";

const OffersGrid = () => {
  const toast = useToast();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  const [offers, setOffers] = useState([]);

  const handleCopyClipboard = (e) => {
    const value = e.target.value;
    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast({
          title: "Promo Copied",
          description: value,
          status: "info",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  const getData = () => {
    const fetchPromise = getOffers();
    fetchPromise
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setOffers(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Box>
      <Grid
        tempgateRows="repeat(4, 1fr)"
        templateColumns={{ base: "repeat(10, 1fr)", md: "repeat(10, 1fr)" }}
        gap={4}
      >
        <GridItem
          colSpan={{ base: 8, md: 8 }}
          rowSpan={1}
          colStart={{ base: 2, md: 2 }}
        >
          <Heading as="h4" size="lg" mt={5}>
            Best Deals
          </Heading>
        </GridItem>
        <GridItem
          rowSpan={1}
          colStart={{ base: 2, md: 2 }}
          colEnd={{ base: 10, md: 10 }}
        >
          <Stack
            mb={5}
            direction="row"
            className="overflow x-scroll-disabled"
            spacing={5}
          >
            {offers.map((offer, index) => (
              <Box>
                <Box
                  key={index}
                  p="5"
                  minW="280px"
                  borderWidth="1px"
                  borderRadius={5}
                  onClick={onOpenModal}
                >
                  <Image src={offer.thumbnail} borderRadius={3} />
                  <Stack direction="row" mt={3}>
                    <Badge variant="subtle" colorScheme="green">
                      {offer.type}
                    </Badge>
                    <Badge variant="subtle" colorScheme="blue">
                      {offer.promocode}
                    </Badge>
                  </Stack>
                  <Heading mt={3} as="h4" size="md" noOfLines={2}>
                    {offer.title}
                  </Heading>
                  <Text mt={3} noOfLines={3} fontSize="sm" opacity={0.5}>
                    {offer.details}
                  </Text>
                  <Button
                    value={offer.promocode}
                    leftIcon={<MdContentCopy />}
                    p={5}
                    size="lg"
                    fontSize="15px"
                    variant="solid"
                    mt={5}
                    variant="outline"
                    colorScheme="blue"
                    onClick={handleCopyClipboard}
                  >
                    {offer.promocode}
                  </Button>
                </Box>
              </Box>
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OffersGrid;
