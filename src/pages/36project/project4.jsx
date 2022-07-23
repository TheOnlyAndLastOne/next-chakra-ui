import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaBtc,
  FaCamera,
  FaDesktop,
  FaFacebook,
  FaFacebookF,
  FaGift,
  FaNapster,
  FaUnlock,
  FaUnlockAlt,
} from "react-icons/fa";

function project4() {
  return (
    <Flex direction={"column"}>
      {/* 1 */}
      <Flex
        direction={"column"}
        width={"full"}
        height={"100vh"}
        backgroundImage={
          "url(/static/36project/project4/bg-pattern.png), linear-gradient(to right, #d22430, #7d4294);"
        }
      >
        {/* 1-1 */}
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={"center"}
          justifyContent={{ base: "center", md: "space-between" }}
          py={"4"}
          px={"40"}
        >
          <Link
            fontSize={"20px"}
            fontWeight={"500"}
            color={"yellow.400"}
            _hover={{ color: "white" }}
          >
            Start Bootstrap
          </Link>
          <HStack>
            <MenuButton content={"DOWNLOAD"} />
            <MenuButton content={"FEATURES"} />
            <MenuButton content={"CONTACT"} />
          </HStack>
        </Flex>

        {/* 1-2 */}
        <Flex
          flex={1}
          direction={{ base: "column", md: "row" }}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <VStack margin={"10"} justifyContent={"center"} maxW={"md"}>
            <Text
              color={"whiteAlpha.900"}
              fontSize={{ base: "10px", md: "45px" }}
            >
              New Age is an app landing page that will help you beautifully
              showcase your new mobile app, or anything else!
            </Text>
            <Button
              fontSize={"10px"}
              px={"10"}
              py={"2"}
              variant={"outline"}
              color={"whiteAlpha.900"}
              borderRadius={"full"}
              textTransform={"uppercase"}
              _hover={{ bgColor: "yellow.300" }}
            >
              start now for free
            </Button>
          </VStack>
          <Image
            src="/static/36project/project4/iphone_6_plus_white_port.png"
            height={{ base: "md", md: "85vh" }}
          />
        </Flex>
      </Flex>

      {/* 2 */}
      <VStack
        w={"full"}
        minH={"md"}
        backgroundColor={"#fdca4f"}
        justifyContent={"center"}
        spacing={"8"}
      >
        <Heading
          maxW={"2xl"}
          fontSize={{ base: "40px", md: "60px", xl: "80px" }}
          fontWeight={"300"}
        >
          Discover what all the buzz is about!
        </Heading>
        <Text fontSize={"20px"}>
          Our app is available on any mobile device! Download now to get
          started!
        </Text>
      </VStack>

      {/* 3 */}
      <VStack minH={"100vh"} py={"28"} spacing={"10"}>
        <Heading>Unlimited Features, Unlimited Fun</Heading>
        <Text color={"gray.500"}>
          Check out what you can do with this app theme!
        </Text>
        <Flex
          direction={{ base: "column", lg: "row" }}
          gap={"10"}
          alignItems={"center"}
        >
          <Image
            padding={"8"}
            maxW={"250px"}
            src="/static/36project/project4/iphone_6_plus_white_port.png"
          />
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: "20", md: "8" }}
          >
            <TableBlock
              icon={<FaDesktop size={"100px"} />}
              title={"Device Mockups"}
              desc={
                " Ready to use HTML/CSS device mockups, no Photoshop required!"
              }
            />
            <TableBlock
              icon={<FaCamera size={"100px"} />}
              title={"Flexible Use"}
              desc={
                " Put an image, video, animation, or anything else in the screen!"
              }
            />
            <TableBlock
              icon={<FaGift size={"100px"} />}
              title={"Free to Use"}
              desc={
                "As always, this theme is free to download and use for any purpose!"
              }
            />
            <TableBlock
              icon={<FaUnlockAlt size={"100px"} />}
              title={"Open Source"}
              desc={
                " Since this theme is MIT licensed,you can use it commercially!"
              }
            />
          </SimpleGrid>
        </Flex>
      </VStack>

      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={"url('/static/36project/project4/bg-cta.jpg')"}
        backgroundPosition={"center"}
        backgroundSize={"cover"}
        alignItems={"center"}
      >
        <VStack
          direction={"column"}
          alignItems={"start"}
          color={"whiteAlpha.900"}
          pl={"28"}
        >
          <Heading fontSize={"75px"} fontWeight={"300"}>
            Stop waiting.{" "}
          </Heading>
          <Heading fontSize={"75px"} fontWeight={"300"}>
            Start building.
          </Heading>
          <Button
            variant={"outline"}
            textTransform={"uppercase"}
            borderRadius={"full"}
            px={"10"}
            py={"6"}
            fontSize={"10px"}
            _hover={{ backgroundColor: "yellow.300" }}
          >
            let's get started!
          </Button>
        </VStack>
      </Flex>

      <Center minH={"40vh"} bg={"yellow.400"}>
        <VStack spacing={"10"}>
          <Heading>We new friends!</Heading>
          <HStack spacing={"20"}>
            <Circle size="70px" bg="#1ea1f1" color="white">
              <FaFacebookF size={"30px"} />
            </Circle>
            <Circle size="70px" bg="#3c5997" color="white">
              <FaBtc size={"30px"} />
            </Circle>
            <Circle size="70px" bg="#de4c39" color="white">
              <FaNapster size={"30px"} />
            </Circle>
          </HStack>
        </VStack>
      </Center>

      <Center color={"gray.500"} bg={"blackAlpha.900"} padding={"10"}>
        <VStack>
          <Text> © Your Website 2018.All Rights Reserved.</Text>
          <HStack>
            <Link _hover={{ color: "yellow.400" }}>Private </Link>
            <Link _hover={{ color: "yellow.400" }}>Terms </Link>
            <Link _hover={{ color: "yellow.400" }}>FAQ </Link>
          </HStack>
        </VStack>
      </Center>
    </Flex>
  );
}

export default project4;

function MenuButton({ content }) {
  return (
    <Link
      color={"whiteAlpha.700"}
      _hover={{ color: "whiteAlpha.900", textDecoration: "none" }}
    >
      {content}
    </Link>
  );
}

function TableBlock({ icon, title, desc }) {
  return (
    <VStack textAlign={"center"} color={"blackAlpha.600"}>
      {icon}
      <Heading color={"blackAlpha.900"}>{title}</Heading>
      <Text maxW={"60%"}>{desc}</Text>
    </VStack>
  );
}
