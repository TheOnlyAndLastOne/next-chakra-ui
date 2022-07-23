import {
  Avatar,
  Box,
  Button,
  color,
  Flex,
  GridItem,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import {
  FaCamera,
  FaCartArrowDown,
  FaFacebookSquare,
  FaSteam,
  FaTwitterSquare,
  FaYoutube,
} from "react-icons/fa";

import { motion } from "framer-motion";

function project2() {
  const primaryColor = "#027bff";
  return (
    <Flex direction={"column"}>
      {/* 1 */}
      <HStack justifyContent={"space-between"} py={"4"} px={"28"}>
        <Link
          _hover={{ textDecoration: "none" }}
          fontSize={"20px"}
          fontWeight={"bold"}
        >
          Start Bootstrap
        </Link>
        <Button color={"whiteAlpha.900"} colorScheme={"blue"}>
          Sign In
        </Button>
      </HStack>

      {/* 2 */}
      <HStack
        width={"full"}
        height={"65vh"}
        bg={"url('/static/36project/project2/bg-masthead.jpg') center/cover"}
      >
        <VStack
          width={"full"}
          height={"full"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={"10"}
        >
          <Heading
            fontSize={"50px"}
            maxWidth={"4xl"}
            textAlign={"center"}
            color={"whiteAlpha.900"}
          >
            Build a landing page for your business or project and generate more
            leads!
          </Heading>
          <HStack>
            <Input
              backgroundColor={"whiteAlpha.900"}
              placeholder="Enter your email..."
              width={"400px"}
            />
            <Button colorScheme={"blue"}>Sign Up</Button>
          </HStack>
        </VStack>
      </HStack>

      {/* 3 */}
      <SimpleGrid
        columns={{ base: 1, md: 3 }}
        spacing={{ base: "10", md: "24" }}
        padding={"24"}
        textAlign={"center"}
      >
        <VStack spacing={"4"}>
          <Box
            as={motion.div}
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.5 },
            }}
          >
            <FaYoutube size={"100px"} color={primaryColor} />
          </Box>
          <Heading fontSize={"30px"}>Fully Responsive</Heading>
          <Text fontSize={"20px"} fontWeight={"300"}>
            This theme will look great on any device,no matter the size!
          </Text>
        </VStack>
        <VStack spacing={"4"}>
          <Box
            as={motion.div}
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.5 },
            }}
          >
            <FaSteam size={"100px"} color={primaryColor} />
          </Box>
          <Heading fontSize={"30px"}>Bootstrap 4 Ready</Heading>
          <Text fontSize={"20px"} fontWeight={"300"}>
            Featuring the latest build of the new Bootstrap 4 framework!
          </Text>
        </VStack>
        <VStack spacing={"4"}>
          <Box
            as={motion.div}
            whileHover={{
              scale: 1.3,
              transition: { duration: 0.5 },
            }}
          >
            <FaCartArrowDown size={"100px"} color={primaryColor} />
          </Box>
          <Heading fontSize={"30px"}>Easy to Use</Heading>
          <Text fontSize={"20px"} fontWeight={"300"}>
            Ready to use with your own content, or customize the source files!
          </Text>
        </VStack>
      </SimpleGrid>

      {/* 4 */}
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: "12", lg: "0" }}
        textAlign={"center"}
      >
        <VStack justifyContent={"center"}>
          <Text fontSize={"35px"} fontWeight={"bold"}>
            Fully Responsive Design
          </Text>
          <Text fontSize={"20px"} fontWeight={"300"}>
            When you use a theme created by Start Bootstrap, you know that the
            theme will look great on any device, whether it's a phone, tablet,
            or desktop the page will behave responsively!
          </Text>
        </VStack>
        <HStack>
          <Image src={"/static/36project/project2/bg-showcase-1.jpg"} />
        </HStack>
        <HStack>
          <Image src={"/static/36project/project2/bg-showcase-2.jpg"} />
        </HStack>
        <VStack justifyContent={"center"}>
          <Text fontSize={"35px"} fontWeight={"bold"}>
            Updated For Bootstrap 4
          </Text>
          <Text fontSize={"20px"} fontWeight={"300"}>
            Newly improved, and full of great utility classes, Bootstrap 4 is
            leading the way in mobile responsive web development! All of the
            themes on Start Bootstrap are now using Bootstrap 4!
          </Text>
        </VStack>
        <VStack justifyContent={"center"}>
          <Text fontSize={"35px"} fontWeight={"bold"}>
            Easy to Use & Customize
          </Text>
          <Text fontSize={"20px"} fontWeight={"300"}>
            Landing Page is just HTML and CSS with a splash of SCSS for users
            who demand some deeper customization options. Out of the box, just
            add your content and images, and your new landing page will be ready
            to go!
          </Text>
        </VStack>
        <HStack>
          <Image src={"/static/36project/project2/bg-showcase-3.jpg"} />
        </HStack>
      </SimpleGrid>

      {/* 5 */}
      <VStack padding={"28"} spacing={"20"} textAlign={"center"}>
        <Heading>What people are saying...</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={"28"}>
          <VStack>
            <Avatar
              as={motion.div}
              whileHover={{
                y: -20,
                transition: { duration: 0.5 },
              }}
              size="2xl"
              src="/static/36project/project2/testimonials-1.jpg"
            />
            <Text fontWeight={"bold"}>Margaret E.</Text>
            <Text>"This is fantastic! Thanks so much guys!"</Text>
          </VStack>
          <VStack>
            <Avatar
              as={motion.div}
              whileHover={{
                y: -20,
                transition: { duration: 0.5 },
              }}
              size="2xl"
              src="/static/36project/project2/testimonials-2.jpg"
            />
            <Text fontWeight={"bold"}>Fred S.</Text>
            <Text>
              "Bootstrap is amazing. I've been using it to create lots of super
              nice landing pages."
            </Text>
          </VStack>
          <VStack>
            <Avatar
              as={motion.div}
              whileHover={{
                y: -20,
                transition: { duration: 0.5 },
              }}
              size="2xl"
              src="/static/36project/project2/testimonials-3.jpg"
            />
            <Text fontWeight={"bold"}>Sarah W .</Text>
            <Text>
              "Thanks so much for making these free resources available to us!"
            </Text>
          </VStack>
        </SimpleGrid>
      </VStack>

      {/* 6 */}
      <HStack
        width={"full"}
        height={"45vh"}
        bg={"url('/static/36project/project2/bg-masthead.jpg') center/cover"}
      >
        <VStack
          width={"full"}
          height={"full"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={"10"}
        >
          <Heading
            fontSize={"30px"}
            maxWidth={"4xl"}
            textAlign={"center"}
            color={"whiteAlpha.900"}
          >
            Ready to get started? Sign up now!
          </Heading>
          <HStack>
            <Input
              backgroundColor={"whiteAlpha.900"}
              placeholder="Enter your email..."
              width={"400px"}
            />
            <Button colorScheme={"blue"}>Sign Up</Button>
          </HStack>
        </VStack>
      </HStack>

      {/* 7 */}
      <Flex
        direction={{ base: "column", md: "row" }}
        justifyContent={{ base: "center", md: "space-between" }}
        alignItems={"center"}
        gap={{ base: "8" }}
        px={"28"}
        py={"20"}
      >
        <VStack spacing={"0"}>
          <HStack>
            <Link color={"blue"}>About</Link>
            <Link color={"blue"}>Contact</Link>
            <Link color={"blue"}>Terms of Use</Link>
            <Link color={"blue"}>Privacy Policy</Link>
          </HStack>
          <Text color={"gray.500"}>
            © Your Website 2018.All Rights Reserved.
          </Text>
        </VStack>
        <HStack>
          <FaFacebookSquare
            size={"30px"}
            color={primaryColor}
            cursor={"pointer"}
          />
          <FaTwitterSquare
            size={"30px"}
            color={primaryColor}
            cursor={"pointer"}
          />
          <FaCamera size={"30px"} color={primaryColor} cursor={"pointer"} />
        </HStack>
      </Flex>
    </Flex>
  );
}

export default project2;
