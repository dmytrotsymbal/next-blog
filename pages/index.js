import Heading from "@/components/Heading";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>
      <div className={styles.homePage}>
        <Heading text="HomePage" />

        <p className={styles.homePage_paragraph}>asdasdasd</p>

        <Image
          style={{
            marginLeft: "calc(50% - 245px)",
          }}
          src="/woman.png"
          width={490}
          height={480}
          alt="womanImgHomePage"
        />
      </div>
    </>
  );
};

export default Home;
