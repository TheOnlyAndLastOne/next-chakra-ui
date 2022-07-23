import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Marquee from "react-fast-marquee";

function marquee() {
  return (
    <div>
      <Marquee>
        <Flex gap={"40px"}>
          <Text>123</Text>
          <Text>1231</Text>
          <Text>12312</Text>
          <Text>123123</Text>
        </Flex>
      </Marquee>
    </div>
  );
}

export default marquee;
