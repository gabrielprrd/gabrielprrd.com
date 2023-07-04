import { useFormContext } from "react-hook-form";
import { Input as ChakraInput, type InputElementProps } from "@chakra-ui/react";

interface Props extends InputElementProps {
  name: string;
}

export function Input({ name, ...props }: Props) {
  const { register } = useFormContext();

  return <ChakraInput id={name} {...register(name)} {...props} />;
}
