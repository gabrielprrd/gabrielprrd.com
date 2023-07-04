import { chakra, type FormLabelProps } from "@chakra-ui/react";

export function Label(props: FormLabelProps) {
  return <chakra.label {...props} />;
}
