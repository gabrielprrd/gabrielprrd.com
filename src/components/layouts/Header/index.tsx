import { Box, chakra, Tooltip } from "@chakra-ui/react";
import LanguageSelect from "@/components/LanguageSelect";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Navigation from "@/components/layouts/Navigation";
import { useTranslation } from "next-i18next";
import LogoHomePageLink from "../LogoHomePageLink";

export default function Header() {
  const { t } = useTranslation();
  return (
    <chakra.header
      display="flex"
      bgColor="transparent"
      py={3}
      gap={3}
      justifyContent="space-between"
      alignItems="center"
    >
      <LogoHomePageLink />
      <Navigation />
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
    </chakra.header>
  );
}
