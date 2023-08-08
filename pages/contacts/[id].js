import ContactInfo from "@/components/ContactInfo";

export const getServerSideProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contact: data,
    },
  };
};

const Contact = ({ contact }) => {
  return (
    <>
      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
