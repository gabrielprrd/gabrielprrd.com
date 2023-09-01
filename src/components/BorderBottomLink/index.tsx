import {
  Box,
  type LinkProps,
  useColorModeValue,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { type ReactNode } from "react";
import Link from "../infra/Link";

interface Props extends LinkProps {
  children: ReactNode;
}

export default function BorderBottomLink({ children, ...props }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const textColor = useColorModeValue("black", "white");
  const hoverTextColor = useColorModeValue("white", "black");

  return (
    <Link
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      role="group"
      _hover={
        prefersReducedMotion
          ? { textColor: textColor }
          : { textColor: hoverTextColor }
      }
      fontWeight="medium"
      fontSize="md"
      padding={3}
      textTransform="uppercase"
      zIndex={0}
      {...props}
    >
      {children}
      <Box
        height="2px"
        _groupHover={
          prefersReducedMotion ? { height: "2px" } : { height: "full" }
        }
        position="absolute"
        bottom="0"
        w="full"
        bgColor="green"
        transition="0.1s ease"
        zIndex={-10}
      />
    </Link>
  );
}
