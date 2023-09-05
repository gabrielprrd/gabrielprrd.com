import {
  Heading,
  type HeadingProps,
  LinkOverlay,
  useColorModeValue,
} from "@chakra-ui/react";

type Props = HeadingProps & {
  href: string;
};

export function BlogPostCardTitle({ href, children, ...rest }: Props) {
  const textColor = useColorModeValue("white", "black");

  return (
    <Heading
      as="h2"
      size="md"
      my="2"
      _groupHover={{ textColor: textColor }}
      {...rest}
    >
      <LinkOverlay href={href}>{children}</LinkOverlay>
    </Heading>
  );
}
