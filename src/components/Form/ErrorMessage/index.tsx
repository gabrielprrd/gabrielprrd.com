import { useFormContext } from "react-hook-form";
import { type BoxProps, chakra, Text } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

interface Props extends BoxProps {
  field: string;
}

export function ErrorMessage({ field, ...props }: Props) {
  const { t } = useTranslation();

  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[field];

  if (!fieldError) return null;

  return (
    <chakra.span textAlign="right" {...props}>
      <Text color="tomato">{t(fieldError.message as string)}</Text>
    </chakra.span>
  );
}
