import { Button, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

function test() {
  return (
    <VStack
      py={{ base: 20, md: 28 }}
      maxW={"4xl"}
      mx={"auto"}
      spacing={{ base: 10, md: 14 }}
      textAlign={"center"}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
        lineHeight={"110%"}
      >
        Meeting scheduling{" "}
        <Text as={"span"} color={"orange.400"}>
          made easy
        </Text>
      </Heading>
      <Text color={"gray.500"} maxW="2xl">
        Never miss a meeting. Never be late for one too. Keep track of your
        meetings and receive smart reminders in appropriate times. Read your
        smart “Daily Agenda” every morning.
      </Text>
      <HStack spacing={6}>
        <Button
          px={6}
          color={"white"}
          rounded={"full"}
          bgColor={"orange.400"}
          _hover={{ bg: "orange.500" }}
        >
          Get Started
        </Button>
        <Button px={6} rounded={"full"}>
          Learn more
        </Button>
      </HStack>
    </VStack>
  );
}

export default test;
