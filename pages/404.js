import { useRouter } from "next/router";
import { useEffect } from "react";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <>
      <img
        src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"
        alt="logo"
      />
    </>
  );
};

export default Error;
