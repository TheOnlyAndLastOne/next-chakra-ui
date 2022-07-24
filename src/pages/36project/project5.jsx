import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import {
  FaAtlassian,
  FaCanadianMapleLeaf,
  FaConnectdevelop,
  FaEthereum,
  FaGgCircle,
  FaMedium,
  FaPhone,
} from "react-icons/fa";

function project5() {
  return (
    <Box>
      <Box
        w={"full"}
        minH={"100vh"}
        backgroundImage={"url('/static/36project/project5/header.jpg')"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
      >
        <Flex
          direction={"column"}
          w={"full"}
          minH={"100vh"}
          alignItems={"center"}
        >
          <Flex
            w={"full"}
            display={{ base: "none", md: "flex" }}
            gap={"8"}
            textTransform={"uppercase"}
            color={"whiteAlpha.900"}
            fontWeight={"bold"}
            px={"32"}
            pt={"4"}
          >
            <Link
              color={"whiteAlpha.700"}
              _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
            >
              <i>start boostrap</i>
            </Link>
            <Spacer />
            <Link
              color={"whiteAlpha.700"}
              _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
            >
              <i>about</i>
            </Link>
            <Link
              color={"whiteAlpha.700"}
              _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
            >
              <i>services</i>
            </Link>
            <Link
              color={"whiteAlpha.700"}
              _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
            >
              <i>portfolio</i>
            </Link>
            <Link
              color={"whiteAlpha.700"}
              _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}
            >
              <i>contact</i>
            </Link>
          </Flex>

          <Flex
            direction={"column"}
            maxW={"4xl"}
            my={"auto"}
            textAlign={"center"}
            color={"whiteAlpha.900"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"10"}
          >
            <Heading fontSize={{ base: "xl", md: "3xl", lg: "6xl" }}>
              YOUR FAVORITE SOURCE OF FREE BOOTSTRAP THEMES
            </Heading>
            <Box maxW={"16"} borderBottom={"3px solid red"}></Box>
            <Text fontSize={"xl"} w={"80%"}>
              Start Bootstrap can help you build better websites using the
              Bootstrap CSS framework!Just download your template and start
              going,no strigs attached!
            </Text>
            <Button
              colorScheme={"red"}
              borderRadius={"full"}
              size={"lg"}
              fontSize={"lg"}
              textTransform={"uppercase"}
            >
              find out more
            </Button>
          </Flex>
        </Flex>
      </Box>

      <Flex direction={"column"} w={"full"}>
        <Flex
          minH={"50vh"}
          direction={"column"}
          bgColor={"orange.500"}
          justifyContent={"center"}
          alignItems={"center"}
          textAlign={"center"}
          gap={"4"}
        >
          <Text color={"whiteAlpha.900"} fontSize={"3xl"} fontWeight={"bold"}>
            We've got what you need!
          </Text>
          <Box maxW={"16"} borderBottom={"4px solid white"}></Box>
          <Text maxW={"2xl"} color={"whiteAlpha.900"}>
            Start Bootstrap has everything you need to get your new website up
            and running in no time! All of the templates and themes on Start
            Bootstrap are open source,free to download,and easy to use.No
            strings attached!
          </Text>
          <Button size={"lg"} borderRadius={"full"}>
            GET STARTED!
          </Button>
        </Flex>
        <Flex
          minH={"50vh"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={"10"}
          my={"20"}
        >
          <Text fontSize={"4xl"} fontWeight={"bold"} mt={"10"}>
            At Your Service
          </Text>
          <Box w={"24"} borderBottom={"4px solid red"}></Box>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            mx={"20"}
            spacing={{ base: "20", md: "10", lg: "4" }}
          >
            <ListIcon
              icon={FaAtlassian}
              title={"Sturdy Templates"}
              desc={"Our templates are updated regularly so they don't break."}
            />
            <ListIcon
              icon={FaCanadianMapleLeaf}
              title={"Sturdy Templates"}
              desc={"Our templates are updated regularly so they don't break."}
            />
            <ListIcon
              icon={FaEthereum}
              title={"Sturdy Templates"}
              desc={"Our templates are updated regularly so they don't break."}
            />
            <ListIcon
              icon={FaGgCircle}
              title={"Sturdy Templates"}
              desc={"Our templates are updated regularly so they don't break."}
            />
          </SimpleGrid>
        </Flex>
      </Flex>

      <Box bgColor={"blackAlpha.800"}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} placeItems={"center"}>
          <Image src={"/static/36project/project5/1.jpg"} />
          <Image src={"/static/36project/project5/2.jpg"} />
          <Image src={"/static/36project/project5/3.jpg"} />
          <Image src={"/static/36project/project5/4.jpg"} />
          <Image src={"/static/36project/project5/5.jpg"} />
          <Image src={"/static/36project/project5/6.jpg"} />
        </SimpleGrid>
        <Center minH={"50vh"}>
          <VStack spacing={"8"}>
            <Text fontSize={"4xl"} color={"whiteAlpha.900"}>
              Free Download at Start Bootstrap!
            </Text>
            <Button size={"lg"} borderRadius={"full"}>
              DOWNLOAD NOW!
            </Button>
          </VStack>
        </Center>
      </Box>

      <VStack
        minH={"50vh"}
        maxW={"50vw"}
        justifyContent={"center"}
        mx={"auto"}
        gap={"4"}
        textAlign={"center"}
      >
        <Text fontSize={"4xl"}>Let's Get In Touch</Text>
        <Box w={"24"} borderBottom={"4px solid red"}></Box>
        <Text fontSize={"lg"}>
          Ready to start your next project with us?That's great!Give us a call
          or send us an email and we will get back to you as soon as possible!
        </Text>
        <HStack fontSize={"20"}>
          <SimpleGrid columns={{ base: 1, md: 2 }} w={"80%"} mx={"auto"}>
            <Stack
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "self-end" }}
            >
              <Icon as={FaPhone} w={"16"} h={"16"} />
              <Text>123-456-789</Text>
            </Stack>
            <Stack
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "center", md: "self-end" }}
            >
              <Icon as={FaMedium} w={"16"} h={"16"} />
              <Text w={"full"}>feedback@startbootstrap.com</Text>
            </Stack>
          </SimpleGrid>
        </HStack>
      </VStack>
    </Box>
  );
}

export default project5;

function ListIcon({ icon, title, desc }) {
  return (
    <VStack textAlign={"center"}>
      <Icon as={icon} w={"20"} h={"20"} color={"orange.500"} />
      <Text>{title}</Text>
      <Text w={"80%"}>{desc}</Text>
    </VStack>
  );
}
