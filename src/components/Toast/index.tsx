import { Box, type BoxProps, useColorModeValue } from "@chakra-ui/react";

export default function Toast({ children, ...props }: BoxProps) {
  return (
    <Box
      color="white"
      bg={useColorModeValue("white", "darkGrey")}
      borderColor="green"
      borderWidth="2px"
      p={6}
      boxShadow="lg"
      {...props}
    >
      {children}
    </Box>
  );
}
