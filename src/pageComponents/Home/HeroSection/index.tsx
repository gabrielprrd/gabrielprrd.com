import Link from "@/components/infra/Link";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ProgrammerIllustration from "../../../../public/assets/images/home/hero/programmer-illustration.svg";

export default function HeroSection() {
  return (
    <Flex
      direction={{ base: "column", lg: "row-reverse" }}
      alignItems={{ base: "center", lg: "start" }}
      h={{ lg: "80vh" }}
      position="relative"
      gap={10}
      mt={{ base: 10, lg: 0 }}
    >
      <Box h="auto" w="60vw">
        <ProgrammerIllustration />
      </Box>
      <Flex
        direction="column"
        alignItems={{ base: "center", lg: "start" }}
        textAlign={{ base: "center", lg: "start" }}
        gap={10}
        zIndex={10}
      >
        <Flex direction="column">
          <Heading fontSize={{ base: "4xl", lg: "7xl" }} lineHeight="-2.5px">
            Nice to meet you!
          </Heading>
          <Box>
            <Heading
              fontSize={{ base: "4xl", lg: "7xl" }}
              as="span"
              lineHeight="-2.5px"
            >
              I&apos;m{" "}
            </Heading>
            <Heading
              as="span"
              textDecoration="underline"
              textDecorationColor="green"
              textDecorationThickness={{ base: "5px", lg: "10px" }}
              fontSize={{ base: "4xl", lg: "7xl" }}
              lineHeight="-2.5px"
            >
              Gabriel Afonso
            </Heading>
            <Heading
              fontSize={{ base: "4xl", lg: "7xl" }}
              as="span"
              lineHeight="-2.5px"
            >
              .
            </Heading>
          </Box>
        </Flex>

        <Text width={{ md: "60%" }}>
          I&apos;m a passionate frontend developer based in Germany. I love
          bringing exciting and accessible user interfaces to life.
        </Text>
        <Link
          borderBottomWidth="3px"
          borderBottomColor="green"
          _hover={{ textColor: "green" }}
          fontWeight="medium"
          fontSize="md"
          paddingBottom={2}
          textTransform="uppercase"
          href="#contact-section"
        >
          Contact me
        </Link>
      </Flex>
    </Flex>
  );
}
