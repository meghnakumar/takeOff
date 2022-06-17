import {
  Stack,
  InputGroup,
  InputLeftAddon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Input,
  Button,
  extendTheme,
  useToast,
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";

const HomeSearch = () => {
  const [itemSelected, setItemSelected] = useState("Flight");
  const toast = useToast();

  const [searchError, setSearchError] = useState(false);

  const inputTheme = extendTheme({
    components: {
      MenuButton: {
        defaultProps: {
          colorScheme: "green",
        },
      },
      Input: {
        defaultProps: {
          colorScheme: "green",
        },
      },
    },
  });

  const handleSearchTerm = (e) => {
    const value = e.target.value;
    if (value.length > 10) {
      setSearchError(true);
    } else {
      setSearchError(false);
    }
  };

  return (
    <Stack mt={5}>
      <InputGroup size="lg">
        <InputLeftAddon className="addon">
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FaAngleDown />}
              bg="white"
              variant={inputTheme}
            >
              {itemSelected}
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => setItemSelected("Flight")}>
                Flight
              </MenuItem>
              <MenuItem onClick={() => setItemSelected("Hotel")}>
                Hotel
              </MenuItem>
              <MenuItem onClick={() => setItemSelected("Events")}>
                Events
              </MenuItem>
              <MenuItem onClick={() => setItemSelected("Tours")}>
                Tour Packages
              </MenuItem>
            </MenuList>
          </Menu>
        </InputLeftAddon>
        <Input
          bg="white"
          placeholder="Search by keywords"
          borderColor="white"
          variant="inputTheme"
          _placeholder={{ fontSize: "15px", opacity: 0.5 }}
          onChange={handleSearchTerm}
        />
      </InputGroup>
      <Button
        colorScheme="blue"
        size="lg"
        onClick={() => {
          searchError
            ? toast({
                title: "It should be less than 10 characters",
                status: "error",
                duration: 5000,
                isClosable: true,
              })
            : toast({
                title: "Search by Keyword",
                status: "info",
                duration: 5000,
                isClosable: true,
              });
        }}
      >
        Search
      </Button>
    </Stack>
  );
};

export default HomeSearch;
