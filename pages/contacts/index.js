import Link from "next/link";
import Heading from "@/components/Heading";
import Head from "next/head";

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
      <Heading text="Contacts list:" />

      <ol>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <Link href={`contacts/${contact.id}`}>{contact.name}</Link>
            {"-"}
            <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </li>
        ))}
      </ol>
    </>
  );
};

export default Contacts;
