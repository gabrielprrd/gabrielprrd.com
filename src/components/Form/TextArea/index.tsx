import { useFormContext } from "react-hook-form";
import {
  Textarea as ChakraTextarea,
  useColorModeValue,
  type TextareaProps,
} from "@chakra-ui/react";

interface Props extends TextareaProps {
  name: string;
}

export function TextArea({ name, ...props }: Props) {
  const { register } = useFormContext();

  return (
    <ChakraTextarea
      id={name}
      {...register(name)}
      border="none"
      borderRadius={0}
      borderBottom="1px"
      color={useColorModeValue("black", "white")}
      _focus={{ borderBottomColor: "green" }}
      _hover={{ borderBottom: "2px" }}
      {...props}
    />
  );
}
