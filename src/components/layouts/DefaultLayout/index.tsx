import { Flex, chakra, useColorModeValue } from "@chakra-ui/react";
import type { ReactElement } from "react";
import Footer from "../Footer";
import Header from "../Header";

interface Props {
  children: ReactElement;
}

export default function DefaultLayout({ children }: Props) {
  return (
    <>
      <Flex
        direction="column"
        minH="100vh"
        px={{ base: 5, lg: 24 }}
        bg={useColorModeValue("white", "black")}
        bgImage="/assets/images/patterns/pattern-rings.svg"
        bgRepeat="no-repeat"
        bgPosition={{ base: "-20vw 35vh", md: "-20vw 80vh", lg: "-20vw 75vh" }}
        bgSize={{ base: 200, md: 400, lg: 500 }}
      >
        <chakra.div height="10vh">
          <Header />
        </chakra.div>
        {children}
      </Flex>
      <Footer />
    </>
  );
}
