import path from "path";
import { sync } from "glob";
import { cwd } from "process";
import { readFileSync } from "fs";
import matter from "gray-matter";
import P from "@components/P";

const POSTS_PATH = path.join(cwd(), "posts");
const POST_EXTENSION = ".mdx";

export function getSlugs(): string[] {
  // console.log(`Current directory: ${cwd()}`);
  const fileNames = sync("*.mdx", {
    cwd: POSTS_PATH,
  });

  return fileNames.map((fileName) => fileName.split(".")[0]);
}

export function getPost(slug: string): Post {
  const { data, content } = matter(
    readFileSync(path.join(POSTS_PATH, `${slug}.mdx`))
  );

  return {
    info: {
      title: data.title,
      date: `${data.date.getDate()}.${
        data.date.getMonth() + 1
      }.${data.date.getFullYear()}`,
      excerpt: data.excerpt,
      tags: data.tags,
      slug,
    },
    content,
  };
}

export function getPosts(): Post[] {
  const posts = getSlugs()
    .map((slug) => {
      const { data, content } = matter(
        readFileSync(path.join(POSTS_PATH, `${slug}.mdx`))
      );

      return {
        content,
        info: {
          slug,
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
          tags: data.tags,
        },
      };
    })
    .sort((p1, p2) => {
      console.log("date1: ", new Date(p1.info.date));
      return new Date(p1.info.date) > new Date(p2.info.date) ? 1 : -1;
    });

  return posts;
}

export function getPostInfos(): PostInfo[] {
  return getSlugs()
    .map((slug) => {
      const { data } = matter(
        readFileSync(path.join(POSTS_PATH, `${slug}.mdx`))
      );

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags,
      };
    })
    .sort((p1, p2) => {
      // sort the posts DESC, newest on top
      console.log("p1: ", p1);
      console.log("p2: ", p2);
      return p1.date < p2.date ? 1 : -1;
    })
    .map((p) => ({
      // turn the date into string
      ...p,
      date: `${p.date.getDate()}.${
        p.date.getMonth() + 1
      }.${p.date.getFullYear()}`,
    }));
}

export interface Post {
  content: string;
  info: PostInfo;
}

export interface PostInfo {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}
