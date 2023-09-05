import { LinkBox, type LinkBoxProps } from "@chakra-ui/react";

type Props = LinkBoxProps;

export function BlogPostCardRoot({ children, ...rest }: Props) {
  return (
    <LinkBox
      as="article"
      role="group"
      position="relative"
      zIndex={10}
      {...rest}
    >
      {children}
    </LinkBox>
  );
}
