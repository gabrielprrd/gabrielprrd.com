import BorderBottomLink from "@/components/BorderBottomLink";
import Image from "@/components/infra/Image";
import { CURRICULUM_PDF } from "@/constants/curriculum";
import { Box, Flex, Heading, Text, chakra } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <chakra.section
      id="hero-section"
      display="flex"
      flexDirection={{ base: "column", lg: "row-reverse" }}
      alignItems={{ base: "center", lg: "center" }}
      h={{ lg: "80vh" }}
      position="relative"
      gap={10}
      mt={{ base: 10, lg: 0 }}
    >
      <Box
        h={{ base: "30vh", md: "40vh", lg: "full" }}
        w="60vw"
        position="relative"
      >
        <Image
          src="/assets/images/home/hero/programmer-illustration.svg"
          alt="Illustration of a programmer"
          fill="true"
          objectFit="contain"
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
            as="h1"
            fontSize={{ base: "4xl", lg: "7xl" }}
            lineHeight="-2.5px"
          >
            {t("home.hero.heading1")}
          </Heading>
          <Heading
            as="h1"
            textDecoration="underline"
            textDecorationColor="green"
            textDecorationThickness={{ base: "5px", lg: "10px" }}
            fontSize={{ base: "4xl", lg: "7xl" }}
            lineHeight="-2.5px"
          >
            {t("home.hero.heading2")}
          </Heading>
        </Flex>

        <Text>{t("home.hero.description")}</Text>
        <Flex gap={10}>
          <BorderBottomLink
            href="#contact-section"
            aria-label="Navigate to contact form section"
          >
            <Box>{t("common.links.contactMe")}</Box>
          </BorderBottomLink>
          <BorderBottomLink
            href={CURRICULUM_PDF}
            aria-label="Download Curriculum Vitae in pdf format"
          >
            <Box>{t("common.links.downloadCV")}</Box>
          </BorderBottomLink>
        </Flex>
      </Flex>
    </chakra.section>
  );
}
