import React from "react";
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
} from "@chakra-ui/react";

const OffersGrid = () => {
  const handleOfferCardClick = (e) => {};

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
            {offers.map((offer) => (
              <Box
                p="5"
                minW="280px"
                borderWidth="1px"
                borderRadius={5}
                onClick={handleOfferCardClick}
              >
                <Image src={offer.thumbnail} borderRadius={3} />
                <Stack direction="row" mt={3}>
                  <Badge variant="subtle" colorScheme="green">
                    {offer.code}
                  </Badge>
                  <Badge variant="subtle" colorScheme="blue">
                    {offer.tag[1]}
                  </Badge>
                </Stack>
                <Heading mt={3} as="h4" size="md">
                  {offer.title}
                </Heading>
                <Text mt={3} noOfLines={2} fontSize="sm" opacity={0.5}>
                  {offer.description}
                </Text>
              </Box>
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OffersGrid;
