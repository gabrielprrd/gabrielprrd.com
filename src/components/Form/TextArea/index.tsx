import { useFormContext } from "react-hook-form";
import {
  Textarea as ChakraTextarea,
  type TextareaProps,
} from "@chakra-ui/react";

interface Props extends TextareaProps {
  name: string;
}

export function TextArea({ name, ...props }: Props) {
  const { register } = useFormContext();

  return <ChakraTextarea id={name} {...register(name)} {...props} />;
}
