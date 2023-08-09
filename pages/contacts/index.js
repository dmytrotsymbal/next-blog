import Link from "next/link";
import Heading from "@/components/Heading";
import Head from "next/head";
import { Container } from "@mui/material";
import styles from "@/styles/Contacts.module.scss";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: data,
    },
  };
};
const Contacts = ({ contacts }) => {
  return (
    <>
      <Head>
        <title>CONTACTS</title>
      </Head>

      <div className={styles.page}>
        <Container>
          <Heading text="Contacts list:" />
          <ol style={{ marginTop: "30px" }}>
            {contacts.map((contact) => (
              <li key={contact.id}>
                <Link href={`contacts/${contact.id}`}>{contact.name}</Link>
                {"-"}
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            ))}
          </ol>
        </Container>
      </div>
    </>
  );
};

export default Contacts;
