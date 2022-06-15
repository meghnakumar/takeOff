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
} from "@chakra-ui/react";
import { FaAngleDown } from "react-icons/fa";
import React, { useState } from "react";

const HomeSearch = () => {
  const [itemSelected, setItemSelected] = useState("Flight");

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
        />
      </InputGroup>
      <Button colorScheme="blue" size="lg">
        Search
      </Button>
    </Stack>
  );
};

export default HomeSearch;
