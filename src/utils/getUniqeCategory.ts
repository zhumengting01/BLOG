import {flattenDeep, compact, uniq} from 'lodash-es'
import {dealLabel} from './dealLabel';
import type {CollectionEntry} from "astro:content";

const getUniqueCategory = (posts: CollectionEntry<'blog'>[]) => {
  const filteredPosts = posts.filter(({data}) => {
    return import.meta.env.PROD ? !data.draft : true
  });
  const categories = filteredPosts.flatMap(post => flattenDeep(dealLabel(post.data.category)));
  return compact(uniq(categories));
};

export default getUniqueCategory;
