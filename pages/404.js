import { useRouter } from "next/router";
import { useEffect } from "react";
import { Head } from "next/document";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  });
  return (
    <>
      <Head>
        <title>ERROR</title>
      </Head>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg"
          alt="logo"
        />
      </div>
    </>
  );
};

export default Error;
