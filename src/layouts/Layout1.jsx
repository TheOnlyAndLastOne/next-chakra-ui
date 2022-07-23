import { Box, Flex, HStack } from "@chakra-ui/react";
import Pageout from "./pageout";
const Layout1 = ({ children }) => {
  return (
    <HStack h={"100vh"} w={"100vw"} spacing={"10"}>
      <Flex h={"100vh"} bg={"#f7f7fa"}>
        <Pageout />
      </Flex>
      <Flex h={"100vh"} flex={1}>
        <Box flex={1} my={"16"}>
          {children}
        </Box>
      </Flex>
    </HStack>
  );
};
export default Layout1;
