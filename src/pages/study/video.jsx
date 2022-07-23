import {
  Box,
  Button,
  Center,
  chakra,
  Flex,
  position,
  Text,
  List,
  ListItem,
  Link,
  ListIcon,
  HStack,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { FaHome, FaUser, FaGithub, FaSteam } from "react-icons/fa";
import Layout1 from "/src/layouts/Layout1";

function Video() {
  return (
    <Box justifyContent={"center"} direction={"column"}>
      <Box
        sx={{
          position: "absolute",
          width: "100vw",
          height: "100vh",
          top: "0",
          left: "0",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: "-10",
        }}
      ></Box>
      <chakra.video
        autoPlay
        loop
        muted
        w={"100vw"}
        h={"100vh"}
        objectFit={"cover"}
        position={"absolute"}
        top={"0"}
        left={"0"}
        zIndex={"-100"}
        display={"none"}
      >
        <source src="/static/2大片视频.mp4" type="video/mp4" />
      </chakra.video>

      <HStack px={"20"} py={"10"} fontSize={"xl"}>
        <Icon as={FaSteam} fontSize={"3xl"} color={"green.400"} />
        <Spacer />
        <List display={"flex"}>
          <ListItem
            color={"whiteAlpha.600"}
            marginLeft={"10"}
            _hover={{ cursor: "pointer", color: "whiteAlpha.900" }}
          >
            <ListIcon as={FaHome} />
            Home
          </ListItem>
          <ListItem
            color={"whiteAlpha.600"}
            marginLeft={"10"}
            _hover={{
              cursor: "pointer",
              color: "whiteAlpha.900",
            }}
          >
            <ListIcon as={FaUser} />
            User
          </ListItem>
          <ListItem
            color={"whiteAlpha.600"}
            marginLeft={"10"}
            _hover={{ cursor: "pointer", color: "whiteAlpha.900" }}
          >
            <ListIcon as={FaGithub} />
            Settings
          </ListItem>
        </List>
      </HStack>
    </Box>
  );
}

export default Video;

Video.getLayout = function getLayout(page) {
  return <Layout1>{page}</Layout1>;
};
