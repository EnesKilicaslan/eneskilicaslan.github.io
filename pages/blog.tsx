import { Container } from "@components/Container";
import { Heading } from "@components/Heading";

import { getPostInfos, PostInfo } from "@api/fileOperations";
import Link from "next/link";

import style from "./blog.module.css";

export const Blog = (props: { infos: PostInfo[] }) => {
  return (
    <Container>
      <>
        <Heading active="/blog" />
        <div className="flex">
          <ul className="text-2xl max-w-2xl text-left mx-auto ">
            {props.infos.map((info) => {
              return (
                <li key={info.slug} className="my-8">
                  <Link href={`/posts/${info.slug}`}>
                    <a>
                      <div className="">
                        <span className="text-gray-500">{info.date}</span>
                        <span className={style.title}>{info.title}</span>
                      </div>
                    </a>
                  </Link>
                  <div className="ml-4">
                    <div className="text-lg">{info.excerpt}</div>
                  </div>

                  <div className="text-blue-900 hidden sm:block">
                    {info.tags.map((tag) => {
                      return (
                        <Link href={`/posts/${tag}`} key={tag}>
                          <a className="inline-block ml-3">{`#${tag}`}</a>
                        </Link>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    </Container>
  );
};

export async function getStaticProps() {
  const infos = getPostInfos();

  console.log("infos: ", infos);

  return {
    props: {
      infos, // will be passed to the page component as props
    },
  };
}

export default Blog;
