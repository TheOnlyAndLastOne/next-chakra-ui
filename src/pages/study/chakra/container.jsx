import { Box, Container } from "@chakra-ui/react";
import React from "react";

function container() {
  return (
    <div>
      <Box mt={"20"}></Box>
      <Container bg={"green.400"} maxW={"3xs"}>
        3xs
      </Container>
      <Container bg={"green.400"} maxW={"2xs"}>
        2xs
      </Container>
      <Container bg={"green.400"} maxW={"xs"}>
        xs
      </Container>
      <Container bg={"green.400"} maxW={"sm"}>
        sm
      </Container>
      <Container bg={"green.400"} maxW={"md"}>
        md
      </Container>
      <Container bg={"green.400"} maxW={"lg"}>
        lg
      </Container>
      <Container bg={"green.400"} maxW={"xl"}>
        xl
      </Container>
      <Container bg={"green.400"} maxW={"2xl"}>
        2xl
      </Container>
      <Container bg={"green.400"} maxW={"3xl"}>
        3xl
      </Container>
      <Container bg={"green.400"} maxW={"4xl"}>
        4xl
      </Container>
      <Container bg={"green.400"} maxW={"5xl"}>
        5xl
      </Container>
      <Container bg={"green.400"} maxW={"6xl"}>
        6xl
      </Container>
      <Container bg={"green.400"} maxW={"7xl"}>
        7xl
      </Container>
    </div>
  );
}

export default container;
