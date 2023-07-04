import type {
  ComponentStyleConfig,
  StyleFunctionProps,
} from "@chakra-ui/react";

const Button: ComponentStyleConfig = {
  variants: {
    solid: (props: StyleFunctionProps) => ({
      fontWeight: "bold",
      textTransform: "uppercase",
      bgColor: "transparent",
      color: props.colorMode === "dark" ? "white" : "black",
      borderRadius: "none",
      borderColor: "green",
      borderBottomWidth: 4,
      paddingX: 0,
      paddingY: 0,
      _hover: {
        color: "green",
        bgColor: "transparent",
      },
    }),
  },
};

export default Button;
