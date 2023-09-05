import Image from "@/components/infra/Image";
import { Box } from "@chakra-ui/react";
import { type ImageProps } from "next/image";

type Props = ImageProps;

export function BlogPostCardImage({ alt, ...props }: Props) {
  return (
    <Box position="relative" overflow="hidden" height="20vh" width="full">
      <Image {...props} alt={alt} fill="true" objectFit="cover" />
    </Box>
  );
}
