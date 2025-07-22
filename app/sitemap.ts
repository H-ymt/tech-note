import { getNotePosts } from "app/note/utils";

export const baseUrl = "https://portfolio-blog-starter.vercel.app";

export default async function sitemap() {
  let notes = getNotePosts().map((post) => ({
    url: `${baseUrl}/note/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/note"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...notes];
}
