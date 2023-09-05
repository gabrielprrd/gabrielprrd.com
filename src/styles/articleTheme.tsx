/* eslint-disable react-hooks/rules-of-hooks */
import {
  Heading,
  type HeadingProps,
  Text,
  type TextProps,
  useColorModeValue,
} from "@chakra-ui/react";

export const articleTheme = {
  p: (props: TextProps) => {
    const { children } = props;
    return (
      <Text
        fontWeight={300}
        lineHeight="150%"
        color={useColorModeValue("black", "white")}
      >
        {children}
      </Text>
    );
  },
  h2: (props: HeadingProps) => {
    const { children } = props;
    return (
      <Heading
        size="md"
        lineHeight="150%"
        color={useColorModeValue("black", "green")}
      >
        {children}
      </Heading>
    );
  },
  h3: (props: HeadingProps) => {
    const { children } = props;
    return (
      <Heading
        size="md"
        lineHeight="150%"
        color={useColorModeValue("black", "green")}
      >
        {children}
      </Heading>
    );
  },
};
