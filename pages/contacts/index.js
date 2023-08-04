import Link from "next/link";
import Heading from "@/components/Heading";

const Contacts = () => {
  return (
    <>
      <Heading text="Contacts list:" />
      <Link href="/contacts/contact">Jack</Link>
    </>
  );
};

export default Contacts;
