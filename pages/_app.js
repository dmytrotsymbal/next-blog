import "@/styles/globals.scss";
import GlobalLayout from "@/components/GlobalLayout";
import Head from "next/head";

const App = ({ Component, pageProps }) => (
  <GlobalLayout>
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&family=Plus+Jakarta+Sans:wght@300;400;700&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <Component {...pageProps} />
  </GlobalLayout>
);

export default App;
