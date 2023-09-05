import DefaultLayout from "@/components/layouts/DefaultLayout";
import CompaniesSection from "@/pageComponents/Home/CompaniesSection";
import HeroSection from "@/pageComponents/Home/HeroSection";
import ProjectsSection from "@/pageComponents/Home/ProjectsSection";
import { Center, Divider, Text, useColorModeValue } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import type { ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../next-i18next.config.mjs";
import Head from "@/components/layouts/Head";
import BlogPostsSection from "@/pageComponents/Home/BlogPostsSection";
import BlogService from "@/services/blogService";
import { type Article } from "@/models/article";

Home.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

type Props = {
  articles: Article[];
  error: Error;
};

export default function Home({ articles, error }: Props) {
  return (
    <>
      <Head />
      <chakra.main
        display="flex"
        flexDirection="column"
        gap={{ base: 20, md: 36 }}
        pb={{ base: 20, md: 36 }}
      >
        <HeroSection />
        <Divider color={useColorModeValue("black", "white")} />
        <CompaniesSection />
        <Divider color={useColorModeValue("black", "white")} />
        <ProjectsSection />
        <Divider color={useColorModeValue("black", "white")} />
        {articles.length && <BlogPostsSection articles={articles} />}
        {error && (
          <Center>
            <Text>{error.message}</Text>
          </Center>
        )}
        <Divider color={useColorModeValue("black", "white")} />
      </chakra.main>
    </>
  );
}

type Params = {
  locale: string;
};

export const getStaticProps = async ({ locale }: Params) => {
  let articles: Article[] = [];
  let error: Error | null = null;

  try {
    articles = await BlogService.getArticles({ page: 1, per_page: 3 });
  } catch (err) {
    error = err as Error;
  }

  return {
    props: {
      articles,
      error,
      ...(await serverSideTranslations(locale, ["common"], nextI18nConfig, [
        "en",
        "pt",
      ])),
    },
  };
};
