import { COMPANIES } from "@/constants/companies";
import { bottomToTopVariants } from "@/utils/animations/bottomToTopVariants";
import {
  Flex,
  Heading,
  LinkBox,
  LinkOverlay,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function CompaniesSection() {
  return (
    <Flex direction="column" gap={10}>
      <Flex justifyContent="space-between" gap={4}>
        <Heading size="lg">Where I&apos;ve worked</Heading>
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
            variants={bottomToTopVariants}
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
                <LinkOverlay href={company.href}>
                  <Heading textTransform="uppercase" size="md">
                    {company.title}
                  </Heading>
                </LinkOverlay>
              </Flex>
              <Flex justifyContent="space-between">
                <Text size="sm">{company.place}</Text>
                <Text>{company.time}</Text>
              </Flex>
              <Text size="sm">{company.description}</Text>
            </Flex>
          </LinkBox>
        ))}
      </SimpleGrid>
    </Flex>
  );
}
