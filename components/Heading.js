const Heading = ({ tag, text }) => {
  const Tag = tag || "h1";
  return <Tag style={{ textAlign: "center" }}>{text}</Tag>;
};

export default Heading;
