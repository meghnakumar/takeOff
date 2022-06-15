import {
  Box,
  Badge,
  Heading,
  Text,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  useToast,
} from "@chakra-ui/react";

import { MdContentCopy } from "react-icons/md";
const OffersHead = () => {
  const toast = useToast();

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

  return (
    <Box pt={10} pb={10} w="100%" bgGradient="linear(to-r, #63a4ff, #83c2f1)">
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
          <Box>
            <Badge colorScheme="blue">OFFERS</Badge>
            <Heading color="white" as="h5" size="lg" lineHeight="40px" mt={3}>
              Get 15% off on your <br />
              first tour booking.
            </Heading>
            <Text color="white" fontSize="md" opacity="75%">
              copy the below given promocode and use it while you checkout.
            </Text>
            <ButtonGroup gap={2}>
              <Button
                value="SUMMER22"
                leftIcon={<MdContentCopy />}
                p={5}
                size="lg"
                fontSize="15px"
                variant="solid"
                mt={10}
                onClick={handleCopyClipboard}
              >
                SUMMER22
              </Button>
              <Button
                p={5}
                size="lg"
                fontSize="15px"
                colorScheme="blue"
                variant="solid"
                mt={10}
              >
                Tour Packages
              </Button>
            </ButtonGroup>
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default OffersHead;
