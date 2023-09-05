import { type Variants } from "framer-motion";
import { isJsEnabled } from "./isJsEnabled";

export function getAnimationVariants(
  variants: Variants,
  jsDisabledFallback: Variants
) {
  return isJsEnabled ? variants : jsDisabledFallback;
}
