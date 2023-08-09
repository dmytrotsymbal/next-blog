import Head from "next/head";
import Link from "next/link";
import { Card, CardContent, Container } from "@mui/material";
import styles from "../styles/ContactInfo.module.scss";
import Heading from "./Heading";

const ContactInfo = ({ contact }) => {
  const { name, email, phone, address, website } = contact || {};

  const { street, suite, city, zipcode } = address || {};

  if (!contact) {
    return <Heading text="Contact not found" />;
  }

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <div className={styles.ContactInfoDiv}>
        <Container>
          <Card className={styles.card}>
            <CardContent>
              <Heading text={name} />
              <div>
                <p>
                  <strong>Adress:</strong> {city}, {street}, {suite}, {zipcode}{" "}
                </p>
              </div>

              <div className={styles.divWithLinks}>
                <strong>Contact info:</strong>

                <ul className={styles.ul}>
                  <li>
                    <Link href={`mailto:${email}`}>{email}</Link>
                  </li>

                  <li>
                    <Link href={`tel:${phone}`}>{phone}</Link>
                  </li>

                  <li>
                    <Link href={website}>{website}</Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default ContactInfo;
