import {
  chakra,
  Box,
  Flex,
  Image,
  Link,
  Heading,
  Button,
  Text,
  VStack,
  SimpleGrid,
  Icon,
  HStack,
  Avatar,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { FaStar, FaStarAndCrescent } from "react-icons/fa";
import Rating from "react-rating";
import { FaFacebookF, FaTwitter, FaUbuntu, FaUikit } from "react-icons/fa";

const NavLink = chakra(Link, {
  baseStyle: {
    ml: "6",
    color: "whiteAlpha.900",
    _hover: { textDecoration: "none" },
  },
});

function project6() {
  return (
    <>
      <Box position={"relative"}>
        <Flex
          display={{ base: "none", md: "flex" }}
          mt={"6"}
          py={"4"}
          px={"20"}
          justifyContent={"space-between"}
          position={"absolute"}
          top={0}
          left={0}
          right={0}
        >
          <Image src={"/static/36project/project6/logo.png"} />
          <Box>
            <NavLink>HOME</NavLink>
            <NavLink>ABOUT</NavLink>
            <NavLink>WORK</NavLink>
            <NavLink>SERVICES</NavLink>
            <NavLink>PAGES</NavLink>
            <NavLink>BLOG</NavLink>
            <NavLink>CONTACT</NavLink>
          </Box>
        </Flex>
        <Flex
          py={{ base: "60", md: "80" }}
          px={{ base: "4", md: "20" }}
          color={"whiteAlpha.900"}
          direction={"column"}
          gap={"8"}
          backgroundImage={"url('/static/36project/project6/home-banner.jpg')"}
          backgroundPosition={"center"}
          backgroundSize={"cover"}
          alignItems={{ base: "center", md: "start" }}
          textAlign={{ base: "center", md: "start" }}
        >
          <Heading fontSize={"5xl"} fontWeight={"bold"}>
            PRECISE CONCEPT DESIGN
            <Box as={"br"} display={{ base: "none", md: "block" }}></Box>
            FOR STYLISH LIVING
          </Heading>
          <Text fontSize={"md"} fontWeight={"bold"}>
            If you are looking at blank cassettes on the web, you may be very
            confused at{" "}
            <Box as={"br"} display={{ base: "none", md: "block" }}></Box>
            the difference in price. You may see some for as low as $.17 each.
          </Text>
          <Button
            size={"lg"}
            variant={"outline"}
            bg={"orange.400"}
            _hover={{
              bg: "transparent",
              color: "orange.400",
              borderColor: "orange.400",
            }}
          >
            Get Start
          </Button>
        </Flex>
      </Box>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        py={"28"}
        px={{ base: "8", lg: "28" }}
        placeItems={"center"}
        spacingY={"10"}
      >
        <Image src={"/static/36project/project6/design-1.jpg"} />
        <VStack
          maxW={"700px"}
          justifyContent={"center"}
          alignItems={{ base: "center", lg: "start" }}
          spacing={"10"}
          textAlign={{ base: "center", lg: "start" }}
          px={"20"}
        >
          <Text fontSize={"lg"} fontWeight={"extrabold"}>
            Welcome to Maxitecture
          </Text>
          <Text fontSize={"4xl"} fontWeight={"extrabold"}>
            PRECISE CONCEPT <br />
            DESIGN FOR <br />
            STYLISH LIVING
          </Text>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            Precise concept design for unique stylish living alone
          </Text>
          <Text>
            If you are looking at blank cassettes on the web, you may be very
            confused at the difference in price. You may see some for as low as
            $.17 each.
          </Text>
          <Button
            size={"lg"}
            bgColor={"orange.300"}
            color={"whiteAlpha.900"}
            boxShadow={"0 5px 20px rgba(115, 73, 251, .3)"}
            _hover={{ shadow: "none" }}
          >
            More About Us
          </Button>
        </VStack>
      </SimpleGrid>

      <VStack spacing={"28"}>
        <VStack textAlign={"center"} spacing={"4"}>
          <Heading>WHAT WE OFFER TO OUR CLIENTS</Heading>
          <Text maxW={"700px"} color={"gray.500"}>
            If you are looking at blank cassettes on the web,you may be very
            confused at the difference in price.You may see some for as low as
            $.17 each.
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          placeItems={"center"}
          spacingX={"10"}
          spacingY={"20"}
        >
          {paperList.map((item) => {
            return (
              <PaperCard
                icon={item.icon}
                title={item.title}
                desc={item.desc}
                buttonDesc={item.buttonDesc}
              />
            );
          })}
        </SimpleGrid>
      </VStack>

      <VStack spacing={"28"} mt={"28"}>
        <VStack textAlign={"center"} spacing={"4"}>
          <Heading>OUR RECENT COMPLETED PROJECTS</Heading>
          <Text maxW={"700px"} color={"gray.500"}>
            If you are looking at blank cassettes on the web,you may be very
            confused at the difference in price.You may see some for as low as
            $.17 each.
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 4 }}
          placeItems={"center"}
          spacingY={"20"}
          spacingX={{ base: "20", md: "10", lg: "0" }}
        >
          {imageList.map((item) => {
            return (
              <ImageCard
                image={item.icon}
                title={item.title}
                desc={item.desc}
                buttonDesc={item.buttonDesc}
              />
            );
          })}
        </SimpleGrid>
      </VStack>

      {/* WHAT CUSTOMER SAY ABOUT US */}
      <VStack spacing={"28"} mt={"28"}>
        <VStack textAlign={"center"} spacing={"4"}>
          <Heading fontSize={"2xl"}>WHAT CUSTOMER SAY ABOUT US</Heading>
          <Text maxW={"700px"}>
            If you are looking at blank cassettes on the web,you may be very
            confused at the difference in price.You may see some for as low as
            $.17 each.
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          placeItems={"center"}
          spacingY={"20"}
          spacingX={"20"}
        >
          <HStack
            px={"4"}
            py={"4"}
            border={"1px solid #efeeee"}
            borderRadius={"lg"}
            maxW={"xl"}
          >
            <Avatar src="/static/36project/project6/testi-1.png" />
            <VStack>
              <Text display={{ base: "none", sm: "flex" }}>
                Accessories Here you can find the best computer accessory for
                your laptop,monitor,printer,scanner,speaker,projector,hardware.
              </Text>
              <Text>Mark Alviro Wiens</Text>
            </VStack>
          </HStack>
          <HStack
            px={"4"}
            py={"4"}
            border={"1px solid #efeeee"}
            borderRadius={"lg"}
            maxW={"xl"}
          >
            <Avatar src="/static/36project/project6/testi-2.png" />
            <VStack>
              <Text display={{ base: "none", sm: "flex" }}>
                Accessories Here you can find the best computer accessory for
                your laptop,monitor,printer,scanner,speaker,projector,hardware.
              </Text>
              <Text>Mark Alviro Wiens</Text>
            </VStack>
          </HStack>
        </SimpleGrid>
      </VStack>

      <SimpleGrid
        columns={{ base: 1, md: 5 }}
        spacingY={"20"}
        placeItems={"center"}
        mt={"28"}
        bg={"gray.100"}
        py={"28"}
        px={"10"}
      >
        <Image src={"/static/36project/project6/c-logo-1.png"} />
        <Image src={"/static/36project/project6/c-logo-2.png"} />
        <Image src={"/static/36project/project6/c-logo-3.png"} />
        <Image src={"/static/36project/project6/c-logo-4.png"} />
        <Image src={"/static/36project/project6/c-logo-5.png"} />
      </SimpleGrid>

      {/* RECENT FROM OUR BLOG */}
      <VStack spacing={"28"} m={"28"}>
        <VStack textAlign={"center"} spacing={"4"}>
          <Heading fontSize={"2xl"}>RECENT FROM OUR BLOG</Heading>
          <Text maxW={"700px"}>
            If you are looking at blank cassettes on the web,you may be very
            confused at the difference in price.You may see some for as low as
            $.17 each.
          </Text>
        </VStack>
        <SimpleGrid
          columns={{ base: 1, lg: 3 }}
          placeItems={"center"}
          spacingY={"20"}
          spacingX={"4"}
          px={"10"}
        >
          <BlogCard image={"/static/36project/project6/our-blog-1.jpg"} />
          <BlogCard image={"/static/36project/project6/our-blog-2.jpg"} />
          <BlogCard image={"/static/36project/project6/our-blog-3.jpg"} />
        </SimpleGrid>
      </VStack>

      <Footer />
    </>
  );
}

