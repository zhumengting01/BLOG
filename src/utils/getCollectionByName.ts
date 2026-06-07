import {getCollection, type CollectionKey, type CollectionEntry} from "astro:content";

export const getCollectionByName = async <T extends CollectionKey>(name: T) => {
  let posts = await getCollection(name);
  if (posts && posts.length > 0 ) {
    return posts.filter((post: CollectionEntry<T>) => {
      const data = post.data as Record<string, any>;
      return import.meta.env.PROD ? !data.draft : true
    });
  } else {
    return []
  }
}
