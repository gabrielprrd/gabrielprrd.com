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
      <Head>
        {/* Primary Meta Tags */}
        <title>Gabriel Afonso - Frontend Dev</title>
        <meta name="description" content="Portfolio website" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Gabriel Afonso - Frontend Dev" />
        <meta property="og:description" content="Portfolio website" />
        <meta property="og:url" content="https://gabrielprrd.vercel.app/" />
        <meta
          property="og:image"
          content="/assets/images/home/projects/personal-portfolio.png"
        />

        {/* Twitter */}
        <meta name="twitter:title" content="Gabriel Afonso - Frontend Dev" />
        <meta name="twitter:description" content="Personal portfolio" />
        <meta
          property="twitter:url"
          content="https://gabrielprrd.vercel.app/"
        />
        <meta
          name="twitter:image"
          content="/assets/images/home/projects/personal-portfolio.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
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
