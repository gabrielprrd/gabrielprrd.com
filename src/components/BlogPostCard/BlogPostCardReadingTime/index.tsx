import { Text, type TextProps, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

type Props = TextProps;

export function BlogPostCardReadingTime({ children, ...rest }: Props) {
  const textColor = useColorModeValue("white", "black");
  const { t } = useTranslation();

  const readingTime = `${children as string} ${t(
    "common.blogPostCard.readingTime"
  )}`;

  return (
    <Text size="sm" _groupHover={{ textColor: textColor }} {...rest}>
      {readingTime}
    </Text>
  );
}
