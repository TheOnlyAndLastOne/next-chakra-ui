import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function random() {
  return (
    <>
      <Box bg={"blue.100"}>
        <Text>123456</Text>
      </Box>
      <Container bg={"blue.200"}>
        <Text>123456</Text>
      </Container>
      <Center bg={"blue.400"}>
        <Text>123456</Text>
      </Center>
      <Flex bg={"blue.300"}>
        <Text>123456</Text>
        <Text>123456</Text>
      </Flex>
      <VStack bg={"blue.500"}>
        <Text>123456</Text>
        <Text>123456</Text>
      </VStack>
      <HStack bg={"blue.600"}>
        <Text>123456</Text>
        <Text>123456</Text>
      </HStack>
      <Container maxW={"400px"} bg={"green.400"} px={"0"} shadow={"2xl"}>
        <Flex direction={"column"} alignItems={"center"}>
          <Image
            w={"full"}
            h={"325px"}
            src="/static/36project/project1/boxes1.jpg"
          />
          <Text>This is my card</Text>
        </Flex>
      </Container>
    </>
  );
}

export default random;
