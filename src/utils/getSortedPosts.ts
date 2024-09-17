import type { CollectionEntry } from "astro:content";
import postFilter from "./postFilter";

const getSortedPosts = (posts: CollectionEntry<"blog">[]) => {
  return posts
    .filter(postFilter)
    .sort((a,b) => (new Date(a.data.pubDate) < new Date(b.data.pubDate) ? 1 : ((new Date(b.data.pubDate) < new Date(a.data.pubDate)) ? -1 : 0)));
};

export default getSortedPosts;
