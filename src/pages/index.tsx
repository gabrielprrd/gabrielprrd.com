import DefaultLayout from "@/components/layouts/DefaultLayout";
import CompaniesSection from "@/pageComponents/Home/CompaniesSection";
import HeroSection from "@/pageComponents/Home/HeroSection";
import ProjectsSection from "@/pageComponents/Home/ProjectsSection";
import { Divider } from "@chakra-ui/react";
import Head from "next/head";
import { chakra } from "@chakra-ui/react";
import type { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";

Home.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

export default function Home() {
  return (
    <>
      <Head />
      <chakra.main
        display="flex"
        flexDirection="column"
        gap={{ base: 20, md: 36 }}
        pb={{ base: 20, md: 36 }}
      >
        <section id="hero-section">
          <HeroSection />
        </section>
        <Divider />
        <section id="companies-section">
          <CompaniesSection />
        </section>
        <Divider />
        <section id="projects-section">
          <ProjectsSection />
        </section>
        <Divider />
      </chakra.main>
    </>
  );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
      "en",
      "pt",
    ])),
  },
});
