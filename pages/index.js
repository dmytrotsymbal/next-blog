import Heading from "@/components/Heading";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import { Card, CardContent, Container, Grid } from "@mui/material";
import { useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_HOST}/gallery/`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      gallery: data,
    },
  };
};
const Home = ({ gallery }) => {
  const [part, setPart] = useState(12);

  function loadMore() {
    setPart(part + 12);
  }
  return (
    <>
      <Head>
        <title>HOME</title>
      </Head>

      <div className={styles.homePage}>
        <Container>
          <Heading text="HomePage" />

          <div style={{ marginTop: "20px" }}>
            <Grid container spacing={2}>
              {gallery.slice(0, part).map(({ id, title, url }) => (
                <Grid item xs={12} sm={6} md={4} key={id}>
                  <Card className={styles.card}>
                    <Image
                      src={url}
                      alt="galleryImage"
                      width={500}
                      height={400}
                    />
                    <p>{title}</p>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>

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
        </Container>
      </div>
    </>
  );
};

export default Home;
