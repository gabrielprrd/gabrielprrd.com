import { useFormContext } from "react-hook-form";
import { Input as ChakraInput, type InputElementProps } from "@chakra-ui/react";

interface Props extends InputElementProps {
  name: string;
}

export function Input({ name, ...props }: Props) {
  const { register } = useFormContext();

  return (
    <ChakraInput
      id={name}
      {...register(name)}
      border="none"
      borderRadius={0}
      borderBottom="1px"
      _focus={{ borderBottomColor: "green" }}
      _hover={{ borderBottom: "2px" }}
      {...props}
    />
  );
}
