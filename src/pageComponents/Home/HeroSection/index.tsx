import BorderBottomLink from "@/components/BorderBottomLink";
import { CURRICULUM_PDF } from "@/constants/curriculum";
import { isJsEnabled } from "@/utils/isJsEnabled";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useTranslation();

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
        h={{ base: "30vh", md: "40vh", lg: "full" }}
        w="60vw"
        as={motion.div}
        initial={isJsEnabled ? { x: 100, opacity: 0 } : { x: 0, opacity: 1 }}
        animate={{ x: 0, opacity: 1 }}
        position="relative"
      >
        <Image
          src="/assets/images/home/hero/programmer-illustration.svg"
          alt="Illustration of a programmer"
          fill
          style={{ objectFit: "contain" }}
        />
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
            initial={
              isJsEnabled ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 }
            }
            animate={{ x: 0, opacity: 1 }}
          >
            {t("home.hero.heading1")}
          </Heading>
          <Box
            as={motion.div}
            initial={
              isJsEnabled ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 }
            }
            animate={{ x: 0, opacity: 1 }}
          >
            <Heading
              as="span"
              textDecoration="underline"
              textDecorationColor="green"
              textDecorationThickness={{ base: "5px", lg: "10px" }}
              fontSize={{ base: "4xl", lg: "7xl" }}
              lineHeight="-2.5px"
            >
              {t("home.hero.heading2")}
            </Heading>
          </Box>
        </Flex>

        <Text
          width={{ md: "60%" }}
          as={motion.p}
          initial={isJsEnabled ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
        >
          {t("home.hero.description")}
        </Text>
        <Flex
          as={motion.div}
          gap={10}
          initial={isJsEnabled ? { x: -100, opacity: 0 } : { x: 0, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
        >
          <BorderBottomLink
            href="#contact-section"
            as={motion.a}
            aria-label="Navigate to contact form section"
          >
            <Box>{t("common.links.contactMe")}</Box>
          </BorderBottomLink>
          <BorderBottomLink
            href={CURRICULUM_PDF}
            as={motion.a}
            aria-label="Download Curriculum Vitae in pdf format"
          >
            <Box>{t("common.links.downloadCV")}</Box>
          </BorderBottomLink>
        </Flex>
      </Flex>
    </Flex>
  );
}
