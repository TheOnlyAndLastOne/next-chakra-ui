import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Input,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function login() {
  return (
    <div>
      <Box
        w="100vw"
        h="100vh"
        p="4"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack
          width="30%"
          p="5"
          border="1px"
          borderRadius="xl"
          borderColor="gray.300"
          padding="15px 30px"
          spacing="5"
        >
          <Text fontSize="20px" fontWeight="bold" color="gray.500">Login Page</Text>
          <Input variant="flushed" placeholder="username" />
          <Input variant="flushed" placeholder="password" />
          <HStack>
            <Button width="100px" colorScheme="teal">
              register
            </Button>
            <Spacer />
            <Button width="100px" colorScheme="teal">
              login
            </Button>
          </HStack>
        </VStack>
      </Box>
    </div>
  );
}

export default login;
