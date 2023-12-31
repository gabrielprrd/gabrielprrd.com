import {
  Box,
  useColorModeValue,
  type ButtonProps,
  Button,
  usePrefersReducedMotion,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
}

export default function BorderBottomButton({ children, ...props }: Props) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const textColor = useColorModeValue("black", "white");
  const hoverTextColor = useColorModeValue("white", "black");

  return (
    <Button
      as={motion.button}
      position="relative"
      role="group"
      textColor={textColor}
      _hover={
        prefersReducedMotion
          ? { textColor: textColor }
          : { textColor: hoverTextColor }
      }
      fontWeight="medium"
      fontSize="md"
      padding={3}
      textTransform="uppercase"
      transition="0.1s ease"
      whileTap={{ scale: 0.95 }}
      border="transparent"
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
    </Button>
  );
}
