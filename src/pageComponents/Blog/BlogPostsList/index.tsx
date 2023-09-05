import { BlogPostCard } from "@/components/BlogPostCard";
import { type Article } from "@/models/article";
import { SimpleGrid } from "@chakra-ui/react";

type Props = {
  articles: Article[];
};

export default function BlogPostsList({ articles }: Props) {
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={10}>
      {articles.map((article) => (
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
  );
}
