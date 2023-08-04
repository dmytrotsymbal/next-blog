import Link from "next/link";
import Heading from "@/components/Heading";
import Head from "next/head";
const Contacts = () => {
  return (
    <>
      <Head>
        <title>CONTACTS</title>
      </Head>
      <Heading text="Contacts list:" />
      <Link href="/contacts/contact">Jack</Link>
    </>
  );
};

export default Contacts;
