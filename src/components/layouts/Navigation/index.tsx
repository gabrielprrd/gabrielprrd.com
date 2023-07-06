import {
  chakra,
  Flex,
  Text,
  Icon,
  type FlexProps,
  Tooltip,
  Box,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { AiFillMail } from "react-icons/ai";
import { CONTACT_INFO } from "@/constants/contactInfo";
import Link from "@/components/infra/Link";
import { useTranslation } from "next-i18next";
import LanguageSelect from "@/components/LanguageSelect";

export default function Navigation(props: FlexProps) {
  const { t } = useTranslation();

  return (
    <Flex
      bgColor="transparent"
      py={3}
      gap={3}
      justify="space-between"
      direction={{ sm: "row" }}
      alignItems="center"
      {...props}
    >
      <Link
        href="/"
        borderBottomColor="green"
        _hover={{ borderBottomWidth: 2 }}
        style={{ textDecoration: "none" }}
      >
        <Text fontSize="xl" fontWeight="bold" textDecoration="none">
          gabrielprrd
        </Text>
      </Link>

      <Flex gap={3} alignItems="center">
        <chakra.nav display="flex" gap={3}>
          <Tooltip label="Github" hasArrow>
            <chakra.span>
              <Link
                href="https://github.com/gabrielprrd"
                _hover={{ color: "green" }}
              >
                <Icon as={FaGithub} height="5" w="auto" />
              </Link>
            </chakra.span>
          </Tooltip>
          <Tooltip label="Linkedin" hasArrow>
            <chakra.span>
              <Link
                href="https://www.linkedin.com/in/gabrielprrd/"
                _hover={{ color: "green" }}
              >
                <Icon as={FaLinkedin} height="5" w="auto" />
              </Link>
            </chakra.span>
          </Tooltip>
        </chakra.nav>
        <Flex h="full" alignItems="center" gap={3}>
          <Tooltip label="Email" hasArrow shouldWrapChildren>
            <Link href={`mailto:${CONTACT_INFO.email}`}>
              <Icon
                cursor="pointer"
                _hover={{ color: "green" }}
                as={AiFillMail}
                boxSize="1.35em"
              />
            </Link>
          </Tooltip>
          <Tooltip label={t("common.links.phone")} hasArrow shouldWrapChildren>
            <Link href={`tel:${CONTACT_INFO.phone}`}>
              <Icon
                cursor="pointer"
                _hover={{ color: "green" }}
                as={FaPhoneAlt}
              />
            </Link>
          </Tooltip>
        </Flex>
      </Flex>
      <Box
        h="full"
        alignItems="flex-start"
        gap={3}
        display={{ base: "none", md: "flex" }}
      >
        <Tooltip
          shouldWrapChildren
          label={t("common.themeSwitcher.label")}
          hasArrow
        >
          <ThemeSwitcher marginTop={-2} />
        </Tooltip>
        <Tooltip
          shouldWrapChildren
          label={t("common.languageSelect.label")}
          hasArrow
        >
          <LanguageSelect marginTop={-1 / 2} />
        </Tooltip>
      </Box>
    </Flex>
  );
}
