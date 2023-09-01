import { useFormContext } from "react-hook-form";
import { Text, Icon, Flex, type FlexProps } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import { FaExclamationCircle } from "react-icons/fa";

interface Props extends FlexProps {
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
    <Flex
      justifyContent="flex-end"
      alignItems="center"
      gap={2}
      h="30px"
      {...props}
    >
      <Icon as={FaExclamationCircle} height={4} w="auto" color="tomato" />
      <Text color="tomato" aria-describedby={field}>
        {t(fieldError.message as string)}
      </Text>
    </Flex>
  );
}
