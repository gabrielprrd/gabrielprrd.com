/* eslint-disable @typescript-eslint/unbound-method */
import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    borderWidth: 2,
    borderColor: "white",
    borderRadius: "xl",
    _checked: {
      borderColor: "black",
    },
    _hover: { borderColor: "green" },
  },
  thumb: {
    bgColor: "transparent",
    borderWidth: 2,
    borderColor: "white",
    _checked: {
      borderColor: "black",
    },
    _hover: { borderColor: "green" },
  },
  track: {
    bgColor: "transparent",
    _checked: {
      borderColor: "black",
    },
    _hover: { borderColor: "green" },
  },
});

const Switch = defineMultiStyleConfig({ baseStyle });

export default Switch;
