import { Text, type TextProps, useColorModeValue } from "@chakra-ui/react";

type Props = TextProps;

export function BlogPostCardDescription({ children, ...rest }: Props) {
  const textColor = useColorModeValue("white", "black");

  return (
    <Text _groupHover={{ textColor: textColor }} {...rest}>
      {children}
    </Text>
  );
}