export default project6;

function Footer() {
  return (
    <VStack
      px={"20"}
      py={"28"}
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.900"}
      spacing={"20"}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        px={{ base: "4", md: "10", lg: "20" }}
        gap={"10"}
      >
        <VStack alignItems={"start"} flex={2}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            ABOUT ME
          </Text>
          <Text color={"gray.500"}>
            If you own an Iphone, you’ve probably already worked out how much
            fun it is to use it to watch movies-it has that nice big screen, and
            the sound quality.
          </Text>
        </VStack>

        <VStack alignItems={"start"} flex={1}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            NEWSLETTER
          </Text>
          <Text color={"gray.500"}>Stay updated with our latest trends</Text>
          <Input w={"auto"} maxW={"full"} />
        </VStack>

        <VStack alignItems={"start"} flex={1}>
          <Text fontSize={"lg"} fontWeight={"bold"}>
            FOLLOW ME
          </Text>
          <Text color={"gray.500"}>Let us be social</Text>
          <HStack>
            <Icon as={FaFacebookF} />
            <Icon as={FaTwitter} />
            <Icon as={FaUbuntu} />
            <Icon as={FaUikit} />
          </HStack>
        </VStack>
      </Flex>
      <Text>
        Copyright ©2018 All rights reserved | This template is made with ♥ by{" "}
        <chakra.span color={"orange.300"}>Colorlib</chakra.span>
      </Text>
    </VStack>
  );
}

