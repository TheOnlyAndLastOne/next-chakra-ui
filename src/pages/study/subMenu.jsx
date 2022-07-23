import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

function subMenu() {
  return (
    <div>
      <Accordion allowToggle w={"50%"} m={"0 auto"}>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              user
            </Box>
            <AccordionIcon />
          </AccordionButton>

          <AccordionPanel pb={4}>
            <Link
              href="#"
              height={"40px"}
              _hover={{ textDecoration: "none", color: "blue.300" }}
            >
              <Text fontSize={"15px"} fontWeight={"bold"}>
                profile1
              </Text>
            </Link>
            {/* <LinkBox as="article">
              <LinkOverlay href="#">
                <Box _hover={{ backgroundColor: "blue", color: "red" }}>
                  profile1
                </Box>
              </LinkOverlay>
            </LinkBox>
            <LinkBox>
              <LinkOverlay href="#">
                <Box>profile2</Box>
              </LinkOverlay>
            </LinkBox> */}
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default subMenu;
