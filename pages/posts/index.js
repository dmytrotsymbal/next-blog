import Heading from "@/components/Heading";
import Head from "next/head";
import Link from "next/link";
// import styles from "@/styles/Posts.module.scss";

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
  return (
    <>
      <Head>
        <title>POSTS</title>
      </Head>

      <Heading text="Posts list:" />

      <ul style={{ marginLeft: "calc(50% - 245px)" }}>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
