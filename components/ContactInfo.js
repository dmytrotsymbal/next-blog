import Head from "next/head";
import Heading from "./Heading";
import Link from "next/link";

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

      <Heading text={name} />

      <div>
        <Link href={`mailto:${email}`}>{email}</Link>
        <Link href={`tel:${phone}`}>{phone}</Link>
        <Link href={website}>{website}</Link>
      </div>

      <br />
      <div>
        <p>{street}</p>
        <p>{suite}</p>
        <p>{city}</p>
        <p>{zipcode}</p>
      </div>
    </>
  );
};

export default ContactInfo;
