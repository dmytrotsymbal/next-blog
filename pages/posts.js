import Heading from "@/components/Heading";
import Head from "next/head";

const Posts = () => {
  return (
    <>
      <Head>
        <title>POSTS</title>
      </Head>
      <div style={{ minHeight: "1000px" }}>
        <div className="container">
          <Heading text="Posts" />
          <p>lorem lorem</p>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Posts;
