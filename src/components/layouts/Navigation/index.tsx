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
        aria-label="Go to home page"
        href="/"
        borderBottomColor="green"
        _hover={{ borderBottomWidth: 2 }}
        style={{ textDecoration: "none" }}
      >
        <Text fontSize="2xl" fontWeight="bold" textDecoration="none">
          gabrielprrd
        </Text>
      </Link>

      <Flex gap={3} alignItems="center">
        <chakra.nav display="flex" gap={3}>
          <Tooltip label="Github" hasArrow>
            <chakra.span>
              <Link
                aria-label="Go to github profile page"
                href="https://github.com/gabrielprrd"
                _hover={{ color: "green" }}
              >
                <Icon as={FaGithub} height="7" w="auto" />
              </Link>
            </chakra.span>
          </Tooltip>
          <Tooltip label="Linkedin" hasArrow>
            <chakra.span>
              <Link
                aria-label="Go to linkedin profile page"
                href="https://www.linkedin.com/in/gabrielprrd/"
                _hover={{ color: "green" }}
              >
                <Icon as={FaLinkedin} height="7" w="auto" />
              </Link>
            </chakra.span>
          </Tooltip>
        </chakra.nav>
        <Flex h="full" alignItems="center" gap={3}>
          <Tooltip label="Email" hasArrow shouldWrapChildren>
            <Link
              href={`mailto:${CONTACT_INFO.email}`}
              aria-label="Send email to Gabriel"
            >
              <Icon
                cursor="pointer"
                _hover={{ color: "green" }}
                as={AiFillMail}
                boxSize="2.1em"
              />
            </Link>
          </Tooltip>
          <Tooltip label={t("common.links.phone")} hasArrow shouldWrapChildren>
            <Link
              href={`tel:${CONTACT_INFO.phone}`}
              aria-label="Call Gabriel's phone number"
            >
              <Icon
                cursor="pointer"
                _hover={{ color: "green" }}
                as={FaPhoneAlt}
                boxSize="1.4em"
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
