import { chakra } from "@chakra-ui/react";
import NextImage from "next/image";

const Image = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ["height", "width", "quality", "src", "alt", "fill"].includes(prop),
});

export default Image;
