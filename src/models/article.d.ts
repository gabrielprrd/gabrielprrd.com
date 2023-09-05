export type Article = {
  id: number;
  slug: string;
  title: string;
  description: string;
  social_image: string;
  cover_image: string;
  reading_time_minutes: string;
  body_markdown: string;
  canonical_url: string;
  tags: string[];
  published_at: string;
};
