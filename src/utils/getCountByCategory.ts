import {compact, flattenDeep, countBy} from 'lodash-es'
import {dealLabel} from './dealLabel'
import type {CollectionEntry} from "astro:content";

const getCountByCategory = (posts: CollectionEntry<'blog'>[]) => {
  let category: string[] = [];
  const filteredPosts = posts.filter(({data}) => {
    return import.meta.env.PROD ? !data.draft : true
  });
  filteredPosts.forEach(post => {
    category = compact([...category, ...flattenDeep(dealLabel(post.data.category))])
  });
  return countBy(category);
};

export default getCountByCategory;
