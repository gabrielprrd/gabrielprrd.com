import { type Variants } from "framer-motion";

export const BOTTOM_TOP_VARIANTS: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 50,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

export const NO_JS_BOTTOM_TOP_VARIANTS: Variants = {
  offscreen: {
    y: 0,
  },
};
