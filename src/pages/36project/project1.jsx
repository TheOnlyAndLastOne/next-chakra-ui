import {
  Flex,
  VStack,
  Box,
  HStack,
  Text,
  Link,
  Image,
  Spacer,
  Button,
  Heading,
  SimpleGrid,
  Icon,
  theme,
  Container,
  IconButton,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { BsFillHouseFill } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaCamera } from "react-icons/fa";
import { motion } from "framer-motion";

function project1() {
  const MotionFlex = motion(Flex);

  const flexVariant = {
    // init: { x: -100, opacity: 0 },
    ani: {
      x: [-100, 100, 0],
      opacity: [0, 1, 1],
      transition: { duration: 2, delay: 2 },
    },
  };

  return (
    <VStack
      w={"full"}
      minH={"100vh"}
      overflow={"hidden"}
      textAlign={"center"}
      spacing={"0"}
    >
      {/* main page */}
      <Box
        w={"100%"}
        h={"90vh"}
        backgroundImage={"/static/36project/project1/main-bg.jpg"}
        backgroundPosition={"center"}
        objectFit={"cover"}
        mx={"40px"}
        position={"relative"}
      ></Box>
      {/* overlay */}
      <Box
        bgColor={"#3452FD"}
        opacity={"0.7"}
        w={"100%"}
        h={"90vh"}
        position={"absolute"}
        top={"0"}
        left={"0"}
        mt={"0"}
      ></Box>
      <VStack
        w={"full"}
        h={"90vh"}
        color={"green.900"}
        position={"absolute"}
        top={"0"}
        left={"0"}
      >
        {/* nav */}
        <Flex
          w={"full"}
          h={"100px"}
          direction={{ base: "row" }}
          justifyContent={"center"}
          alignItems={"center"}
          px={"100px"}
          gap={"4"}
          display={{ base: "none", md: "flex" }}
        >
          <Link>
            <Image src="/static/36project/project1/logo.png" />
          </Link>
          <Link
            color={"#c0c5eb"}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            Overview
          </Link>
          <Link
            color={"#c0c5eb"}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            Pages
          </Link>
          <Link
            color={"#c0c5eb"}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            Demos
          </Link>
          <Link
            color={"#c0c5eb"}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            Components
          </Link>
          <Spacer />
          <Link
            color={"#c0c5eb"}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            Docs
          </Link>
          <Button
            color={"white"}
            variant={"outline"}
            borderRadius={"full"}
            _hover={{ backgroundColor: "white", color: "black" }}
          >
            Purcase Now
          </Button>
        </Flex>

        {/* body */}
        <VStack
          w={"50%"}
          h={"full"}
          justifyContent={"center"}
          textAlign={"center"}
          color={"white"}
          spacing={"6"}
        >
          <Text>
            <Image w={"200px"} src="/static/36project/project1/logo1.png" />
          </Text>
          <Heading fontWeight={"600"} fontSize={"7xl"}>
            Boomerang
          </Heading>
          <Text fontWeight={"600"} fontSize={"2xl"}>
            Multipurpose Bootstrap Theme
          </Text>
          <Text>
            Boomerang is an innovative HTML template solution based on Bootstrap
            4 built with modular components that makes it reusable and easy to
            work on.
          </Text>
          <Button
            color={"black"}
            variant={"outline"}
            borderRadius={"full"}
            backgroundColor={"white"}
            _hover={{ backgroundColor: "#c0c5eb" }}
          >
            Start Exploring
          </Button>
        </VStack>
      </VStack>

      {/* second page */}
      <Flex w={"full"} py={"128px"} direction={{ base: "column", xl: "row" }}>
        <Flex
          as={motion.div}
          variants={flexVariant}
          initial="init"
          animate="ani"
          // animate={{ x: [-100, 0], opacity: [0, 1] }}
          // whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          // transition={{
          //   duration: 4,
          //   ease: "easeInOut",
          // }}
          w={{ xl: "30%" }}
          maxW={{ xl: "650px" }}
          direction={"column"}
          justify={"center"}
          align={"center"}
          gap={"20px"}
          textAlign={"center"}
          flex={{ xl: 1 }}
          px={{ base: "8" }}
        >
          <Text color={"#c0c5eb"}>THEME STYLES</Text>
          <Text fontSize={"20px"} fontWeight={"400"}>
            You can now choose the theme's style:light or dark.By changing a
            single line of code you get and entirely new website.
          </Text>
          <Link
            color={"blue"}
            _hover={{ textDecoration: "none", color: "white" }}
          >
            See the Docs
          </Link>
        </Flex>
        <MotionFlex
          as={motion.div}
          animate={{ x: [100, 0], opacity: [0, 1] }}
          // whileInView={{ x: [100, 0], opacity: [0, 1] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            delay: 1,
          }}
          direction={{ base: "column", md: "row" }}
          align={"center"}
          justify={"center"}
          gap={"8"}
          mt={{ base: "8" }}
          flex={{ xl: 1 }}
        >
          <Image
            w={"310px"}
            src={"/static/36project/project1/card1.jpg"}
            borderRadius={"md"}
            transition={"0.5s"}
            _hover={{ transform: "scale(1.05)" }}
          />
          <Image
            w={"310px"}
            src="/static/36project/project1/card2.jpg"
            borderRadius={"md"}
            transition={"0.5s"}
            _hover={{ transform: "scale(1.05)" }}
          />
        </MotionFlex>
      </Flex>

      {/* third page */}
      <Flex direction={"column"} justify={"center"} align={"center"} gap={"14"}>
        <Text fontWeight={"600"} fontSize={"30px"} w={"50%"}>
          Over 200 ready to use layouts
        </Text>
        <Text color={"gray.400"} w={"50%"}>
          Everything you need in one package.Blog,portfolio,e-commerce,real
          estate and plenty of secondary pages that are responsive and optimized
          based on user experience.
        </Text>
        <SimpleGrid
          columns={{ base: "1", md: "2", xl: "3" }}
          spacing={"10"}
          textAlign={"left"}
          px={"10"}
        >
          <Box
            h={{ base: "280px" }}
            border={"1px solid #e0e2e6"}
            margin="10px 10px"
            padding={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"25px"}
          >
            <Icon as={BsFillHouseFill} w={"40px"} h={"40px"} />
            <Text>Homepages</Text>
            <Text>
              Build anything from classic,minimalist to modern page designs.
            </Text>
            <Link>
              <Text color={"blue.500"} textTransform={"uppercase"}>
                see pages
              </Text>
            </Link>
          </Box>
          <Box
            h={{ base: "280px" }}
            border={"1px solid #e0e2e6"}
            margin="10px 10px"
            padding={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"25px"}
          >
            <Icon as={BsFillHouseFill} w={"40px"} h={"40px"} />
            <Text>Homepages</Text>
            <Text>
              Build anything from classic,minimalist to modern page designs.
            </Text>
            <Link>
              <Text color={"blue.500"} textTransform={"uppercase"}>
                see pages
              </Text>
            </Link>
          </Box>
          <Box
            h={{ base: "280px" }}
            border={"1px solid #e0e2e6"}
            margin="10px 10px"
            padding={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"25px"}
          >
            <Icon as={BsFillHouseFill} w={"40px"} h={"40px"} />
            <Text>Homepages</Text>
            <Text>
              Build anything from classic,minimalist to modern page designs.
            </Text>
            <Link>
              <Text color={"blue.500"} textTransform={"uppercase"}>
                see pages
              </Text>
            </Link>
          </Box>
          <Box
            h={{ base: "280px" }}
            border={"1px solid #e0e2e6"}
            margin="10px 10px"
            padding={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"25px"}
          >
            <Icon as={BsFillHouseFill} w={"40px"} h={"40px"} />
            <Text>Homepages</Text>
            <Text>
              Build anything from classic,minimalist to modern page designs.
            </Text>
            <Link>
              <Text color={"blue.500"} textTransform={"uppercase"}>
                see pages
              </Text>
            </Link>
          </Box>
          <Box
            h={{ base: "280px" }}
            border={"1px solid #e0e2e6"}
            margin="10px 10px"
            padding={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"25px"}
          >
            <Icon as={BsFillHouseFill} w={"40px"} h={"40px"} />
            <Text>Homepages</Text>
            <Text>
              Build anything from classic,minimalist to modern page designs.
            </Text>
            <Link>
              <Text color={"blue.500"} textTransform={"uppercase"}>
                see pages
              </Text>
            </Link>
          </Box>
          <Box
            h={{ base: "280px" }}
            border={"1px solid #e0e2e6"}
            margin="10px 10px"
            padding={"20px"}
            display={"flex"}
            flexDirection={"column"}
            gap={"25px"}
          >
            <Icon as={BsFillHouseFill} w={"40px"} h={"40px"} />
            <Text>Homepages</Text>
            <Text>
              Build anything from classic,minimalist to modern page designs.
            </Text>
            <Link>
              <Text color={"blue.500"} textTransform={"uppercase"}>
                see pages
              </Text>
            </Link>
          </Box>
        </SimpleGrid>
      </Flex>

      <Box h={"28"}></Box>

      <Container>
        <Text fontSize={"35px"} as={"h3"}>
          Startup demos for all
        </Text>

        <Text color={"gray.500"} mt={"10"}>
          Create your website using one of the demos below.Our demo's components
          are modular and interchangable,meaning you can take an element or a
          page from one demo and use it another without any additional setup.
        </Text>
      </Container>

      <SimpleGrid
        columns={{ base: "1", md: "2" }}
        spacing={"20"}
        padding={"20"}
      >
        <VStack alignItems={"start"}>
          <Image
            transition="all 0.5s ease-in-out"
            _hover={{
              shadow: "2xl",
              transform: "translateY(-30px)",
            }}
            src="/static/36project/project1/boxes1.jpg"
          />
          <Box h={"6"}></Box>
          <Text cursor={"pointer"} _hover={{ color: "blue.500" }}>
            Startup Agency
          </Text>
        </VStack>
        <VStack alignItems={"start"}>
          <Image
            transition="all 0.5s ease-in-out"
            _hover={{
              shadow: "2xl",
              transform: "translateY(-30px)",
            }}
            src="/static/36project/project1/boxes2.jpg"
          />
          <Box h={"6"}></Box>
          <Text cursor={"pointer"} _hover={{ color: "blue.500" }}>
            Startup App
          </Text>
        </VStack>
        <VStack alignItems={"start"}>
          <Image
            transition="all 0.5s ease-in-out"
            _hover={{
              shadow: "2xl",
              transform: "translateY(-30px)",
            }}
            src="/static/36project/project1/boxes3.jpg"
          />
          <Box h={"6"}></Box>
          <Text cursor={"pointer"} _hover={{ color: "blue.500" }}>
            Startup Analitycs
          </Text>
        </VStack>
        <VStack alignItems={"start"}>
          <Image
            transition="all 0.5s ease-in-out"
            _hover={{
              shadow: "2xl",
              transform: "translateY(-30px)",
            }}
            src="/static/36project/project1/boxes4.jpg"
          />
          <Box h={"6"}></Box>
          <Text cursor={"pointer"} _hover={{ color: "blue.500" }}>
            Startup Classic
          </Text>
        </VStack>
      </SimpleGrid>

      <Box
        w={"full"}
        h={"70vh"}
        background={
          "url('/static/36project/project1/doc-img.jpg') center/cover"
        }
        display={"flex"}
        alignItems={"center"}
      >
        <VStack maxW={"550px"} mx={"auto"} spacing={"10"}>
          <Heading fontSize={"40px"} color={"whiteAlpha.900"}>
            Documentation and Shortcodes
          </Heading>
          <Text fontSize={"20px"} color={"whiteAlpha.900"} fontWeight={"600"}>
            Get started fast and easy with Boomerang using the documentation and
            shortcode examples.No matter you are a developer or new to web
            design,you will find our theme very easy to customize with an
            intuitive HTML markup.
          </Text>
          <Button borderRadius={"full"} padding={"6"}>
            Open The Docs
          </Button>
        </VStack>
      </Box>
      <Flex
        direction={{ base: "column", md: "row" }}
        w={"full"}
        minH={"10vh"}
        bg={"blackAlpha.900"}
        color={"gray.500"}
        justifyContent={"space-between"}
        alignItems={"center"}
        py={"4"}
        px={"28"}
      >
        <Text>© 2018 Webpixels</Text>
        <HStack
          sx={{ listStyle: "none" }}
          fontSize={"14"}
          fontWeight={"600"}
          spacing={"6"}
        >
          <Link _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}>
            OFFICIAL WEBSITE
          </Link>
          <Link _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}>
            INSTAGRAM
          </Link>
          <Link _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}>
            FACEBOOK
          </Link>
          <Link _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}>
            LICENSE
          </Link>
          <Link _hover={{ textDecoration: "none", color: "whiteAlpha.900" }}>
            BUY NOW
          </Link>
        </HStack>

        <HStack spacing={"6"}>
          <Icon
            as={FaFacebookF}
            _hover={{ cursor: "pointer", color: "whiteAlpha.900" }}
          />
          <Icon
            as={FaCamera}
            _hover={{ cursor: "pointer", color: "whiteAlpha.900" }}
          />
          <Icon
            as={FaTwitter}
            _hover={{ cursor: "pointer", color: "whiteAlpha.900" }}
          />
        </HStack>
      </Flex>
    </VStack>
  );
}

export default project1;
