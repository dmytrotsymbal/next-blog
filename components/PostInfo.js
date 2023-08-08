import Heading from "./Heading";

const PostInfo = ({ post }) => {
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h2" text="Empty post" />;
  }

  return (
    <>
      <Heading tag="h2" text={title} />
      <p>{body}</p>
    </>
  );
};

export default PostInfo;
