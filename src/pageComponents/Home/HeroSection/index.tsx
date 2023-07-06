import BorderBottomLink from "@/components/BorderBottomLink";
import { CURRICULUM_PDF } from "@/constants/curriculum";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProgrammerIllustration from "../../../../public/assets/images/home/hero/programmer-illustration.svg";

export default function HeroSection() {
  return (
    <Flex
      as={motion.div}
      direction={{ base: "column", lg: "row-reverse" }}
      alignItems={{ base: "center", lg: "center" }}
      h={{ lg: "80vh" }}
      position="relative"
      gap={10}
      mt={{ base: 10, lg: 0 }}
    >
      <Box
        h="auto"
        w="60vw"
        as={motion.div}
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
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
          <Heading
            as={motion.h1}
            fontSize={{ base: "4xl", lg: "7xl" }}
            lineHeight="-2.5px"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
            Nice to meet you!
          </Heading>
          <Box
            as={motion.div}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
          >
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

        <Text
          width={{ md: "60%" }}
          as={motion.p}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          I&apos;m a passionate frontend developer based in Germany. I love
          bringing exciting and accessible user interfaces to life.
        </Text>
        <Flex
          as={motion.div}
          gap={10}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <BorderBottomLink href="#contact-section" as={motion.a}>
            <Box>Contact me</Box>
          </BorderBottomLink>
          <BorderBottomLink href={CURRICULUM_PDF} as={motion.a}>
            <Box>Download CV</Box>
          </BorderBottomLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
