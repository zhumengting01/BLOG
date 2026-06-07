import {compact, uniq} from 'lodash-es'
import {dealLabel} from './dealLabel';
import type {CollectionEntry} from "astro:content";

const getUniqueTags = (posts: CollectionEntry<'blog'>[]) => {
  const filteredPosts = posts.filter(({data}) => {
    return import.meta.env.PROD ? !data.draft : true
  });
  const tags = filteredPosts.flatMap(post => dealLabel(post.data.tags));
  return compact(uniq(tags));
};

export default getUniqueTags;
