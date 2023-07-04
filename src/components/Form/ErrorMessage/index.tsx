import { useFormContext } from "react-hook-form";
import { type BoxProps, chakra, Text } from "@chakra-ui/react";

interface Props extends BoxProps {
  field: string;
}

export function ErrorMessage({ field, ...props }: Props) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[field];

  if (!fieldError) return null;

  return (
    <chakra.span textAlign="right" {...props}>
      <Text color="tomato">{fieldError.message?.toString()}</Text>
    </chakra.span>
  );
}
