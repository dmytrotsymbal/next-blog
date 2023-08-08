import Heading from "@/components/Heading";
import Head from "next/head";
import Link from "next/link";
// import styles from "@/styles/Posts.module.scss";
import { useState } from "react";

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { posts: data },
  };
};

const Posts = ({ posts }) => {
  const [part, setPart] = useState(20);

  function loadMore() {
    setPart(part + 20);
  }
  return (
    <>
      <Head>
        <title>POSTS</title>
      </Head>

      <Heading text="Posts list:" />

      <ul style={{ marginLeft: "calc(50% - 245px)" }}>
        {posts.slice(0, part).map((post) => (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>

      <button
        type="button"
        style={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
          width: "100px",
          marginTop: "20px",
          marginLeft: "calc(50% - 50px)",
        }}
        onClick={loadMore}
      >
        Load more
      </button>
    </>
  );
};

export default Posts;
