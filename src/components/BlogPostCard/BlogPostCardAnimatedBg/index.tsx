import { Box, type BoxProps } from "@chakra-ui/react";

type Props = BoxProps;

export function BlogPostCardAnimatedBg({ ...props }: Props) {
  return (
    <Box
      {...props}
      height="0px"
      _groupHover={{ height: "full" }}
      position="absolute"
      bottom="0"
      w="full"
      bgColor="green"
      transition="0.3s ease"
      zIndex={-10}
    />
  );
}
