import Heading from "@/components/Heading";
import styles from "@/styles/Home.module.scss";
import Image from "next/image";
import Head from "next/head";
import { Card, CardContent, Container, Grid } from "@mui/material";
import { useState } from "react";
import Button from "@/components/Button";
export const getStaticProps = async () => {
  if (!process.env.API_HOST) {
    console.error("API_HOST is not defined");
    return {
      props: {
        gallery: null,
      },
    };
  }

  try {
    const res = await fetch(`${process.env.API_HOST}/gallery`);
    const data = await res.json();

    return {
      props: {
        gallery: data || null,
      },
    };
  } catch (error) {
    console.error("Error fetching gallery data:", error);

    return {
      props: {
        gallery: null,
      },
    };
  }
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
              {gallery && Array.isArray(gallery) ? (
                gallery.slice(0, part).map(({ id, title, url }) => (
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
                ))
              ) : (
                <p>No gallery data available</p>
              )}
            </Grid>
          </div>

          <div className={styles.loadMoreDiv}>
            <Button
              text={"Load more"}
              doing={loadMore}
              style={{ backgroundColor: "black", color: "white" }}
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
