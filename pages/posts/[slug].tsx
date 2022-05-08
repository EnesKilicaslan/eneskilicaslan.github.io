import React from "react";

import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPost, getSlugs, PostInfo } from "@api/fileOperations";
import YouTube from "@components/YouTube";
import Head from "next/head";

import { PostWrapper } from "@components/PostWrapper";

// code block styling
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/stackoverflow-light.css";

// components
import H1 from "@components/H1";
import ListItem from "@components/ListItem";
import A from "@components/A";
import P from "@components/P";
import H2 from "@components/H2";
import { Image } from "@components/Image";
import Blockquote from "@components/Blockquote";

interface PostProp {
  params: {
    slug: string;
  };
}

export const BlogPost = (props: {
  info: PostInfo;
  mdx: MDXRemoteSerializeResult;
}) => {
  const { info, mdx } = props;

  return (
    <>
      <Head>
        <title>{info.title}</title>
      </Head>

      <PostWrapper date={info.date}>
        <>
          <H1>{info.title}</H1>

          <MDXRemote
            {...mdx}
            components={{
              YouTube,
              Image,
              h1: (props) => <H1 {...props} />,
              li: (props) => <ListItem {...props} />,
              a: (props) => <A {...props} />,
              p: (props) => <P {...props} />,
              h2: (props) => <H2 {...props} />,
              blockquote: (props) => <Blockquote {...props} />,
            }}
          />
        </>
      </PostWrapper>
    </>
  );
};

export async function getStaticProps({ params }: PostProp) {
  const { slug } = params;
  const { info, content } = getPost(slug);
  const mdx = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    props: {
      info,
      mdx,
    }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  const paths = getSlugs().map((slug) => ({ params: { slug } }));

  console.log(paths);
  return {
    paths,
    fallback: false, // false or 'blocking'
  };
}

export default BlogPost;
