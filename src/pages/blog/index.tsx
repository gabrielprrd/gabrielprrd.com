import DefaultLayout from "@/components/layouts/DefaultLayout";
import { Center, chakra, Container, Heading, Text } from "@chakra-ui/react";
import { type ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";
import BlogPostsList from "@/pageComponents/Blog/BlogPostsList";
import BlogService from "@/services/blogService";
import Head from "@/components/layouts/Head";
import { type Article } from "@/models/article.js";

Blog.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

type Props = {
  articles: Article[];
  error: Error;
};

export default function Blog({ articles, error }: Props) {
  return (
    <>
      <Head
        title="Blog - Gabriel Afonso"
        description="Web dev tips"
        url="https://gabrielprrd.de/blog"
      />
      <chakra.main as={Container} maxW={{ md: "80vw" }} mb={20}>
        <Heading as="h1" size="lg" my={20}>
          Blog
        </Heading>
        {articles.length && <BlogPostsList articles={articles} />}
        {error && (
          <Center>
            <Text>{error.message}</Text>
          </Center>
        )}
      </chakra.main>
    </>
  );
}

type Params = {
  locale: string;
  query: string;
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
