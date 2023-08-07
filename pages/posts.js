import Heading from "@/components/Heading";
import Head from "next/head";
import styles from "@/styles/Posts.module.scss";

const Posts = () => {
  return (
    <>
      <Head>
        <title>POSTS</title>
      </Head>
      <div className={styles.postsPage}>
        <div className={styles.postsPage_container}>
          <Heading text="Posts" />
          <p className={styles.postsPage_paragraph}>
            lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </>
  );
};

export default Posts;
