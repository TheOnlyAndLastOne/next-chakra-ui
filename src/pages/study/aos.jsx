import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Box } from "@chakra-ui/react";

function aos() {
  useEffect(() => {
    AOS.init();
    document.addEventListener("aos:in", ({ detail }) => {
      console.log("animated in", detail);
    });

    document.addEventListener("aos:out", ({ detail }) => {
      console.log("animated out", detail);
    });
  }, []);
  return (
    <div>
      <Box
        h={"40vh"}
        bg={"orange.400"}
        mb={"100px"}
        data-aos="fade-in"
        data-aos-offset="200"
      >
        chakra box
      </Box>
      <Box
        h={"40vh"}
        bg={"orange.400"}
        mb={"100px"}
        data-aos="fade-in"
        data-aos-offset="200"
      >
        chakra box
      </Box>
      <Box
        h={"40vh"}
        bg={"orange.400"}
        mb={"100px"}
        data-aos="fade-in"
        data-aos-offset="200"
        data-aos-duration="3000"
      >
        chakra box
      </Box>
      <Box
        h={"40vh"}
        bg={"orange.400"}
        mb={"100px"}
        data-aos="fade-in"
        data-aos-offset="200"
      >
        chakra box
      </Box>
    </div>
  );
}

export default aos;
