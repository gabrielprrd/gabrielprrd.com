import { chakra } from "@chakra-ui/react";

import Navigation from "../Navigation";

export default function Header() {
  return (
    <chakra.header>
      <Navigation />
    </chakra.header>
  );
}
