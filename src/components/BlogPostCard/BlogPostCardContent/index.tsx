import { Flex, type FlexProps } from "@chakra-ui/react";

type Props = FlexProps;

export function BlogPostCardContent({ children, ...rest }: Props) {
  return (
    <Flex direction="column" gap={2} padding={3} {...rest}>
      {children}
    </Flex>
  );
}
