import {
  Box,
  Center,
  Container,
  Flex,
  HStack,
  useTheme,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function MyContainer() {
  const theme = useTheme();
  console.log(theme);
  return (
    // <Flex bg={"blue"}>
    //   <Box>box1</Box>
    //   <Box>box1</Box>
    // </Flex>

    // <Box bg={"blue"}>
    //   <Box>123</Box>
    //   <Box>123</Box>
    // </Box>

    // <Center bg={"blue"}>
    //   <Box>box1</Box>
    //   <Box>box1</Box>
    //   <Box>box1</Box>
    // </Center>

    <Container maxW={'7xl'} bg={"blue"}>
      <Box>box1</Box>
      <Box>box1</Box>
    </Container>

    // <VStack bg={"blue"}>
    //   <Box>123</Box>
    //   <Box>123</Box>
    // </VStack>

    // <HStack bg={"blue"}>
    //     <Box>box</Box>
    //     <Box>box</Box>
    // </HStack>
  );
}

export default MyContainer;
