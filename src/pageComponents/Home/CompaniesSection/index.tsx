import {
  BOTTOM_TOP_VARIANTS,
  NO_JS_BOTTOM_TOP_VARIANTS,
} from "@/constants/animations/bottomToTopVariants";
import { COMPANIES } from "@/constants/companies";
import { getAnimationVariants } from "@/utils/getAnimationVariants";
import {
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
  chakra,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useTranslation } from "next-i18next";

export default function CompaniesSection() {
  const { t } = useTranslation();
  const variants = getAnimationVariants(
    BOTTOM_TOP_VARIANTS,
    NO_JS_BOTTOM_TOP_VARIANTS
  );

  return (
    <chakra.section
      id="companies-section"
      display="flex"
      flexDirection="column"
      gap={10}
    >
      <Flex justifyContent="space-between" gap={4}>
        <Heading size="lg">{t("home.companies.title")}</Heading>
      </Flex>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20}>
        {COMPANIES.map((company) => (
          <LinkBox
            display="flex"
            flexDirection="column"
            width="100%"
            height="100%"
            position="relative"
            key={company.href}
            as={motion.div}
            initial="offscreen"
            whileInView="onscreen"
            variants={variants}
            viewport={{ once: true }}
          >
            <Flex direction="column" gap={4}>
              <Flex
                borderBottomWidth="3px"
                borderBottomColor="green"
                fontWeight="medium"
                paddingBottom={2}
                justifyContent="space-between"
              >
                <LinkOverlay
                  href={company.href}
                  aria-label="Go to company's website"
                >
                  <Heading textTransform="uppercase" size="md">
                    {t(company.title)}
                  </Heading>
                </LinkOverlay>
              </Flex>
              <Flex justifyContent="space-between">
                <Text size="sm">{company.place}</Text>
                <Text>{t(company.time)}</Text>
              </Flex>
              <Text size="sm">{t(company.description)}</Text>
            </Flex>
          </LinkBox>
        ))}
      </SimpleGrid>
    </chakra.section>
  );
}
