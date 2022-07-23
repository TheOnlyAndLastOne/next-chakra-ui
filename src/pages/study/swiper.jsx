import React from "react";
import { Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
  Box,
  Button,
  Center,
  Container,
  Image,
  useTheme,
} from "@chakra-ui/react";

function swiper() {
  const theme = useTheme();
  console.log(theme);
  return (
    <Center bg={"green.300"} h={"100vh"} minW={"xl"} px={"10"} flex alignItems={"center"}>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar]}
        // navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{
          height: "50%",
          padding: "20px",
          background: theme.colors.blue[300],
        }}
      >
        <SwiperSlide>
          <Button colorScheme={"green"}>Click Me</Button>
        </SwiperSlide>
        <SwiperSlide>
          <Image
            w={"full"}
            h={"full"}
            fit={"cover"}
            textAlign={"center"}
            src="https://images.unsplash.com/photo-1657092587260-02dbb990d041?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2044&q=80"
            alt="plant"
          />
        </SwiperSlide>
        <SwiperSlide><button>html button</button></SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Center>
  );
}

export default swiper;
