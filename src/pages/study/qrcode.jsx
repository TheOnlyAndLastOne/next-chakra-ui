import React, { useEffect, useState } from "react";

import { QRCodeSVG } from "qrcode.react";
import {
  Box,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  Link,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  SimpleGrid,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
} from "@chakra-ui/react";
import ColorPicker from "/src/components/template/qrcode/color";
import Layout1 from "/src/layouts/layout1";

function qrcode() {
  const [qrcodeContext, setQrcodeContext] = useState({
    content: "www.baidu.com",
    bgColor: "#ffffff",
    fgColor: "#000000",
    size: 256,
    level: "L",
    includeMargin: false,
    imageSettings: {
      src: "",
      x: undefined,
      y: undefined,
      height: 48,
      width: 48,
      excavate: false,
    },
  });

  return (
    <Flex
      h={"100%"}
      p={{ base: "10", md: "20" }}
      bgGradient="linear(to-r, pink.500, green.200)"
    >
      <Flex
        w={"full"}
        // direction={{
        //   base: "column",
        //   // , md: "row"
        // }}
        justify={{ base: "center", md: "space-evenly" }}
        align={"center"}
        gap={"20"}
      >
        <Stack flex={2}>
          <SimpleGrid columns={2} gap={4}>
            <GridItem colSpan={2}>
              <Text color={"green.200"} fontSize={25}>
                More Detail :{" "}
                <Link
                  href="https://zpao.github.io/qrcode.react/"
                  variant={"solid"}
                  isExternal
                >
                  https://zpao.github.io/qrcode.react/
                </Link>
              </Text>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel htmlFor="qr-value">Content</FormLabel>
                <Input
                  id="qr-value"
                  type={"text"}
                  value={qrcodeContext.content}
                  placeholder={"value of the qrcode"}
                  onChange={(e) =>
                    setQrcodeContext({
                      ...qrcodeContext,
                      content: e.target.value,
                    })
                  }
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel htmlFor="qr-size">Size</FormLabel>
                <NumberInput
                  size={"sm"}
                  maxW={20}
                  defaultValue={qrcodeContext.size}
                  min={50}
                  max={500}
                  onChange={(value) => {
                    if (value <= 500) {
                      setQrcodeContext({ ...qrcodeContext, size: value });
                    }
                  }}
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel htmlFor="qr-level">Error Level</FormLabel>
                <Select
                  as={"select"}
                  size={"sm"}
                  maxW={20}
                  id="qr-level"
                  placeholder="Select option"
                  // value={"L"}
                  onChange={(e) => {
                    setQrcodeContext({
                      ...qrcodeContext,
                      level: e.target.value,
                    });
                  }}
                >
                  <option selected value="L">
                    L
                  </option>
                  <option value="M">M</option>
                  <option value="Q">Q</option>
                  <option value="H">H</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel htmlFor="background-color">
                  Background Color
                </FormLabel>
                <ColorPicker
                  onChange={(color) => {
                    setQrcodeContext({ ...qrcodeContext, bgColor: color.hex });
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel htmlFor="frontground-color">
                  Frontground Color
                </FormLabel>
                <ColorPicker
                  onChange={(color) => {
                    setQrcodeContext({ ...qrcodeContext, fgColor: color.hex });
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox
                onChange={(e) => {
                  if (!e.target.checked) {
                    setQrcodeContext({
                      ...qrcodeContext,
                      imageSettings: { ...qrcodeContext, src: "" },
                    });
                  } else {
                    setQrcodeContext({
                      ...qrcodeContext,
                      imageSettings: {
                        ...qrcodeContext,
                        src: "https://static.zpao.com/favicon.png",
                      },
                    });
                  }
                }}
              >
                <Text fontSize={20} fontWeight={600}>
                  Include Image
                </Text>
              </Checkbox>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel htmlFor="image-src">Image Resource</FormLabel>
                <Input
                  type={"text"}
                  value={qrcodeContext.imageSettings.src}
                  onChange={(e) => {
                    setQrcodeContext({
                      ...qrcodeContext,
                      imageSettings: {
                        ...qrcodeContext.imageSettings,
                        src: e.target.value,
                      },
                    });
                  }}
                />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl htmlFor="image-width">Image Width</FormControl>
              <NumberInput
                defaultValue={qrcodeContext.imageSettings.width}
                onChange={(value) => {
                  if (value <= 500) {
                    setQrcodeContext({
                      ...qrcodeContext,
                      imageSettings: {
                        ...qrcodeContext.imageSettings,
                        width: value,
                      },
                    });
                  }
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl htmlFor="image-height">Image Height</FormControl>
              <NumberInput
                defaultValue={qrcodeContext.imageSettings.height}
                onChange={(value) => {
                  if (value <= 500) {
                    setQrcodeContext({
                      ...qrcodeContext,
                      imageSettings: {
                        ...qrcodeContext.imageSettings,
                        height: value,
                      },
                    });
                  }
                }}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </GridItem>
            <GridItem>
              <FormLabel htmlFor="image-x">
                Image X {qrcodeContext.imageSettings.x}
              </FormLabel>
              <Slider
                aria-label="slider-image-x"
                defaultValue={qrcodeContext.imageSettings.x}
                onChange={(value) => {
                  setQrcodeContext({
                    ...qrcodeContext,
                    imageSettings: { ...qrcodeContext.imageSettings, x: value },
                  });
                }}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </GridItem>
            <GridItem>
              <FormLabel htmlFor="image-x">
                Image Y {qrcodeContext.imageSettings.y}
              </FormLabel>
              <Slider
                aria-label="slider-image-y"
                defaultValue={qrcodeContext.imageSettings.y}
                onChange={(value) => {
                  setQrcodeContext({
                    ...qrcodeContext,
                    imageSettings: { ...qrcodeContext.imageSettings, y: value },
                  });
                }}
              >
                <SliderTrack>
                  <SliderFilledTrack />
                </SliderTrack>
                <SliderThumb />
              </Slider>
            </GridItem>
          </SimpleGrid>
        </Stack>
        <Stack flex={1} justify={"center"} align={"center"} p={4}>
          <QRCodeSVG
            value={qrcodeContext.content}
            size={qrcodeContext.size}
            level={qrcodeContext.level}
            bgColor={qrcodeContext.bgColor}
            fgColor={qrcodeContext.fgColor}
            imageSettings={qrcodeContext.imageSettings}
          />
        </Stack>
        {/* <Text>{JSON.stringify(qrcodeContext)}</Text> */}
      </Flex>
    </Flex>
  );
}

export default qrcode;

qrcode.getLayout = function getLayout(page) {
  return <Layout1>{page}</Layout1>;
};
