// 根据年份归档博文
import dayjs from 'dayjs'
import type {CollectionEntry} from "astro:content";

const getPostsByYear = (posts: CollectionEntry<'blog'>[]) => {
  let obj: Record<string, CollectionEntry<'blog'>[]> = {}
  posts.forEach(post => {
    let postCreateYear = dayjs(post.data.date).format("YYYY")
    if (postCreateYear in obj) {
      obj[postCreateYear].push(post)
    } else {
      obj[postCreateYear] = [post]
    }
  })
  return obj
}
export default getPostsByYear;
