import {
  Box,
  useColorModeValue,
  type ButtonProps,
  Button,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
}

export default function BorderBottomButton({ children, ...props }: Props) {
  return (
    <Button
      as={motion.button}
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative"
      role="group"
      _hover={{ textColor: useColorModeValue("white", "black") }}
      fontWeight="medium"
      fontSize="md"
      padding={3}
      textTransform="uppercase"
      transition="0.1s linear"
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
      <Box
        height="2px"
        _groupHover={{ height: "full" }}
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
