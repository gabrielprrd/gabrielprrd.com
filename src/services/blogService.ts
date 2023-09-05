import { type Article } from "@/models/article";
import ApiService from "./apiService";

const BASE_URL = "https://dev.to/api";
const USERNAME = "gabrielprrd";

type QueryParams = {
  page?: number;
  per_page?: number;
};

const BlogService = {
  async getArticles({ page, per_page }: QueryParams = {}) {
    try {
      const response = await ApiService.get(
        `${BASE_URL}/articles?username=${USERNAME}&page=${page ?? 1}&per_page=${
          per_page ?? 12
        }`
      );
      const json = (await response.json()) as Article[];

      return json;
    } catch (err) {
      throw new Error("An error occurred while fetching the articles.");
    }
  },
  async getArticleBySlug(slug: string) {
    try {
      const response = await ApiService.get(
        `${BASE_URL}/articles/${USERNAME}/${slug}`
      );
      const json = (await response.json()) as Article;

      return json;
    } catch (err) {
      new Error("An error occurred while fetching the article.");
    }
  },
};

export default BlogService;
