import { type StyleFunctionProps } from "@chakra-ui/react";

const global = (props: StyleFunctionProps) => ({
  body: {
    bg: props.colorMode === "light" ? "white" : "black",
  },
});

export default global;
