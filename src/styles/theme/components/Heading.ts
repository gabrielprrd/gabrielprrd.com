import type { ComponentStyleConfig } from "@chakra-ui/react";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";

const Heading: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    fontWeight: "bold",
    color: props.colorMode === "dark" ? "white" : "black",
  }),
  sizes: {
    xl: {
      fontSize: "88px",
      lineHeight: "88px",
      letterSpacing: "-2.5px",
    },
    lg: {
      fontSize: "48px",
      lineHeight: "56px",
      letterSpacing: "-1.5px",
    },
    md: {
      fontSize: "24px",
      lineHeight: "32px",
    },
  },
};

export default Heading;
