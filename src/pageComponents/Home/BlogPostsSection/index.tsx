import { BlogPostCard } from "@/components/BlogPostCard";
import BorderBottomLink from "@/components/BorderBottomLink";
import { type Article } from "@/models/article";
import { chakra, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useTranslation } from "next-i18next";

type Props = {
  articles: Article[];
};

export default function BlogPostsSection({ articles }: Props) {
  const { t } = useTranslation();

  return (
    <chakra.section
      id="blog-posts-section"
      display="flex"
      flexDirection="column"
      gap={10}
    >
      <Flex justifyContent="space-between" gap={4} alignItems="center">
        <Heading size="lg">{t("home.blogPosts.title")}</Heading>
        <BorderBottomLink href="/blog" alignSelf="center">
          {t("home.blogPosts.linkForBlog")}
        </BorderBottomLink>
      </Flex>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={10}>
        {articles.length > 0 &&
          articles.map((article) => (
            <BlogPostCard.Root key={`blog_page_post_card_${article.id}`}>
              <BlogPostCard.Image src={article.social_image} alt="" />
              <BlogPostCard.Content>
                <BlogPostCard.Title href={`/blog/${article.slug}`}>
                  {article.title}
                </BlogPostCard.Title>
                <BlogPostCard.Description>
                  {article.description}
                </BlogPostCard.Description>
                <BlogPostCard.ReadingTime>
                  {article.reading_time_minutes}
                </BlogPostCard.ReadingTime>
              </BlogPostCard.Content>
              <BlogPostCard.AnimatedBg />
            </BlogPostCard.Root>
          ))}
      </SimpleGrid>
    </chakra.section>
  );
}
