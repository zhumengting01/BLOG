// 按月份归档博文
import dayjs from "dayjs";
import type { CollectionEntry } from "astro:content";

const getPostsByMonth = (posts: CollectionEntry<"blog">[]) => {
  const groupedPosts: Record<string, CollectionEntry<"blog">[]> = {};

  posts.forEach((post) => {
    const month = dayjs(post.data.date).format("MM");
    groupedPosts[month] ??= [];
    groupedPosts[month].push(post);
  });

  return groupedPosts;
};

export default getPostsByMonth;