function PaperCard({ icon, title, desc, buttonDesc }) {
  return (
    <VStack
      maxW={"400px"}
      px={"8"}
      py={"8"}
      spacing={"4"}
      border={"1px solid #efeeee"}
      borderRadius={"md"}
      alignItems={"start"}
      transition={"all 1s"}
      _hover={{
        shadow: "2xl",
        border: "0px solid #efeeee",
      }}
    >
      <Image src={icon} />
      <Text fontSize={"lg"} fontWeight={"bold"}>
        {title}
      </Text>
      <Text color={"gray.500"}>{desc}</Text>
      <Button
        size={"md"}
        bgColor={"orange.300"}
        color={"whiteAlpha.900"}
        boxShadow={"0 5px 20px rgba(115, 73, 251, .3)"}
        _hover={{ shadow: "none" }}
      >
        {buttonDesc}
      </Button>
    </VStack>
  );
}

const paperList = [
  {
    icon: "/static/36project/project6/f-icon-1.png",
    title: "Architecture",
    desc: "If you are looking at blank cassettes on the web,you may be very confused at the difference in price.You may see some for as low as $17 each.",
    buttonDesc: "View Details",
  },
  {
    icon: "/static/36project/project6/f-icon-2.png",
    title: "Interior Design",
    desc: "If you are looking at blank cassettes on the web,you may be very confused at the difference in price.You may see some for as low as $17 each.",
    buttonDesc: "View Details",
  },
  {
    icon: "/static/36project/project6/f-icon-3.png",
    title: "Concept Design",
    desc: "If you are looking at blank cassettes on the web,you may be very confused at the difference in price.You may see some for as low as $17 each.",
    buttonDesc: "View Details",
  },
];

function ImageCard({ image, title, desc, buttonDesc }) {
  return (
    <VStack
      maxW={"400px"}
      minH={"500px"}
      px={"8"}
      py={"8"}
      spacing={"4"}
      alignItems={{ base: "center", md: "start" }}
      justifyContent={{ base: "center", md: "end" }}
      bgImage={image}
      bgPosition={"center"}
      bgSize={"cover"}
      color={"whiteAlpha.900"}
    >
      <Text fontSize={"lg"} fontWeight={"bold"}>
        {title}
      </Text>
      <Text>{desc}</Text>
      <Button
        size={"md"}
        bgColor={"orange.300"}
        color={"whiteAlpha.900"}
        boxShadow={"0 5px 20px rgba(115, 73, 251, .3)"}
        _hover={{ shadow: "none" }}
      >
        {buttonDesc}
      </Button>
    </VStack>
  );
}

const imageList = [
  {
    icon: "/static/36project/project6/post-s-1.jpg",
    title: "NEST PROTECT: 2ND GEN SMOKE +CO ALARM",
    desc: "Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod temport incididunt ut labore",
    buttonDesc: "View Details",
  },
  {
    icon: "/static/36project/project6/post-s-2.jpg",
    title: "NEST PROTECT: 2ND GEN SMOKE +CO ALARM",
    desc: "Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod temport incididunt ut labore",
    buttonDesc: "View Details",
  },
  {
    icon: "/static/36project/project6/post-s-3.jpg",
    title: "NEST PROTECT: 2ND GEN SMOKE +CO ALARM",
    desc: "Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod temport incididunt ut labore",
    buttonDesc: "View Details",
  },
  {
    icon: "/static/36project/project6/post-s-4.jpg",
    title: "NEST PROTECT: 2ND GEN SMOKE +CO ALARM",
    desc: "Lorem ipsum dolor sit amet,consectetur adipisicing elit,sed do eiusmod temport incididunt ut labore",
    buttonDesc: "View Details",
  },
];

function BlogCard({ image }) {
  return (
    <VStack px={"4"} alignItems={"start"} spacing={"4"} maxW={"md"}>
      <Image src={image} borderRadius={"md"} w={"full"} />
      <HStack>
        <Button
          color={"whiteAlpha.900"}
          bg={"orange.300"}
          _hover={{ color: "whiteAlpha.900", bg: "orange.300" }}
        >
          Travel
        </Button>
        <Button
          variant={"outline"}
          _hover={{ color: "whiteAlpha.900", bg: "orange.300" }}
        >
          Life Style
        </Button>
      </HStack>
      <Text fontSize={"lg"} fontWeight={"bold"}>
        LOW COST ADVERTISING
      </Text>
      <Text>
        Acres of Diamonds… you’ve read the famous story, or at least had it
        related to you. A farmer hears tales of diamonds and begins dreaming of
        vast riches
      </Text>
      <Link>31st January,2018</Link>
    </VStack>
  );
}
