import type {
  ComponentStyleConfig,
  StyleFunctionProps,
} from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
  baseStyle: (props: StyleFunctionProps) => ({
    fontWeight: "medium",
    color: props.colorMode === "dark" ? "white" : "black",
  }),
  sizes: {
    md: {
      fontSize: "18px",
      lineHeight: "28px",
    },
  },
};

export default Text;
