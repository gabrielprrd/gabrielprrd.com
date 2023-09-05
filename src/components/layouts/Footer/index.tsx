import ContactForm from "@/components/ContactForm";
import {
  chakra,
  Flex,
  Text,
  useColorModeValue,
  Heading,
  SimpleGrid,
  Divider,
} from "@chakra-ui/react";
import { useTranslation } from "next-i18next";
import LogoHomePageLink from "../LogoHomePageLink";
import Navigation from "../Navigation";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <chakra.footer
      w="full"
      bgColor={useColorModeValue("lightGrey", "darkGrey")}
      px={{ base: 5, lg: 24 }}
      pb={{ base: 5, lg: 16 }}
      pt={{ base: 10, lg: 16 }}
      bgImage="/assets/images/patterns/pattern-rings.svg"
      bgRepeat="no-repeat"
      bgPosition={{ base: "-1500% 80%", md: "-30% 80%", lg: "-20% 65%" }}
      bgSize={{ base: 400 }}
    >
      <Flex direction="column">
        <SimpleGrid columns={{ base: 1, md: 2 }} gap={20}>
          <Flex direction="column" gap={5}>
            <Heading size="lg" textAlign={{ base: "center", md: "start" }}>
              {t("common.footer.heading")}
            </Heading>
            <Text textAlign={{ base: "center", md: "start" }}>
              {t("common.footer.description")}
            </Text>
          </Flex>
          <ContactForm />
        </SimpleGrid>
      </Flex>

      <Divider my={10} color={useColorModeValue("black", "white")} />
      <Flex justifyContent="space-between">
        <LogoHomePageLink />
        <Navigation />
      </Flex>
    </chakra.footer>
  );
}
