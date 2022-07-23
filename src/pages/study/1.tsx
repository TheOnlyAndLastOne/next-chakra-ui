import {
  Box,
  Button,
  Center,
  Container,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function study1() {
  return (
    <Container maxW={"3xl"}>
      <VStack
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
        textAlign={"center"}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          <Text>Make money from</Text>
          <Text color={"green.400"}>your audience</Text>
        </Heading>
        <Text color={"gray.500"}>
          Monetize your content by charging your most loyal readers and reward
          them loyalty points. Give back to your loyal readers by granting them
          access to your pre-releases and sneak-peaks.
        </Text>
        <VStack spacing={3} position={"relative"}>
          <Button
            bgColor={"green.400"}
            color={"white"}
            rounded={"full"}
            px={6}
            _hover={{ bgColor: "green.500" }}
          >
            Get Started
          </Button>
          <Button variant={"link"} colorScheme={"blue"} size={"sm"}>
            Learn More
          </Button>
          <Text
            fontSize={"lg"}
            fontFamily={"Caveat"}
            position={"absolute"}
            right={"-125px"}
            top={"-15px"}
            transform={"rotate(10deg)"}
          >
            Starting at $15/mo
          </Text>
        </VStack>
      </VStack>
    </Container>
  );
}

export default study1;
