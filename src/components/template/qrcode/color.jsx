import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { SketchPicker, ChromePicker } from "react-color";

function ColorPicker({ onChange }) {
  const [colorConfig, setColorConfig] = useState({
    displayColorPicker: false,
    color: {
      r: "241",
      g: "112",
      b: "19",
      a: "1",
    },
  });

  const handleClick = () => {
    setColorConfig({
      ...colorConfig,
      displayColorPicker: !colorConfig.displayColorPicker,
    });
  };

  const handleClose = () => {
    setColorConfig({ ...colorConfig, displayColorPicker: false });
  };

  const handleChange = (color) => {
    setColorConfig({ ...colorConfig, color: color.rgb });
    onChange(color);
  };

  return (
    <Box>
      <Box
        sx={{
          padding: "5px",
          background: "#fff",
          borderRadius: "1px",
          boxShadow: "0 0 0 1px rgba(0,0,0,.1)",
          display: "inline-block",
          cursor: "pointer",
          position: "relative",
        }}
        onClick={() => handleClick()}
      >
        <Box
          style={{
            width: "36px",
            height: "14px",
            borderRadius: "2px",
            background: `rgba(${colorConfig.color.r}, ${colorConfig.color.g}, ${colorConfig.color.b}, ${colorConfig.color.a})`,
          }}
        ></Box>
      </Box>
      {colorConfig.displayColorPicker ? (
        <Box sx={{ position: "absolute", zIndex: "2" }}>
          <Box
            sx={{
              position: "fixed",
              top: "0px",
              right: "0px",
              bottom: "0px",
              left: "0px",
            }}
            onClick={() => handleClose()}
          ></Box>
          <Box zIndex={"3"}>
            <SketchPicker
              color={colorConfig.color}
              onChange={(color) => handleChange(color)}
            />
          </Box>
        </Box>
      ) : null}
      {/* <ChromePicker color={color} onChange={(color) => handleChange(color)} /> */}
    </Box>
  );
}

export default ColorPicker;
