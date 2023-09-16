import DefaultLayout from "@/components/layouts/DefaultLayout";
import {
  Box,
  chakra,
  Container,
  Heading,
  Text,
  Wrap,
  VisuallyHidden,
} from "@chakra-ui/react";
import { type ReactElement } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18nConfig from "../../../next-i18next.config.mjs";
import BlogService from "@/services/blogService";
import { ReactMarkdown } from "react-markdown/lib/react-markdown.js";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import { useTranslation } from "next-i18next";
import { formatDate } from "@/utils/formatDate";
import Head from "@/components/layouts/Head";
import Link from "@/components/infra/Link";
import { type Article } from "@/models/article.js";
import { articleTheme } from "@/styles/articleTheme";
import Image from "@/components/infra/Image";
import { ARTICLES_REVALIDATION_TIME_SECONDS } from "@/constants/articlesRevalidationTimeSeconds";

BlogPost.getLayout = function (page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>;
};

type Props = {
  article: Article;
};

export default function BlogPost({ article }: Props) {
  const {
    title,
    description,
    slug,
    social_image,
    reading_time_minutes,
    published_at,
    tags,
    cover_image,
    body_markdown,
    canonical_url,
  } = article;
  const { t } = useTranslation();

  return (
    <>
      <Head
        title={title}
        description={description}
        url={`https://gabrielprrd.de/blog/${slug}`}
        image={social_image}
      />
      <chakra.main
        as={Container}
        mb={20}
        display="flex"
        flexDirection="column"
        gap={20}
      >
        <chakra.article display="flex" flexDirection="column" gap={2}>
          <Heading as="h1" size="lg" my={2}>
            {title}
          </Heading>
          <Text>
            {reading_time_minutes} {`${t("common.blogPostCard.readingTime")} `}—{" "}
            <time>{formatDate(published_at)}</time>
          </Text>
          <Wrap gap={10}>
            <VisuallyHidden>
              <Text>Tags: </Text>
            </VisuallyHidden>
            {tags.length > 0 &&
              tags.map((tag) => (
                <Text
                  backgroundColor="green"
                  color="black"
                  p={1}
                  key={crypto.randomUUID()}
                >
                  {tag}
                </Text>
              ))}
          </Wrap>
          <Box
            position="relative"
            overflow="hidden"
            height={{ base: "20vh", md: "25vh", lg: "30vh" }}
            boxShadow="md"
          >
            <Image
              fill="true"
              objectFit="contain"
              src={cover_image}
              alt="Blog post cover"
            />
          </Box>
          <ReactMarkdown
            components={ChakraUIRenderer(articleTheme)}
            // eslint-disable-next-line react/no-children-prop
            children={body_markdown}
            skipHtml
          />
        </chakra.article>
        <Text>
          {t("blog.devToCallToAction")}{" "}
          <Link href={canonical_url} color="green">
            dev.to
          </Link>
        </Text>
      </chakra.main>
    </>
  );
}

export const getStaticPaths = async () => {
  const articles = await BlogService.getArticles();

  return {
    paths: articles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: "blocking",
  };
};

type Params = {
  params: {
    slug: string;
  };
  locale: string;
};

export const getStaticProps = async ({ params, locale }: Params) => {
  let article: Article | undefined = undefined;

  try {
    article = await BlogService.getArticleBySlug(params.slug);
  } catch (err) {
    return { notFound: true };
  }

  if (!article) return { notFound: true };

  return {
    props: {
      article,
      ...(await serverSideTranslations(
        locale,
        ["common", "blog"],
        nextI18nConfig,
        ["en", "pt"]
      )),
    },
    revalidate: ARTICLES_REVALIDATION_TIME_SECONDS,
  };
};
