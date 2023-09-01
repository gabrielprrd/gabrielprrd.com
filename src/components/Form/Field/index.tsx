import { Box, type BoxProps } from "@chakra-ui/react";

export function Field(props: BoxProps) {
  return <Box w="full" display="flex" flexDir="column" h={20} {...props} />;
}
