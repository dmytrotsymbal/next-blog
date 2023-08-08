import Heading from "@/components/Heading";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import { Container } from "@mui/material";

const Home = () => {
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>

      <Container>
        <div className={styles.homePage}>
          <Heading text="HomePage" />

          <Image
            // style={{
            //   marginLeft: "calc(50% - 245px)",
            // }}
            src="/woman.png"
            width={490}
            height={480}
            alt="womanImgHomePage"
          />
        </div>
      </Container>
    </>
  );
};

export default Home;
