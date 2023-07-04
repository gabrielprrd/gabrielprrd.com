import NextLink from "next/link";
import { Link as ChakraLink, type LinkProps } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props extends LinkProps {
  children: ReactNode;
}

export default function Link(props: Props) {
  return (
    <ChakraLink as={NextLink} {...props}>
      {props.children}
    </ChakraLink>
  );
}
