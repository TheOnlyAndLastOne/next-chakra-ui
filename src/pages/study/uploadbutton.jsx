import { Button, Container, Input } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

function uploadbutton() {
  const ref = useRef();

  const handleClick = (event) => {
    ref.current.click();
  };

  const handleChange = (event) => {
    console.log(event);
    const fileUploaded = event.target.files;
    alert(`select file ${JSON.stringify(fileUploaded)}`);
  };

  return (
    <Container bg={"green.400"}>
      <Input
        ref={ref}
        type={"file"}
        onChange={handleChange}
        multiple
        style={{ display: "none" }}
      />
      <Button onClick={handleClick}>Upload a file</Button>
    </Container>
  );
}

export default uploadbutton;
